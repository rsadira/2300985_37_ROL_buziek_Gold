"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("StudioImages");
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.createTable("StudioImages", {
      // Define the table structure here (if needed)
    });
  },
};
