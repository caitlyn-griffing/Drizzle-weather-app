$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&appid=8f9a11f5149a0f8020ecd4c8516f848a", function(data) {
    console.log(data);

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var weather = data.weather[0].main;
    var temp = Math.floor(data.main.temp) + "°F";

    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp);


})

$.getJSON("https://type.fit/api/quotes", function(info) {
    // console.log(info);

    var randomQuote = info[Math.floor(Math.random()*info.length)];
    console.log(getQuote = randomQuote.text + " --- " + randomQuote.author);
    getQuote = randomQuote.text + " --- " + randomQuote.author;

    
    $('.quotes').text(getQuote); 

})

$('<button>');
