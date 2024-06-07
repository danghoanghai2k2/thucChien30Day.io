var weatherApp = document.querySelector('.weather__app');
var inpurSearch = document.getElementById('search__input');
var city = document.getElementById('city');
var country = document.getElementById('country');
var dateTime = document.getElementById('date__time');
var time = document.getElementById('time');
var temperaturet = document.getElementById('temperaturet');
var special = document.getElementById('special');
var showEye = document.getElementById('showEye');
var wind = document.getElementById('wind');
var percent = document.getElementById('percent');

async function getWeather(searchValue) {
   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=8bd86c134a4cf60b1511775f4726c0ff`;
   let data = await fetch(apiUrl).then(res => res.json());
   console.log(data);
   city.innerText = data.name;
   country.innerText = data.sys.country;
   temperaturet.innerText = Math.round(data.main.temp - 273.15);
   if (data.main.temp - 273.15 <= 15) {
      weatherApp.style.backgroundImage = 'url(anh/cold.png)';
      document.body.style.backgroundImage = 'url(anh/cold.png)';
   } else {
      weatherApp.style.backgroundImage = 'url(anh/hot.png)';
      document.body.style.backgroundImage = 'url(anh/hot.png)';
   }
   special.innerText = data.weather.main;
   wind.innerText = data.wind.speed + ' (m/s)';
   percent.innerText = data.main.humidity + ' (%)';
   showEye.innerText = data.visibility + ' (m)';
   special.innerText = data.weather[0].description;
}
getWeather('nam dinh');
setInterval(() => {
   getDateNwo();
}, 1000);
inpurSearch.addEventListener('keydown', function keyDown(e) {
   if (e.keyCode === 13) {
      searchValue = inpurSearch.value.trim();
      getWeather(searchValue);
   }
});
function getDateNwo() {
   var d = new Date();
   time.innerText = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
   date__time.innerText = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}
