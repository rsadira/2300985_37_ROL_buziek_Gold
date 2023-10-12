class HomeController {
  async indexHome(req, res) {
    res.render("home", { title: "Buziek | Book Your Studio Now!" });
  }
}

module.exports = HomeController;
