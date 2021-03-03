// ------------------------------------- Weather on MARS ------------------------------------- //

const API_KEY = 'I0V3Txv6ccRe18I7YmtzrolUSB3BB7LtAEwGlr42'
const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`

getWeather().then(sols => {
	console.log(sols)
})

function getWeather() {
	return fetch(API_URL)
		.then(res => res.json())
		.then(resData => {
			const { sol_keys, validity_checks, ...solData } = resData
			return Object.entries(solData).map(([sol, data]) => {
				return {
					sol: sol,
					maxTemp: data.PRE.mx,
					minTemp: data.PRE.mn,
					// windSpeed: data.HWS.av,
					// windDirectionDegrees: data.WD.most_common.compass_degrees,
					// windDirectionCardinal: data.WD.most_common.compass_point,
					date: new Date(data.First_UTC),
				}
			})
		})
}

// ------------------------------------- End Weather on MARS ------------------------------------- //
