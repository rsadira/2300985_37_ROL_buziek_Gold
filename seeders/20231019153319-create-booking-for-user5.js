"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Bookings", [
      {
        user_id: 5, // User ID 5 (the user you want to associate with)
        studio_id: 6, // Replace with the studio ID you want to associate
        start_time: new Date(), // Set the start time
        end_time: new Date(), // Set the end time
        booking_date: new Date(), // Set the booking date
        status: "confirmed", // Set the booking status
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5, // User ID 5 (the user you want to associate with)
        studio_id: 5, // Replace with the studio ID you want to associate
        start_time: new Date(), // Set the start time
        end_time: new Date(), // Set the end time
        booking_date: new Date(), // Set the booking date
        status: "confirmed", // Set the booking status
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more bookings if needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Bookings", null, {});
  },
};
