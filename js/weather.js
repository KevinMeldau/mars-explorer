// ------------------------------------- Weather on MARS ------------------------------------- //
const API_KEY = 'I0V3Txv6ccRe18I7YmtzrolUSB3BB7LtAEwGlr42';
const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;
function getWeather() {
	fetch(API_URL)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		});
}

getWeather();

// ------------------------------------- End Weather on MARS ------------------------------------- //
