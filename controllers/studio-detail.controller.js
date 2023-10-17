const StudioService = require("../service/studio.service.js");
const StudioImage = require("../models").StudioImage;

class StudioDetailController {
  async studioDetail(req, res) {
    try {
      const studioId = req.params.studioId;

      const studioService = new StudioService();
      const studio = await studioService.getStudioById(studioId);
      const studioImg = await StudioImage.findAll({
        where: { studio_id: studioId },
      });
      // console.log(studio.StudioImages[0].img_url_1);
      res.render("studio-detail", { title: studio.studio_name, studio });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = StudioDetailController;
// nanti ganti title sama studio.name
