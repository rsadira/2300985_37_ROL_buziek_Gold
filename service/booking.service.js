const { MusicStudio, Bookings } = require("../models");

class BookingService {
  async createBooking(userId, studioId, selectedDate, startTime, endTime) {
    try {
      // Fetch the studio's hourly rate from the database
      const studio = await MusicStudio.findByPk(studioId);

      if (!studio) {
        throw new Error("Studio not found");
      }

      const perHourPrice = studio.hourly_rate;

      // Convert the startTime and endTime to JavaScript Date objects for easier calculation
      const startDateTime = new Date(selectedDate + " " + startTime);
      const endDateTime = new Date(selectedDate + " " + endTime);

      // Calculate the duration in milliseconds
      const durationMs = endDateTime - startDateTime;

      // Convert the duration to hours
      const durationHours = durationMs / (1000 * 60 * 60); // 1000 milliseconds * 60 seconds * 60 minutes

      // Calculate the total price
      const totalPrice = durationHours * perHourPrice;

      // Create the booking and include the calculated total price
      const booking = await Bookings.create({
        userId,
        studioId,
        selectedDate,
        startTime,
        endTime,
        duration: durationHours, // Include duration in hours
        totalPrice, // Include the calculated total price
      });

      return booking;
    } catch (error) {
      throw error;
    }
  }

  async getBookingDetails(bookingId) {
    try {
      const booking = await Bookings.findByPk(bookingId);

      if (!booking) {
        // Handle the case where the booking doesn't exist
        return null;
      }

      return booking;
    } catch (error) {
      throw error;
    }
  }

  async updateBooking(bookingId, updatedData) {
    try {
      const booking = await Bookings.findByPk(bookingId);

      if (!booking) {
        // Handle the case where the booking doesn't exist
        return false;
      }

      // Update the booking with the provided data
      await booking.update(updatedData);

      return true;
    } catch (error) {
      throw error;
    }
  }

  async cancelBooking(bookingId) {
    try {
      const booking = await Bookings.findByPk(bookingId);

      if (!booking) {
        // Handle the case where the booking doesn't exist
        return false;
      }

      // Delete the booking from the database
      await booking.destroy();

      return true;
    } catch (error) {
      throw error;
    }
  }

  // Add other booking-related methods as needed
}

module.exports = BookingService;
