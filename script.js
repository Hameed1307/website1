$(document).ready(function() {
    $('#addclub').click(function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        $('.personal-details').toggle(); // Toggle the personal details table
    });
});