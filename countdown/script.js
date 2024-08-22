// Function to generate random alphanumeric string
function generateRandomText(length) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

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

	if( jQuery('#captchaCanvas').length ){
		// generate random alphanumeric string    
		const canvas = $('#captchaCanvas')[0];
		const ctx = canvas.getContext('2d');


		// Generate random text
		const text = generateRandomText(6);
		// Set canvas background color
		ctx.fillStyle = '#e0e0e0';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Set text properties
		ctx.font = 'bold 30px Arial';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';

		// Set text color
		ctx.fillStyle = '#333';

		// Draw text on canvas
		ctx.fillText(text, canvas.width / 2, canvas.height / 2);

		// Optional: Draw some noise or random lines for better CAPTCHA
		ctx.strokeStyle = '#aaa';
		for (let i = 0; i < 10; i++) {
			const x1 = Math.random() * canvas.width;
			const y1 = Math.random() * canvas.height;
			const x2 = Math.random() * canvas.width;
			const y2 = Math.random() * canvas.height;
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.stroke();
		}
	}
	
});

