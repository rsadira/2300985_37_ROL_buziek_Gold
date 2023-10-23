const StudioService = require("../service/studio.service");
const { MusicStudio, StudioImage } = require("../models");
const studioService = new StudioService();

class StudioListController {
  async studioList(req, res) {
    try {
      const musicStudios = await studioService.getStudios();

      res.render("studio-list", {
        musicStudios,
        title: "Book your studios now!",
        layout: "layouts/layouts",
        user: req.user,
      });
    } catch (error) {
      console.error("Error fetching music studios:", error);
      res.status(500).send("An error occurred while fetching data.");
    }
  }
  async renderMyStudios(req, res) {
    try {
      const userId = req.user.id;

      const ownedStudios = await studioService.getStudiosByOwner(userId);

      res.render("my-studios", {
        studios: ownedStudios, // Use 'studios' instead of 'ownedStudios'
        title: "My Studios",
        layout: "layouts/layouts",
        user: req.user,
      });
    } catch (error) {
      console.error(error);
      res.render("error", { error });
    }
  }

  async renderEditStudio(req, res) {
    try {
      const studioId = req.params.studioId;

      const studio = await studioService.getStudioById(studioId);

      res.render("edit-studio", {
        studio,
        title: "Edit Studio",
        layout: "layouts/layouts",
        user: req.user,
      });
    } catch (error) {
      console.error(error);
      res.render("error", { error });
    }
  }

  async getStudiosByOwner(req, res) {
    try {
      const userId = req.user.id;
      const studios = await studioService.getStudiosByOwner(userId);
      return res.json(studios);
    } catch (error) {
      return res.status(500).json({ error: "Unable to fetch studios" });
    }
  }
  async indexCreateStudio(req, res) {
    try {
      res.render("create-studio", {
        title: "Create New Studio",
        layout: "layouts/layouts",
        user: req.user,
      });
    } catch (error) {
      console.error(error);
      res.render("error", { error });
    }
  }

  async createStudio(req, res) {
    try {
      const {
        studio_name,
        location,
        equipment_available,
        hourly_rate,
        description,
        coverImage,
        img_url_1,
        img_url_2,
        img_url_3,
      } = req.body;

      const newStudio = await MusicStudio.create({
        studio_name,
        location,
        equipment_available,
        hourly_rate,
        description,
        image_url: coverImage,
        owner_user_id: req.user.id,
      });

      await StudioImage.create({
        studio_id: newStudio.id,
        img_url_1,
        img_url_2,
        img_url_3,
      });

      res.json({ studioId: newStudio.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Studio creation failed" });
    }
  }
  async updateStudio(req, res) {
    try {
      const {
        studioId,
        studio_name,
        location,
        equipment_available,
        hourly_rate,
        description,
        coverImage,
        img_url_1,
        img_url_2,
        img_url_3,
      } = req.body;

      const studio = await MusicStudio.findByPk(studioId);

      if (!studio) {
        return res.status(404).json({ error: "Studio not found" });
      }

      studio.studio_name = studio_name;
      studio.location = location;
      studio.equipment_available = equipment_available;
      studio.hourly_rate = hourly_rate;
      studio.description = description;
      studio.image_url = coverImage;

      await studio.save();

      const studioImage = await StudioImage.findOne({
        where: { studio_id: studioId },
      });

      studioImage.img_url_1 = img_url_1;
      studioImage.img_url_2 = img_url_2;
      studioImage.img_url_3 = img_url_3;

      await studioImage.save();

      res.json({ success: true, message: "Studio updated successfully" });
    } catch (error) {
      console.error(error);

      res.status(500).json({ error: "Studio update failed" });
    }
  }
}

module.exports = StudioListController;
