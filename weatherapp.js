
//  " https://api.openweathermap.org/data/2.5/weather?q=America&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial"




let searchbutton = document.getElementById('searchbutton')
let city_input = document.getElementById("city-input")
let city_name = document.getElementById("city-name")
let weather_output = document.getElementById("weather-output")
let weather_type = document.getElementById("weather-type" )
let temp = document.getElementById("temp")
let min_temp = document.getElementById("min-temp")
let max_temp = document.getElementById("max-temp")
let error_message =document.getElementById("error-message")


searchbutton.onclick = () => getdetails(city_input.value)

const getdetails = (value) => {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`)
    .then(response=>response.json()).then(data=>{ console.log(data)
        updatedetails(data)})
        .catch(error => {console.log(error)
        error_message.innerText = error
        error_message.style.display = 'block'
        
})
}

const updatedetails = (data) => {
    city_name.innerText = data.name
    weather_type.innerText = data.weather[0].main
    temp.innerText = ` ${converttocelsius(data.main.temp)}`
    min_temp.innerText = `  ${converttocelsius(data.main.temp_min)}`
    max_temp.innerText = `  ${converttocelsius(data.main.temp_max)}`
    if ( error_message.style.display != 'none'){
        error_message.style.display = 'none'
    }

}

const converttocelsius = (value) => {
    celsius = (value - 32)* 5/9
    return celsius.toFixed(2)
}
