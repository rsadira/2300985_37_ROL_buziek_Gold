"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("StudioImage");
  },

  down: (queryInterface, Sequelize) => {
    // You can define a rollback logic here, but for removal, it's not typically needed.
    return Promise.resolve();
  },
};
