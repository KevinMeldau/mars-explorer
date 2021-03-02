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
		})
		.catch((error) => {
			console.log('ERROR: ', error);
		});
}
