const BookingService = require("../service/booking.service.js");
const StudioService = require("../service/studio.service.js");

class BookingController {
  constructor() {
    this.bookingService = new BookingService();
  }

  async createBooking(req, res) {
    try {
      // Ensure the user is authenticated
      if (!req.isAuthenticated()) {
        // Handle unauthenticated users, e.g., redirect to a login page
        return res.redirect("/login");
      }

      const userId = req.user.id; // Get the user ID from the authenticated user
      const { studioId, selectedDate, startTime, endTime } = req.body;

      const booking = await this.bookingService.createBooking(
        userId,
        studioId,
        selectedDate,
        startTime,
        endTime
      );

      // Handle the response (e.g., redirect to a confirmation page)
      res.render("booking-confirmation", { booking });
    } catch (error) {
      console.error("Error creating booking:", error);

      // Handle errors with meaningful messages
      res.render("error", {
        error: "Failed to create a booking. Please try again.",
      });
    }
  }

  async indexBooking(req, res) {
    try {
      const studioId = req.params.studioId;

      const studioService = new StudioService();
      const studio = await studioService.getStudioById(studioId);

      // Dynamic step determination based on user's progress
      let step = 1; // You can set this to your desired initial step

      res.render("book-now", {
        title: `Book ${studio.studio_name}`,
        studio,
        step,
        user: req.user, // Pass the step variable to the view
      });
    } catch (error) {
      console.error("Error loading booking page:", error);
      res.render("error", {
        error: "Failed to load the booking page. Please try again.",
      });
    }
  }

  // Implement other booking-related methods
}

module.exports = BookingController;
