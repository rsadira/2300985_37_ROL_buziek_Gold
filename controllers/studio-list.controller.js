const StudioService = require("../service/studio.service");

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
}

module.exports = StudioListController;
