// Function to update studio listings based on user selections
// function updateStudioListings() {
//   const sortOption = document.getElementById("sort").value;
//   const filterOption = document.getElementById("filter").value;

//   // Implement sorting and filtering logic based on user selections
//   // Update the studio listings with the sorted and filtered results
//   // You can use JavaScript to generate HTML for studio cards and append them to the #studio-listings section
// }

// // Attach event listeners to the dropdowns for sorting and filtering

//   .getElementById("filter")
//   .addEventListener("change", updateStudioListings);

// Initial call to populate the studio listings
// updateStudioListings();

// Update your JavaScript (script.js) code with the search functionality

// ...

// // Function to filter studios based on search keywords
// function filterStudiosBySearch() {
//   const searchQuery = document
//     .getElementById("search-input")
//     .value.toLowerCase()
//     .trim();

//   // Filter studios based on the search query
//   const filteredStudios = studios.filter((studio) => {
//     // You can customize this logic based on your data structure
//     return (
//       studio.name.toLowerCase().includes(searchQuery) ||
//       studio.location.toLowerCase().includes(searchQuery) ||
//       studio.facilities.some((facility) =>
//         facility.toLowerCase().includes(searchQuery)
//       )
//     );
//   });

//   // Update the studio listings with the filtered results
//   updateStudioListings(filteredStudios);
// }

// Attach event listener to the search button
// document
//   .getElementById("search-button")
//   .addEventListener("click", filterStudiosBySearch);

// // Enable search on pressing Enter key in the search input field
// document
//   .getElementById("search-input")
//   .addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//       filterStudiosBySearch();
//     }
//   });

// ...
$("#registration-form").submit(function (event) {
  event.preventDefault();

  const email = $("#email_regist_modal").val();
  const username = $("#username_regist_modal").val();
  const password = $("#password_regist_modal").val();
  const repassword = $("#repassword_regist_modal").val();
  const selectedRole = $("input[name='role']:checked").val();

  if (password !== repassword) {
    alert("Maaf konfirmasi password yang and masukan tidak sesuai");
  } else {
    // Kirim data registrasi ke server menggunakan AJAX atau fetch
    $.ajax({
      url: "/api/v1/users/register", // Ganti dengan rute API registrasi Anda
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        username,
        email,
        password,
        user_type: selectedRole,
      }),
      success: function (response) {
        // Tampilkan pesan sukses atau redirect ke halaman login
        alert("Registrasi berhasil! Silakan masuk.");
        window.location.href = "/";
      },
      error: function (error) {
        console.error("Terjadi kesalahan: " + JSON.stringify(error));
        alert("Gagal mendaftar. Silakan coba lagi.");
      },
    });
  }
});

// $("#booking-form").on("submit", function (event) {
//   event.preventDefault(); // Prevent the default form submission

//   // Serialize the form data to a JSON object
//   var formData = {};
//   $(this)
//     .serializeArray()
//     .forEach(function (item) {
//       formData[item.name] = item.value;
//     });

//   // Send the data to the server using Ajax
//   $.ajax({
//     url: "/v1/bookings/create", // The API endpoint for creating bookings
//     type: "POST",
//     contentType: "application/json",
//     data: JSON.stringify(formData),
//     success: function (response) {
//       // Handle the success response here (e.g., show a confirmation message)
//       console.log("Booking data sent successfully:", response);
//     },
//     error: function (error) {
//       // Handle errors (e.g., show an error message)
//       console.error("Error sending booking data:", error);
//     },
//   });
// });

function cancelBooking(id) {
  $.ajax({
    url: "/api/v1/bookings/cancel/" + id,
    type: "DELETE",
    success: function (response) {
      // Tindakan setelah berhasil membatalkan booking
      alert("Booking successfully canceled.");

      // Hapus baris booking dari tabel
      window.location.reload = "/booking-history";
    },
    error: function (error) {
      console.error("An error occurred while canceling the booking:", error);
      alert("Failed to cancel the booking.");
    },
  });
}

$("#bookNow").submit(function (event) {
  event.preventDefault();

  const selectedDate = dateInput.value;
  const startTime = startTimeInput.value;
  const endTime = endTimeInput.value;
  const studioId = $("#studioId").val();

  const requestData = {
    selectedDate,
    startTime,
    endTime,
    studioId,
  };

  $.ajax({
    type: "POST",
    url: "/api/v1/bookings/new",
    data: requestData, // Pass the requestData object
    success: function (response) {
      console.log("Booking finalized and added to history!");
      window.location.href = "/";
    },
    error: function (error) {
      console.error("Error finalizing booking:", error);
    },
  });
});
