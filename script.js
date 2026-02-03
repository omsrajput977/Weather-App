let button = document.querySelector(".search-btn");
let inputFiled = document.querySelector(".searchField");
let locationField = document.querySelector(".location");
let tempField = document.querySelector(".temp");
let conditionField = document.querySelector(".condition");
let datetimeField = document.querySelector(".datetime");
let detailItems = document.querySelectorAll(".detail-item");
let feelsLikeBox = detailItems[0].querySelector(".value");
let humidityBox = detailItems[1].querySelector(".value");
let windBox = detailItems[2].querySelector(".value");
let visibilityBox = detailItems[3].querySelector(".value");
let cloudBox = detailItems[4].querySelector(".value");
let pressureBox = detailItems[5].querySelector(".value");


// console.log(inputFiled.value);

let target = "New Delhi";
fetchData(target);
inputFiled.value = "";

button.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(inputFiled.value);

    target = inputFiled.value;
    fetchData(target);

    inputFiled.value = "";

});


async function fetchData(locationName) {
    try {
        let res = await fetch(`https://api.weatherapi.com/v1/current.json?key=b5183cff07bd4af79f1100359262201&q=${locationName}&aqi=no`);

        // console.log(res);

        let data = await res.json();
        // console.log(data);

        locationField.innerText = data.location.name;
        tempField.innerText = data.current.temp_c.toFixed(1);
        conditionField.innerText = data.current.condition.text;

        feelsLikeBox.innerText = `${data.current.feelslike_c}°`;
        humidityBox.innerText = `${data.current.humidity}%`;
        windBox.innerText = `${data.current.wind_kph} km/h`;
        visibilityBox.innerText = `${data.current.vis_km} km`;
        cloudBox.innerText = `${data.current.cloud}%`;
        pressureBox.innerText = `${data.current.pressure_mb} hPa`;
    } catch (error) {
        alert("Enter valid location!");
        console.log(error);
    }

}

const date = new Date(); // CURRENT date & time

const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
};

let formatted = new Intl.DateTimeFormat("en-US", options).format(date);

formatted = formatted.replace(" ,", ",");
formatted = formatted.replace(/,([^,]*)$/, " •$1");

datetimeField.innerText = formatted;


