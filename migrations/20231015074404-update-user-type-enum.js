"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("Users", "user_type", {
      type: Sequelize.ENUM("Musician", "Studio Owner"),
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("Users", "user_type", {
      type: Sequelize.STRING,
      allowNull: true, // Update allowNull as needed
    });
  },
};
