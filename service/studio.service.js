const { MusicStudio, StudioImage } = require("../models");
const { QueryTypes } = require("sequelize");

class StudioService {
  async getStudios() {
    try {
      const studios = await MusicStudio.findAll();
      return studios;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getStudioById(studioId) {
    try {
      const studio = await MusicStudio.findByPk(studioId, {
        include: {
          model: StudioImage,
        },
      });

      if (!studio) {
        return null;
      }

      return studio;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getStudiosByOwner(userId) {
    try {
      const studios = await MusicStudio.findAll({
        where: { owner_user_id: userId },
      });
      return studios;
    } catch (error) {
      throw error;
    }
  }

  async createStudio(studioData) {
    try {
      const createdStudio = await MusicStudio.create(studioData);
      return createdStudio;
    } catch (error) {
      throw new Error("Error creating the studio: " + error.message);
    }
  }

  async updateStudio(studioId, studioData) {
    try {
      const studio = await MusicStudio.findByPk(studioId);

      if (!studio) {
        throw new Error("Studio not found");
      }

      studio.set(studioData);

      await studio.save();

      const studioImage = await StudioImage.findOne({
        where: { studio_id: studioId },
      });

      studioImage.img_url_1 = studioData.img_url_1;
      studioImage.img_url_2 = studioData.img_url_2;
      studioImage.img_url_3 = studioData.img_url_3;

      await studioImage.save();

      return { success: true, message: "Studio updated successfully" };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = StudioService;
