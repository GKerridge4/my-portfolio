
const button = document.getElementById("hover-button");

button.addEventListener("mouseenter", function() {
  button.classList.add("shake");
});

button.addEventListener("mouseleave", function() {
  button.classList.remove("shake");
});

button.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default link behavior
  button.classList.add("move");
  setTimeout(function() {
    window.location.href = "https://www.example.com"; // Replace with your URL
  }, 2000); // Adjust the delay as needed to match the animation duration
});
