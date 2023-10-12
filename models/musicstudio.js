"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MusicStudio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.StudioImage, {
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
