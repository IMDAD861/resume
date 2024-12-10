// Simple Form Validation and Success Message
$(document).ready(function () {
    $("#contactForm").on("submit", function (e) {
      e.preventDefault();
      var name = $("#name").val();
      var email = $("#email").val();
      var subject = $("#subject").val();
      var message = $("#message").val();
  
      if (name && email && subject && message) {
        $("#formResponse").html("<p>Thank you for reaching out! I will get back to you soon.</p>");
        $("#contactForm")[0].reset();
      } else {
        $("#formResponse").html("<p>Please fill in all fields before submitting.</p>");
      }
    });
  });
  