// function fetchWeather(x){
//     var url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7a42f23c9b85ca18c85c04a8a97ce5a7";
//     fetch(url)
//     .then( (res) => res.json()) 
//     .then( (data) => console.log(data));
// }

let weatherAPI = {
    apiKey: "7a42f23c9b85ca18c85c04a8a97ce5a7",
    fetchWeather: function(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`)
        .then( (response) => response.json())
        .then( (data) => this.displayWeather(data))
        .catch( (error) => {
            console.log('bad request');
            document.getElementById('city').innerHTML = 'You have entered an invalid city name.';
            document.getElementById('temp').innerHTML = "";
            document.getElementById('description').innerHTML = "";
            document.getElementById('humidity').innerHTML = "";
            document.getElementById('windspeed').innerHTML = "";
        })

    },
    displayWeather: function(data){
        const {name} = data;
        const {description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;

        if(name.length>0){
            document.getElementById('city').innerHTML = name;
            document.getElementById('temp').innerHTML = "Temperature: "+temp;
            document.getElementById('description').innerHTML = "Description: "+description;
            document.getElementById('humidity').innerHTML = "Humidity: "+humidity;
            document.getElementById('windspeed').innerHTML = "Wind speed: "+speed;
        } else {
            console.log('bad request');
        }

    }
}

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = document.getElementById('cityInput').value;
    weatherAPI.fetchWeather(city);
})