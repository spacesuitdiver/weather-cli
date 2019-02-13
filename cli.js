var weatherLib = require('weather-js');
var NodeGeocoder = require('node-geocoder');

// node cli.js 6507 Trammel Drive Dallas, Texas
// process.argv // ['...', '...', '6507', ' Trammel', 'Drive', 'Dallas', 'Texas']
var args = process.argv.slice(2);
var address = args.join(' ');

console.log('Welcome to the Weather CLI');

var options = {
  provider: 'mapquest',
 
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'fJGuZATmGyua65DJPTOgXVEmKx6DNY5I', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};
 
var geocoder = NodeGeocoder(options);
 
// Using callback
geocoder.geocode(address, function(err, res) {
  if (!err) {
    var city = res[0].city;
    var state = res[0].stateCode;

    weatherLib.find({
      search: city + ', ' + state,
      degreeType: 'F'
    }, function(err, result) {
      if (!err) {
        var current = result[0].current;

        console.log(`It feels like ${current.feelslike}!`)
      } else {
        console.log('Could not find the weather.');
      }
    });

  } else {
    console.log('Could not geocode.');
  }
});








