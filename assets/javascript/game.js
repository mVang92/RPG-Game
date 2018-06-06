$(document).ready(function() {
    var playerChoice = true;
    // Append character images to the screen
    $("#character1").append('<img src="assets/images/F16.jpg" alt="F16 Fighter Jet" style="width:100%"> <b>F16 Fighter Jet</b>');
    $("#character2").append('<img src="assets/images/F18.jpg" alt="F18 Fighter Jet" style="width:100%"> <b>F18 Fighter Jet</b>');
    $("#character3").append('<img src="assets/images/Mig 25.jpg" alt="Mig 25 Fighter Jet" style="width:100%"> <b>Mig 25 Fighter Jet</b>');
    $("#character4").append('<img src="assets/images/Mig 29.jpg" alt="Mig 25 Fighter Jet" style="width:100%"> <b>Mig 29 Fighter Jet</b>');

    
        // Character 1 click function
        $("#character1").on("click", function() {
            if (playerChoice) {
                // Remove this image
                $(this).prev().addBack().remove();
                $(".charBoxPlayer").append('<p class="tag"> <img src="assets/images/F16.jpg" alt="F16 Fighter Jet" style="width:100%"> <b>F16 Fighter Jet</b></p>');
                playerChoice = false;
            }
        });

        // Character 2 click function
        $("#character2").on("click", function() {
            if (playerChoice){
                // Remove this image
                $(this).prev().addBack().remove();
                $(".charBoxPlayer").append('<p class="tag"> <img src="assets/images/F18.jpg" alt="F18 Fighter Jet" style="width:100%"> <b>F16 Fighter Jet</b></p>');
                playerChoice = false;
            }
        });

        // Character 3 click function
        $("#character3").on("click", function() {
            if (playerChoice){
                // Remove this image
                $(this).prev().addBack().remove();
                $(".charBoxPlayer").append('<p class="tag"> <img src="assets/images/Mig 25.jpg" alt="Mig 25 Fighter Jet" style="width:100%"> <b>F16 Fighter Jet</b></p>');
                playerChoice = false;
            }
        });

        // Character 4 click function
        $("#character4").on("click", function() {
            if (playerChoice){
                // Remove this image
                $(this).prev().addBack().remove();
                $(".charBoxPlayer").append('<p class="tag"> <img src="assets/images/Mig 29.jpg" alt="Mig 29 Fighter Jet" style="width:100%"> <b>F16 Fighter Jet</b></p>');
                playerChoice = false;
            }
        });

});