class HomeController {
  async indexHome(req, res) {
    res.render("home", {
      title: "Buziek | Book Your Studio Now!",
      user: req.user,
    });
  }
}

module.exports = HomeController;
