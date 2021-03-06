// An example of running Pa11y programmatically
'use strict';

var jennifersReporter = require('./reporter/reporter');
var pa11y = require('pa11y');
var fs = require('file-system');

var tests = [
  {
    name: 'home',
    url: 'http://localhost:4200/',
    testOptions: {
      actions: [
        'wait for element .modal-content button to be visible',
        'click .modal-content button'
      ]
    }
  },
  {
    name: 'posts',
    url: 'http://localhost:4200/posts/',
    testOptions: {
      actions: [
        'wait for element .modal-content button to be visible',
        'click .modal-content button'
      ]
    }
  },
  {
    name: 'post',
    url: 'http://localhost:4200/posts/Jess-at-TechoramaNL',
    testOptions: {
      actions: [
        'wait for element .modal-content button to be visible',
        'click .modal-content button'
      ]
    }
  },
  {
    name: 'pics',
    url: 'http://localhost:4200/pics',
    testOptions: {
      actions: [
        
      ]
    }
  },
  {
    name: 'cast',
    url: 'http://localhost:4200/cast',
    testOptions: {
      actions: [
        
      ]
    }
  }
]


function runTest(test) {
  test.testOptions.screenCapture = './a11y-dashboard/output/' + test.name +'.png'
  var options = { 
    ...test.testOptions, 
    standard: 'WCAG2AAA'};
  pa11y(test.url, options).then((results) => {
      results.screenGrab = test.name + '.png';
      var htmlResults = jennifersReporter.process(results, test.url, true);
      fs.writeFile('a11y-dashboard/output/'+ test.name + '.html', htmlResults, function(err) {})
  }).catch((err) => {
    console.log(err);
  });
}

for (var i = 0; i < tests.length; i++) {
  runTest(tests[i])
}

var htmlResults = jennifersReporter.buildDashboard(tests, 'GossipGirl');
fs.writeFile('a11y-dashboard/output/index.html', htmlResults, function(err) {})