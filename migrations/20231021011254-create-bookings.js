"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .changeColumn("Bookings", "start_time", {
        type: Sequelize.TIME,
      })
      .then(() => {
        return queryInterface.changeColumn("Bookings", "end_time", {
          type: Sequelize.TIME,
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .changeColumn("Bookings", "start_time", {
        type: Sequelize.DATE, // Revert to the original data type if needed
      })
      .then(() => {
        return queryInterface.changeColumn("Bookings", "end_time", {
          type: Sequelize.DATE, // Revert to the original data type if needed
        });
      });
  },
};
