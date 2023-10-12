"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn("StudioImages", "studio_image_url1", {
        type: Sequelize.STRING,
      })
      .then(() => {
        return queryInterface.addColumn("StudioImages", "studio_image_url2", {
          type: Sequelize.STRING,
        });
      })
      .then(() => {
        return queryInterface.addColumn("StudioImages", "studio_image_url3", {
          type: Sequelize.STRING,
        });
      });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface;
  },
};
