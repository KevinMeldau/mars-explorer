function getImageOfTheDay() {
	fetch(
		'https://api.nasa.gov/planetary/apod?api_key=I0V3Txv6ccRe18I7YmtzrolUSB3BB7LtAEwGlr42'
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			$('#mars-img-container').css(
				'background-image',
				'url(' + data.url + ')'
			);
			console.log('Mars image');
		})
		.catch((error) => {
			console.log('ERROR: ', error);
		});
}
getImageOfTheDay();

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
