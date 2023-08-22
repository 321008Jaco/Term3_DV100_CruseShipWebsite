$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=f61cf6559c041d8c9cdf4ad0d03414c5",
        success: function(data){
            var tempInKelvin = data.main.temp;
            var tempInCelsius = tempInKelvin - 273.15;
            var weatherDescription = data.weather[0].description;
            var weatherText = "Weather in Pretoria: " + tempInCelsius.toFixed(1) + " °C, " + weatherDescription;
            $("#pretoria").text(weatherText);
        },
        error: function(xhr, status, error) {
            console.log("API Error:", status, error);
        }
    });
});