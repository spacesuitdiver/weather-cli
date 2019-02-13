var weatherLib = require('weather-js');

console.log('Welcome to the Weather CLI');

 var city = process.argv[2];
 var state = process.argv[3]; // node cli.js Denver CO

weatherLib.find({
  search: city + ', ' + state,  // Denver, CO
  degreeType: 'F'
}, function(err, result) {
  if(err) console.log(err);
 
  console.log(JSON.stringify(result, null, 2));
});
