$(document).ready(function(){
    
    const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
    "method": "GET",
    "headers": {
    "accept": "application/json",
    "x-rapidapi-key": "9a0abae874msh2da2d3068725f2ep1a9982jsn114baac1ccb5",
    "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"
}
};
$.ajax(settings).done(function (response) {
console.log(response);
console.log(response.icon_url);
$(".API").append("<img src='" + response.icon_url + "'>");
$(".API").append(response.value);
});

const settings2 = {
"async": true,
"crossDomain": true,
"url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple",
"method": "GET",
"headers": {
"x-rapidapi-key": "9a0abae874msh2da2d3068725f2ep1a9982jsn114baac1ccb5",
"x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com"
}
};

$.ajax(settings2).done(function (response) {

$(".API").append("<img src='" + response.hints[0].food.image + "'>")
$(".API").append("<p> " + response.hints[0].food.label+ "<p>");
$(".API").append("<p> " + response.hints[0].food.nutrients.CHOCDF+ "<p>");


});

});
