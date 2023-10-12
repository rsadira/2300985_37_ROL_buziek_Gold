"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("studio_images");
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.createTable("studio_images", {
      // Define the table structure here (if needed)
    });
  },
};
