const { MusicStudio, Bookings } = require("../models");

class BookingService {
  async createBooking(userId, studioId, selectedDate, startTime, endTime) {
    try {
      const studio = await MusicStudio.findByPk(+studioId);

      if (!studio) {
        throw new Error("Studio not found");
      }

      const perHourPrice = studio.hourly_rate;

      const startDateTime = new Date(selectedDate + " " + startTime);
      const endDateTime = new Date(selectedDate + " " + endTime);

      const durationMs = endDateTime - startDateTime;

      const durationHours = durationMs / (1000 * 60 * 60);

      const totalPrice = durationHours * perHourPrice;

      const booking = await Bookings.create({
        user_id: userId,
        studio_id: studioId,
        booking_date: selectedDate,
        start_time: startTime,
        end_time: endTime,
        duration: durationHours,
        totalPrice,
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
        return null;
      }

      return booking;
    } catch (error) {
      throw error;
    }
  }

  async cancelBooking(bookingId) {
    try {
      const booking = await Bookings.findByPk(+bookingId);

      if (!booking) {
        return null;
      }
      await booking.destroy();

      return true;
    } catch (error) {
      throw error;
    }
  }

  async getBookingHistory(userId) {
    try {
      const bookingHistory = await Bookings.findAll({
        where: { user_id: userId },
        include: [MusicStudio],
        order: [["booking_date", "DESC"]],
      });
      return bookingHistory;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BookingService;
