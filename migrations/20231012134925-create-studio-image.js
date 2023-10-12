"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("StudioImages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      img_url_1: {
        type: Sequelize.STRING,
      },
      img_url_2: {
        type: Sequelize.STRING,
      },
      img_url_3: {
        type: Sequelize.STRING,
      },
      studio_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "MusicStudios",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("StudioImages");
  },
};
