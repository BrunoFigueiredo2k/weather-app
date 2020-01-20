// Function that will be triggered once search button is clickced by user
function changeCity() {

    // Setting display of weather card to visible
    $(document).ready(function () {
        var weatherCard = document.getElementById("card-info");
        $(weatherCard).fadeIn();
        weatherCard.style.display = "flex";
    });

    // Variable for city input
    var city = document.getElementById("input-city").value;

    // Jquery animation error
    $(document).ready(function () {
        if (city === '') {
            $("#error").slideDown(100).css("display", "inline-block");
            document.getElementById("weather-container").style.display = "none";
        } else {
            $("#error").slideUp(50);
            document.getElementById("weather-container").style.display = "inline";
        }
    });

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=24009eccc8c9d83d6bcb4bf23c273a08&units=metric", function (data) {

        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

        console.log(icon);

        // Displaying country
        document.getElementById("city").innerHTML = data.name + `<i style="font-size: 12px;"> (${data.sys.country})</i>`;

        // Displaying weather icon
        $('#icon').attr('src', icon);

        // Icons up and down for max and min temperature
        var pointerMin = `<i class="fas fa-chevron-down" style="color: #4b31f5;"></i>`;
        var pointerMax = `<i class="fas fa-chevron-up" style="margin-left: 15px; color: #f5313b;"></i>`;

        // Displaying temperature data
        document.getElementById("temperature").innerHTML = `
            <p style="font-size: 20px; margin: 0;"><b style="font-size: 30px"> ${Math.round(data.main.temp)}°</b></p>
            <p>${data.weather[0].main}</p>
            ${pointerMin}<p class="min-temp">${Math.round(data.main.temp_min)}°</p>
            ${pointerMax}<p class="max-temp">${Math.round(data.main.temp_max)}°</p>
        `;

        // Variables for weather status and card div for display
        var status = data.weather[0].main;
        var cardDiv = document.getElementById("card-info");

        // Determining if it's day or night so a fitting image can be displayed for that weather status
        status.toLowerCase();
        if (icon.includes("d")) {
            cardDiv.style.backgroundImage = "url('img-weather/" + status + ".jpg')";
        } else if (icon.includes("n")) {
            cardDiv.style.backgroundImage = "url('img-weather/night" + status + ".jpg')";
        }

    });
}

window.onload = function headerDate() {

    // Getting the current date in the  header
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var dayOfWeek = date.getDay();

    this.console.log(dayOfWeek)

    // Statement to determine to day as a word (monday, tuesday, etc.),
    // get.Day function gives day of the week as int so has to be converted
    if (dayOfWeek == 1) {
        dayOfWeek = "Monday";
    } else if (dayOfWeek == 2) {
        dayOfWeek = "Tuesday";
    } else if (dayOfWeek == 3) {
        dayOfWeek = "Wednesday";
    } else if (dayOfWeek == 4) {
        dayOfWeek = "Thursday";
    } else if (dayOfWeek == 5) {
        dayOfWeek = "Friday";
    } else if (dayOfWeek == 6) {
        dayOfWeek = "Saturday";
    } else if (dayOfWeek == 0) {
        dayOfWeek = "Sunday";
    }

    // Months of the year
    var month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var n = month[date.getMonth()];

    // Displaying correct ordinal numbers (string after day number)
    var dayStr = "";

    if (day == 1) {
        dayStr = "st";
    } else if (day == 2) {
        dayStr = "nd";
    } else if (day == 3) {
        dayStr = "rd";
    } else {
        dayStr = "th"
    }

    // Displaying current date
    document.getElementById("header-date").innerHTML = `<p class="current-date">${dayOfWeek}, ${day}${dayStr} ${n}</p>`;

    // Sidebar menu button scrolls to home div
    document.getElementById("home-li").addEventListener("click", function () {
        window.scrollTo(0, 0)
    })

    // Scroll down icon button
    document.getElementById("scroll-div").addEventListener("click", function () {
        window.scrollTo({
            top: 755
        });
    })

    // Sidebar menu button scrolls to search div
    document.getElementById("search-li").addEventListener("click", function () {
        window.scrollTo({
            top: 755
        });
    })

    // Learn about button scrolls to info div
    document.getElementById("more-btn").addEventListener("click", function () {
        window.scrollTo({
            top: 1550
        });
    })

    // Sidebar menu button scrolls to info div
    document.getElementById("info-li").addEventListener("click", function () {
        window.scrollTo({
            top: 1550
        });
    })
}

