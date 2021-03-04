// ------------------------------------- Weather on MARS ------------------------------------- //

const API_KEY = 'I0V3Txv6ccRe18I7YmtzrolUSB3BB7LtAEwGlr42'
const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`

const currentSolElement = document.querySelector('[data-current-sol]')
const currentSolTempHigh = document.querySelector('[data-current-temp-high]')
const currentSolTempLow = document.querySelector('[data-current-temp-low]')

var selectedSolIndex = 0

getWeather().then(sols => {
	selectedSolIndex = sols.length - 1
	//console.log(sols)
	displaySelectSol(sols)
})

function displaySelectSol(sols) {
	const selectedSol = sols[selectedSolIndex]
	currentSolElement.innerText = selectedSol.sol
	currentSolTempHigh.innerText = selectedSol.maxTemp.toFixed(2)
	currentSolTempLow.innerText = selectedSol.minTemp.toFixed(2)
}

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
					//windSpeed: data.HWS.av,
					//windDirectionDegrees: data.WD.most_common.compass_degrees,
					//windDirectionCardinal: data.WD.most_common.compass_point,
					date: new Date(data.First_UTC),
				}
			})
		})
}

// ------------------------------------- End Weather on MARS ------------------------------------- //

// ------------------------------------- Current Date - Earth ------------------------------------- //

var d = new Date(),
	month = new Array()
;(month[0] = 'January'),
	(month[1] = 'February'),
	(month[2] = 'March'),
	(month[3] = 'April'),
	(month[4] = 'May'),
	(month[5] = 'June'),
	(month[6] = 'July'),
	(month[7] = 'August'),
	(month[8] = 'September'),
	(month[9] = 'October'),
	(month[10] = 'November'),
	(month[11] = 'December')
var month_name = month[d.getMonth()],
	day_of_month = d.getDate(),
	current_year = d.getFullYear(),
	dayOfMonthElement = document.getElementById('current_day'),
	currentMonthElement = document.getElementById('current_month'),
	currentYearElement = document.getElementById('current_year')
!(function () {
	;(currentMonthElement.innerHTML = month_name),
		(dayOfMonthElement.innerHTML = day_of_month),
		(currentYearElement.innerHTML = current_year)
})()

// ------------------------------------- End Current Date - Earth ------------------------------------- //
