const cityInput= document.getElementById("cityInput");
const searchBtn= document.getElementById("searchBtn");
const temp= document.getElementById("temp");
const condition= document.getElementById("condition");
const humidity= document.getElementById("humidity");
const cityName= document.getElementById("cityName");
const cityTime= document.getElementById("time");

function getWeather(city){
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
        .then(response => response.json())
        .then(data => {
            cityName.textContent = data.location.name + ", " + data.location.country;
            temp.textContent = data.current.temp_c + "°C";
            condition.textContent = data.current.condition.text;
            humidity.textContent = data.current.humidity + "%";
            time.textContent = data.location.localtime.split(" ")[1];
        });
}

const apiKey= "9b60a1a2aa374f07b2635247260307";

getWeather("Tarlac");

searchBtn.addEventListener("click", function(){
    const city= cityInput.value;
    console.log(city);

    getWeather(city);
});


