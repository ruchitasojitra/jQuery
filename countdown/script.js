$(document).ready(function() {
    // Set the countdown duration to 2 minutes (in milliseconds)
    const countdownDuration = 2 * 60 * 1000; // 2 minutes in milliseconds
    let endTime = new Date().getTime() + countdownDuration;

    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = endTime - now;

        if (timeRemaining <= 0) {
            $('#minutes').text('00');
            $('#seconds').text('00');
            return;
        }

        const minutes = Math.floor(timeRemaining / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        $('#minutes').text(String(minutes).padStart(2, '0'));
        $('#seconds').text(String(seconds).padStart(2, '0'));
    }

    updateCountdown(); // Initial call to set the timer immediately
    setInterval(updateCountdown, 1000); // Update countdown every second

});

