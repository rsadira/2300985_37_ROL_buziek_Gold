"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.MusicStudio, {
        foreignKey: "studio_id",
      });
      this.belongsTo(models.User, {
        foreignKey: "user_id",
      });
    }
  }
  Bookings.init(
    {
      user_id: DataTypes.INTEGER,
      studio_id: DataTypes.INTEGER,
      start_time: DataTypes.TIME,
      end_time: DataTypes.TIME,
      booking_date: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Bookings",
    }
  );
  return Bookings;
};
