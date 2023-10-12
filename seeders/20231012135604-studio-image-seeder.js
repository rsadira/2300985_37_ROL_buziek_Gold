"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("StudioImages", [
      {
        img_url_1:
          "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",

        img_url_2:
          "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        img_url_3:
          "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        studio_id: 5, // Replace with the actual studio_id
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img_url_1:
          " https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",

        img_url_2:
          "https://images.unsplash.com/photo-1626126525134-fbbc07afb32c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        img_url_3:
          "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        studio_id: 6, // Replace with the actual studio_id
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more records as needed
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("StudioImages", null, {});
  },
};
