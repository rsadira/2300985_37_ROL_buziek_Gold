"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("MusicStudios", [
      {
        studio_name: "SoundWave Studios",
        location: "Jl. Melody No. 123, Jakarta",
        equipment_available: JSON.stringify([
          "Microphones",
          "Mixing Console",
          "Drum Kit",
        ]),
        hourly_rate: 150000,
        description: "A professional recording studio in the heart of Jakarta.",
        owner_user_id: 1, // Replace with the appropriate owner_user_id
        createdAt: new Date(),
        updatedAt: new Date(),
        image_url:
          "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      },
      {
        studio_name: "Rhythm Haven Recording",
        location: "Jl. Beat Avenue 45, Surabaya",
        equipment_available: JSON.stringify([
          "Microphones",
          "Synthesizers",
          "Guitar Amps",
        ]),
        hourly_rate: 200000,
        description: "High-quality recording and mixing services in Surabaya.",
        owner_user_id: 2, // Replace with the appropriate owner_user_id
        createdAt: new Date(),
        updatedAt: new Date(),
        image_url:
          " https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      },
      {
        studio_name: "Tes Studio 3",
        location: "Jl. Pasir Kaliki 23, Bandung ",
        equipment_available: JSON.stringify([
          "Microphones",
          "Synthesizers",
          "Guitar Amps",
        ]),
        hourly_rate: 350000,
        description: "High-quality recording and mixing services in Bandung.",
        owner_user_id: 3, // Replace with the appropriate owner_user_id
        createdAt: new Date(),
        updatedAt: new Date(),
        image_url:
          " https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      },
      // Add more music studio data as needed
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("MusicStudios", null, {});
  },
};
