var fs = require("fs");
var keys = require('./keys.js');
var request = require("request");
var type = process.argv[2];
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var client = new Twitter({
  consumer_key: '5FXHM9akrfGK399D2RKZz5deS',
  consumer_secret: 'ctynjJZrkBmAilcH29vxkdtUNPNsay13cu8PapABeDJ7BDYcH4',
  access_token_key: '886240147171364866-xj24uXvCDTSRvrmF3lJTXyP1iGy5YKQ',
  access_token_secret: 'MWeP8VOf5mq0nhE2LkrnHp8FTAAQEb4CsAjsLZ1Au8lo2'
});

if(type === "tweets"){
var params = {screen_name: 'Jamela314'};

client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
  	if (process.argv[3] === undefined)
  	for(i=0; i<20; i++){
  		console.log(tweets[i].text);
  	  };
  	};    
  });
};

 
var spotify = new Spotify({
  id: <5f547a901ae049c2bd8c961d3886bab0>,
  secret: <9380c2d38c4b42e89ad71e12ca58ffc5
>
});

if(type === "spotify"){
var songTitle = process.argv[3]
if(songTitle === undefined) {
	songTitle = "I Want It That Way";
}
spotify.search({ type: 'track', query: songTitle }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
   console.log("Artist: " + items[i].artists[k].name.);
   console.log("Album Name: ". + items[i].album.name.);
	console.log("Spotify Link: " + items[i].preview_url.);
});



var myMovie = process.argv[3];

var queryUrl = "http://www.omdbapi.com/?t+ + movieName + 3fcecdcb"

console.log(queryURl);

request(queryURL, function(error, repsonse, body){
	if (!error && response.statusCode === 200){

	console.log("Release Year" + JSON.parse(body).Year);
	}

});

var getMeMovie = function(movieName) {

  if (movieName === undefined) {
    movieName = 'Purple Rain';
  }

  var urlHit = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&r=json";

  request(urlHit, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = [];
      var jsonData = JSON.parse(body);

      data.push({
      'Title: ' : jsonData.Title,
      'Year: ' : jsonData.Year,
      'Rated: ' : jsonData.Rated,
      'IMDB Rating: ' : jsonData.imdbRating,
      'Country: ' : jsonData.Country,
      'Language: ' : jsonData.Language,
      'Plot: ' : jsonData.Plot,
      'Actors: ' : jsonData.Actors,
      'Rotten Tomatoes Rating: ' : jsonData.tomatoRating,
      'Rotton Tomatoes URL: ' : jsonData.tomatoURL,
  });
      console.log(data);
      writeToLog(data);
}
  });

}


// var myCommand = "Do What It Says"
