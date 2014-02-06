// require modules
var fs = require('fs-extra'),
    path = require('path'),
    async = require('async'),
    shell = require('child_process').exec;

// configuration
var data = require('../data.json'),
    dir = '_mirror',
    command = "wget -mkp",
    options = { "cwd": path.join(__dirname, '..', dir) };

// for all the results in the list, do the thing in parallel
async.each(data.results, doTheThing,
  // and when finished, run this:
  function (err) {
    console.log(err | "success!");
  }
);

// how to do the thing
function doTheThing(item, callback) {
  
  var url = 'http://' + item.link;
  
  console.log('Downloading %s ...', url);
  shell(command+' '+url, options, function (error, stdout, stderr) {
    console.log((error && stderr) || (stdout || null))
  });
}