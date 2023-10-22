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
    $.ajax({
      url: "/api/v1/users/register",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        username,
        email,
        password,
        user_type: selectedRole,
      }),
      success: function (response) {
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

function cancelBooking(id) {
  $.ajax({
    url: "/api/v1/bookings/cancel/" + id,
    type: "DELETE",
    success: function (response) {
      alert("Booking successfully canceled.");

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
    data: requestData,
    success: function (response) {
      console.log("Booking finalized and added to history!");
      window.location.href = "/booking-history";
    },
    error: function (error) {
      console.error("Error finalizing booking:", error);
    },
  });
});

$("#create-studio").submit(function (event) {
  event.preventDefault();

  const studioData = {
    studio_name: $("#studio_name").val(),
    location: $("#location").val(),
    equipment_available: $("#equipment_available").val(),
    hourly_rate: $("#hourly_rate").val(),
    description: $("#description").val(),
    coverImage: $("#cover_image").val(),
    img_url_1: $("#img_url_1").val(),
    img_url_2: $("#img_url_2").val(),
    img_url_3: $("#img_url_3").val(),
  };

  $.ajax({
    type: "POST",
    url: "/api/v1/create-studios",
    data: studioData,
    success: function (response) {
      console.log("Studio created successfully!");
      window.location.href = "/my-studios";
    },
    error: function (error) {
      console.error("Error creating studio:", error);
    },
  });
});

$("#edit-studio").submit(function (event) {
  event.preventDefault();

  const studioId = $("#studioId").val();
  const studioData = {
    studioId: studioId,
    studio_name: $("#studio_name").val(),
    location: $("#location").val(),
    equipment_available: $("#equipment_available").val(),
    hourly_rate: $("#hourly_rate").val(),
    description: $("#description").val(),
    img_url_1: $("#img_url_1").val(),
    img_url_2: $("#img_url_2").val(),
    img_url_3: $("#img_url_3").val(),
  };

  $.ajax({
    type: "PUT",
    url: "/api/v1/edit-studio/" + studioId,
    data: JSON.stringify(studioData),
    contentType: "application/json",
    success: function (response) {
      console.log("Studio updated successfully!", response);
      window.location.href = "/my-studios";
    },
    error: function (error) {
      console.error("Error updating studio:", error);
    },
  });
});
