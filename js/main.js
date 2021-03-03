// ------------------------------------- MARS Image of the day ------------------------------------- //

function getImageOfTheDay() {
	// This reaches out to the API and pulls in the data
	fetch(
		'https://api.nasa.gov/planetary/apod?api_key=I0V3Txv6ccRe18I7YmtzrolUSB3BB7LtAEwGlr42'
	)
		// We then take what we've received back from the API and turn it into json
		.then((response) => {
			return response.json();
		})
		// We then take the stuff in json format and we inject it into the image background url
		.then((data) => {
			$('#mars-img-container').css(
				'background-image',
				'url(' + data.url + ')'
			);
		})
		// This is just a catch so that if anything goes wrong, there is something to tell us in the console
		.catch((error) => {
			console.log('ERROR: ', error);
		});
}
// This just calls the function
getImageOfTheDay();

// ------------------------------------- End MARS Image of the day ------------------------------------- //

// ------------------------------------- MODAL ------------------------------------- //

// Modal functionality
const modal = document.getElementById('marsModal');

// Get the button that opens the modal
var btn = document.getElementById('modalBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
	modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

// ------------------------------------- END MODAL ------------------------------------- //
