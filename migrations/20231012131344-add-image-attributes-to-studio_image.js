"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("StudioImage", {
      image_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      studio_image_url: {
        type: Sequelize.STRING,
      },
      studio_image_url_1: {
        type: Sequelize.STRING,
      },
      studio_image_url_2: {
        type: Sequelize.STRING,
      },
      studio_image_url_3: {
        type: Sequelize.STRING,
      },
      // ... Add more attributes if needed
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("StudioImage");
  },
};
