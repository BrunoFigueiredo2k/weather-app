var city = "London";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=24009eccc8c9d83d6bcb4bf23c273a08", function (data) {
    console.log(data)
});

function changeCity() {
    var city = document.getElementById("input-city").value;
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=24009eccc8c9d83d6bcb4bf23c273a08&units=metric", function (data) {

        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

        document.getElementById("city").innerHTML = data.name + `<i style="font-size: 12px;"> (${data.sys.country})</i>`;
        $('#icon').attr('src', icon);
        document.getElementById("temperature").innerHTML = `
        <p style="font-size: 10px;"><b style="font-size: 18px"> ${Math.round(data.main.temp)}C° </b>${Math.round(data.main.temp_min)}C°</p>
        <p>${data.weather[0].main}</p>`
    });
}



