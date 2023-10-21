"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class MusicStudio extends Model {
    static associate(models) {
      this.hasMany(models.StudioImage, {
        foreignKey: "studio_id",
      });

      this.hasMany(models.Bookings, {
        foreignKey: "studio_id",
      });
    }
  }

  MusicStudio.init(
    {
      studio_name: DataTypes.STRING,
      location: DataTypes.STRING,
      equipment_available: DataTypes.JSON,
      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      hourly_rate: DataTypes.DECIMAL,
      description: DataTypes.TEXT,
      owner_user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MusicStudio",
    }
  );

  return MusicStudio;
};
