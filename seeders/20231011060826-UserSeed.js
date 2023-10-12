"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        username: "john_doe",
        email: "john@example.com",
        password: "hashed_password",
        user_type: "Studio Owner",
        contact_email: "john.doe@gmail.com",
        contact_phone: "123-456-7890",
        address: "123 Main Street",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more user data as needed
    ]);

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
