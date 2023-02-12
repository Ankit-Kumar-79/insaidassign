const toggler = document.getElementById("toggler");
const navLinks = document.getElementById("nav-links");

toggler.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// $(document).ready(function () {
//   $("form").submit(function (event) {
//     event.preventDefault();
//     var name = $("#name").val();
//     var email = $("#email").val();
//     var message = $("#message").val();
//     alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
//   });
// });
