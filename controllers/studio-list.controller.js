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
      // Get the user's ID from the authenticated user object
      const userId = req.user.id;

      // Use the studio service to fetch the owned studios by the user
      const ownedStudios = await studioService.getStudiosByOwner(userId);

      // Render the 'my-studios' page and pass the owned studios to it
      res.render("my-studios", {
        studios: ownedStudios, // Use 'studios' instead of 'ownedStudios'
        title: "My Studios",
        layout: "layouts/layouts",
        user: req.user,
      });
    } catch (error) {
      // Handle errors
      console.error(error);
      res.render("error", { error });
    }
  }

  async renderEditStudio(req, res) {
    try {
      // Extract the studio ID from the URL parameter
      const studioId = req.params.studioId;

      // Fetch the studio information based on the studioId
      const studio = await studioService.getStudioById(studioId);

      // Render the Edit Studio page with studio data
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
      // Extract studio data from the request
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

      // Create a new studio (MusicStudio model) and store it in the database
      const newStudio = await MusicStudio.create({
        studio_name,
        location,
        equipment_available,
        hourly_rate,
        description,
        image_url: coverImage, // Main image URL
        owner_user_id: req.user.id, // Assuming user ID is available in req.user
      });

      // Create associated StudioImage records for image URLs
      await StudioImage.create({
        studio_id: newStudio.id, // Get the ID of the newly created studio
        img_url_1,
        img_url_2,
        img_url_3,
      });

      // Send a success response
      res.json({ studioId: newStudio.id });
    } catch (error) {
      console.error(error);
      // Handle errors
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

      // Find the studio in the database by ID
      const studio = await MusicStudio.findByPk(studioId);

      // Check if the studio exists
      if (!studio) {
        return res.status(404).json({ error: "Studio not found" });
      }

      // Update the studio attributes
      studio.studio_name = studio_name;
      studio.location = location;
      studio.equipment_available = equipment_available;
      studio.hourly_rate = hourly_rate;
      studio.description = description;
      studio.image_url = coverImage;

      // Save the changes to the studio
      await studio.save();

      // Find the associated StudioImage by studio ID
      const studioImage = await StudioImage.findOne({
        where: { studio_id: studioId },
      });

      // Update the StudioImage attributes
      studioImage.img_url_1 = img_url_1;
      studioImage.img_url_2 = img_url_2;
      studioImage.img_url_3 = img_url_3;

      // Save the changes to the StudioImage
      await studioImage.save();

      // Send a success response
      res.json({ success: true, message: "Studio updated successfully" });
    } catch (error) {
      console.error(error);
      // Handle errors
      res.status(500).json({ error: "Studio update failed" });
    }
  }
}

module.exports = StudioListController;
