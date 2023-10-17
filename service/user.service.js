const { User } = require("../models");
const bcrypt = require("bcrypt");

class UserService {
  constructor() {
    this.userModel = User;
  }
  async store(payload) {
    const date = new Date();
    const {
      username,
      email,
      password,
      user_type,
      contact_email,
      contact_phone,
    } = payload;
    const encrypt = await bcrypt.hash(password, 10);

    // Simpan data pengguna ke database
    const data = await this.userModel.create({
      username,
      email,
      user_type,
      contact_email,
      contact_phone,
      password: encrypt,
      createdAt: date,
      updatedAt: date,
    });
    return data;
  }
}

module.exports = UserService;
