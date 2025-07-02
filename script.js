document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent default form submission

    // Fetch form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;

    // Simple validation
    if (!name || !email || !password || !dob || !gender) {
      alert("Please fill in all the fields!");
      return;
    }

    alert("Form submitted successfully!");
    form.reset(); // clear the form
  });
});
