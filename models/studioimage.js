"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StudioImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.MusicStudio, {
        foreignKey: "studio_id",
      });
    }
  }
  StudioImage.init(
    {
      img_url_1: DataTypes.STRING,
      img_url_2: DataTypes.STRING,
      img_url_3: DataTypes.STRING,
      studio_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "StudioImage",
    }
  );
  return StudioImage;
};
