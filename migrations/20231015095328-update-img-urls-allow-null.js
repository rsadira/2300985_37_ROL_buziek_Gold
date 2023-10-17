"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .changeColumn("StudioImages", "img_url_1", {
        type: Sequelize.STRING,
        allowNull: true,
      })
      .then(() => {
        return queryInterface.changeColumn("StudioImages", "img_url_2", {
          type: Sequelize.STRING,
          allowNull: true,
        });
      })
      .then(() => {
        return queryInterface.changeColumn("StudioImages", "img_url_3", {
          type: Sequelize.STRING,
          allowNull: true,
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    // If you want to revert these changes, you can add the revert logic here.
  },
};
