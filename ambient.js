// Any copyright is dedicated to the Public Domain.
// // http://creativecommons.org/publicdomain/zero/1.0/
//
// /*********************************************
// This basic RFID example listens for an RFID
// device to come within range of the module,
// then logs its UID to the console.
// *********************************************/

// Import the interface to Tessel hardware
var tessel = require('tessel');
var ambientlib = require('ambient-attx4');

var ambient = ambientlib.use(tessel.port['B']);

ambient.on('ready', function () {
  // Get points of light and sound data.
  setInterval(function() {
    ambient.getLightLevel(function(err, lightdata) {
      if (err) throw err;

      ambient.getSoundLevel(function(err, sounddata) {
        if (err) throw err;

        console.log('Light level:', lightdata.toFixed(8), " ", "Sound Level:", sounddata.toFixed(8));
      });
    });
  }, 500); // The reading will happen every .5 seconds
});

ambient.on('error', function (err) {
  console.error(err);
});

