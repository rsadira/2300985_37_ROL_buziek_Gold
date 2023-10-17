const UserService = require("../service/user.service");
const userService = new UserService();

class UserController {
  async register(req, res) {
    try {
      await userService.store(req.body);
      // Tampilkan pesan sukses atau respons yang sesuai
      res.status(201).json({ message: "Registrasi berhasil" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Gagal mendaftar" });
    }
  }
}

module.exports = UserController;
