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
        // Handle the case where the studio is not found (e.g., return null or throw an error)
        return null;
      }

      // Return the studio data
      return studio;
    } catch (error) {
      // Handle any errors that may occur during the database query
      console.error(error);
      throw error; // You can choose to handle or rethrow the error as needed
    }
  }
  async getStudiosByOwner(userId) {
    try {
      // Fetch studios owned by the user based on the user_type attribute
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
      // Find the studio in the database by ID
      const studio = await MusicStudio.findByPk(studioId);

      // Check if the studio exists
      if (!studio) {
        throw new Error("Studio not found");
      }

      // Update the studio attributes
      studio.set(studioData);

      // Save the changes to the studio
      await studio.save();

      // Find the associated StudioImage by studio ID
      const studioImage = await StudioImage.findOne({
        where: { studio_id: studioId },
      });

      // Update the StudioImage attributes
      studioImage.img_url_1 = studioData.img_url_1;
      studioImage.img_url_2 = studioData.img_url_2;
      studioImage.img_url_3 = studioData.img_url_3;

      // Save the changes to the StudioImage
      await studioImage.save();

      return { success: true, message: "Studio updated successfully" };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = StudioService;
