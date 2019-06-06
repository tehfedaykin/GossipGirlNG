'use strict';
const htmlReporter = require('pa11y-reporter-html');
var fs = require('file-system');
const pa11y = require('pa11y');


pa11y('http://localhost:4200/', {
  standard: 'WCAG2AAA',
  actions: [
    'wait for element .modal-content button to be visible',
    'click .modal-content button'
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
    let modifiedResults = htmlResults.replace(/insufficient contrast/g, '<a href="https://webaim.org/resources/contrastchecker/" target="blank">insufficient contrast</a>');
    fs.writeFile('a11y-tests/output/index.html', modifiedResults, function(err) {})
}).catch((err) => {
  console.log(err);
});
