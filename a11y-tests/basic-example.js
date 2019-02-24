'use strict';
const htmlReporter = require('pa11y-reporter-html');
var fs = require('file-system');
const pa11y = require('pa11y');


pa11y('http://localhost:4200/', {
  actions: [
  ],
   // Log what's happening to the console
   log: {
     debug: console.log.bind(console),
     error: console.error.bind(console),
     info: console.log.bind(console)
   },
   screenCapture: __dirname + '/wat.png'
    // Options go here
}).then(async results => {
    // Returns a string with the results formatted as HTML
    const htmlResults = await htmlReporter.results(results);
    fs.writeFile('a11y-tests/output/index.html', htmlResults, function(err) {})
});
