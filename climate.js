// Any copyright is dedicated to the Public Domain.
// // http://creativecommons.org/publicdomain/zero/1.0/
//
// /*********************************************
// This basic climate example logs a stream
// of temperature and humidity to the console.
// *********************************************/

var tessel = require('tessel');
var climatelib = require('climate-si7020');

var climate = climatelib.use(tessel.port['A']);

climate.on('ready', function() {
  console.log('Connected to climate module');

  // Loop forever
  setInterval(function loop() {
    climate.readTemperature('c', function(err, temp) {
      if (err) throw err;

      climate.readHumidity(function(err, humid) {
        if (err) throw err;

        console.log('Degrees:', temp.toFixed(4) + 'C', ' ', 'Humidity:', humid.toFixed(4) + '%RH');
      });
    });
  }, 500);
});

climate.on('error', function(err) {
  console.log('error connection module', err);
});
