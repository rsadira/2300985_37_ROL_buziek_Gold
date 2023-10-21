const BookingService = require("../service/booking.service.js");
const StudioService = require("../service/studio.service.js");
const bookingService = new BookingService();

class BookingController {
  constructor() {
    this.bookingService = new BookingService(); // Initialize bookingService
  }
  async createBooking(req, res) {
    try {
      if (!req.isAuthenticated()) {
        return res.redirect("/login");
      }

      const userId = req.user.id;
      const { studioId, selectedDate, startTime, endTime } = req.body;

      const booking = await bookingService.createBooking(
        userId,
        studioId,
        selectedDate,
        startTime,
        endTime
      );

      res.render("booking-confirmation", {
        booking,
        title: "Confirm Your Booking",
      });
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  }

  async indexBooking(req, res) {
    try {
      const studioId = req.params.studioId;

      const studioService = new StudioService();
      const studio = await studioService.getStudioById(studioId);

      res.render("book-now", {
        title: `Book ${studio.studio_name}`,
        studio,
        user: req.user,
      });
    } catch (error) {
      console.error("Error loading booking page:", error);
      res.render("error", {
        error: "Failed to load the booking page. Please try again.",
      });
    }
  }
  async renderBookingHistory(req, res) {
    try {
      const userId = req.user.id;
      const bookingHistory = await bookingService.getBookingHistory(userId);

      for (const booking of bookingHistory) {
        const perHourPrice = booking.MusicStudio.hourly_rate;

        const startDateTime = new Date(
          booking.selectedDate + " " + booking.startTime
        );
        const endDateTime = new Date(
          booking.selectedDate + " " + booking.endTime
        );

        const durationMs = endDateTime - startDateTime;

        const durationHours = durationMs / (1000 * 60 * 60);

        const totalPrice = durationHours * perHourPrice;

        booking.totalPrice = totalPrice;
      }

      res.render("booking-history", {
        title: "My booking history",
        layout: "layouts/layouts",
        user: req.user,
        bookingHistory: bookingHistory,
      });
    } catch (error) {
      console.error(error);
      // Handle errors
      res.render("error", { error });
    }
  }
  async cancelBooking(req, res) {
    try {
      const bookingId = req.params.bookingId;
      const success = await bookingService.cancelBooking(bookingId);

      if (success) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Booking cancel failed" });
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while canceling the booking." });
    }
  }
}

module.exports = BookingController;
