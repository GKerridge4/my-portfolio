document.addEventListener("DOMContentLoaded", function() {
    const skillsButtons = document.querySelectorAll(".skills_button");

    skillsButtons.forEach(function(button) {
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
                window.location.href = button.getAttribute("href");
            }, 500); // Adjust the delay as needed to match the animation duration
        });
    });
});
