
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a1475e91cdmshb48a2392cbc56e5p10a15fjsn7cf1854ce863',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
		.then(response => response.json())
		.then((response) => {


			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			tem7.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity7.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed7.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset


		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")

const goaWeather = (Goa)=> {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Goa', options)
		.then(response => response.json())
		.then((response) => {


			console.log(response)
			cloud_pct1.innerHTML = response.cloud_pct
			temp1.innerHTML = response.temp
			feels_like1.innerHTML = response.feels_like
			humidity1.innerHTML = response.humidity
			min_temp1.innerHTML = response.min_temp
			max_temp1.innerHTML = response.max_temp
			wind_speed1.innerHTML = response.wind_speed
			wind_degrees1.innerHTML = response.wind_degrees
			sunrise1.innerHTML = response.sunrise
			sunset1.innerHTML = response.sunset


		})
		.catch(err => console.error(err));
}
goaWeather("Goa")
const luckWeather = (Lucknow)=> {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
		.then(response => response.json())
		.then((response) => {


			console.log(response)
			cloud_pct2.innerHTML = response.cloud_pct
			temp2.innerHTML = response.temp
			feels_like2.innerHTML = response.feels_like
			humidity2.innerHTML = response.humidity
			min_temp2.innerHTML = response.min_temp
			max_temp2.innerHTML = response.max_temp
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees2.innerHTML = response.wind_degrees
			sunrise2.innerHTML = response.sunrise
			sunset2.innerHTML = response.sunset


		})
		.catch(err => console.error(err));
}
luckWeather("Lucknow")
const darWeather = (Darjeeling)=> {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Darjeeling', options)
		.then(response => response.json())
		.then((response) => {


			console.log(response)
			cloud_pct4.innerHTML = response.cloud_pct
			temp4.innerHTML = response.temp
			feels_like4.innerHTML = response.feels_like
			humidity4.innerHTML = response.humidity
			min_temp4.innerHTML = response.min_temp
			max_temp4.innerHTML = response.max_temp
			wind_speed4.innerHTML = response.wind_speed
			wind_degrees4.innerHTML = response.wind_degrees
			sunrise4.innerHTML = response.sunrise
			sunset4.innerHTML = response.sunset


		})
		.catch(err => console.error(err));
}
darWeather("Darjeeling")
const andWeather = (Andaman)=> {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Andaman', options)
		.then(response => response.json())
		.then((response) => {


			console.log(response)
			cloud_pct3.innerHTML = response.cloud_pct
			temp3.innerHTML = response.temp
			feels_like3.innerHTML = response.feels_like
			humidity3.innerHTML = response.humidity
			min_temp3.innerHTML = response.min_temp
			max_temp3.innerHTML = response.max_temp
			wind_speed3.innerHTML = response.wind_speed
			wind_degrees3.innerHTML = response.wind_degrees
			sunrise3.innerHTML = response.sunrise
			sunset3.innerHTML = response.sunset


		})
		.catch(err => console.error(err));
}
andWeather("Andaman")
const manWeather = (Manali)=> {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Manali', options)
		.then(response => response.json())
		.then((response) => {


			console.log(response)
			cloud_pct5.innerHTML = response.cloud_pct
			temp5.innerHTML = response.temp
			feels_like5.innerHTML = response.feels_like
			humidity5.innerHTML = response.humidity
			min_temp5.innerHTML = response.min_temp
			max_temp5.innerHTML = response.max_temp
			wind_speed5.innerHTML = response.wind_speed
			wind_degrees5.innerHTML = response.wind_degrees
			sunrise5.innerHTML = response.sunrise
			sunset5.innerHTML = response.sunset


		})
		.catch(err => console.error(err));
}
manWeather("Manali")
const kolWeather = (Kolkata)=> {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
		.then(response => response.json())
		.then((response) => {


			console.log(response)
			cloud_pct6.innerHTML = response.cloud_pct
			temp6.innerHTML = response.temp
			feels_like6.innerHTML = response.feels_like
			humidity6.innerHTML = response.humidity
			min_temp6.innerHTML = response.min_temp
			max_temp6.innerHTML = response.max_temp
			wind_speed6.innerHTML = response.wind_speed
			wind_degrees6.innerHTML = response.wind_degrees
			sunrise6.innerHTML = response.sunrise
			sunset6.innerHTML = response.sunset


		})
		.catch(err => console.error(err));
}
kolWeather("Kolkata")