const ApiKey = "b3a6c88d5f864cb6b57114026242310"
var ApiUrl = "https://api.weatherapi.com/v1/current.json"
let city = document.querySelector("#City")
let temp = document.querySelector("#Temp")
let wh = document.querySelector("#whether")
let humd = document.querySelector("#humidity")
let wind = document.querySelector("#wind")



document.querySelector("#SubmitBtn").addEventListener('click', async (e) => {
    e.preventDefault();
    let Cityinput = document.querySelector("#CityInput").value
    let response = await fetch(ApiUrl + "?key=" + ApiKey + "&q=" + Cityinput);
    var Data = await response.json();
    console.log(Data)
    wh.innerHTML = Data.current.condition.text
    city.innerHTML = Cityinput
    humd.innerHTML = `${Data.current.humidity} %`
    wind.innerHTML = `${Data.current.wind_kph} kph`
    temp.innerHTML = `${Data.current.temp_c} °C`
})


const GetWhether = async (city) => {
    let response = await fetch(ApiUrl + "?key=" + ApiKey + "&q=" + city);
    var Data = await response.json();

    console.log(Data)
}
