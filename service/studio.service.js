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
}

module.exports = StudioService;
