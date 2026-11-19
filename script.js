
// Welcome message
window.onload = function() {
    console.log("Welcome to Deeksha's Portfolio!");
};

// jQuery effects
$(document).ready(function() {

    // Highlight navigation links
    $(".nav-links a").hover(
        function() {
            $(this).css("color", "#80b9ed");
        },
        function() {
            $(this).css("color", "white");
        }
    );

    // Project card effect
    $(".project-card").hover(
        function() {
            $(this).css("transform", "translateY(-5px)");
        },
        function() {
            $(this).css("transform", "translateY(0)");
        }
    );

    // Contact form validation
    $("#contactForm").submit(function(event) {
        event.preventDefault();

        let name = $("#visitorName").val().trim();
        let email = $("#visitorEmail").val().trim();
        let message = $("#visitorMessage").val().trim();

        if (name === "" || email === "" || message === "") {
            $("#formMessage").text("Please fill all fields.");
        } else {
            $("#formMessage").text(
                "Thank you, " + name +
                "! Your message has been received in this demo."
            );

            $("#contactForm")[0].reset();
        }
    });

});
