var shell = require('child_process').exec,
    parseXML = require('xml2js').parseString;


var dir = '.'
var args = '--xml --not-match-f=\'(boostrap(.min|).css)\' --not-match-d=\'(bootstrap)|(bower_components)|(node_modules)\'';
var command = 'cloc ' + args + ' ' + dir + '/*';

console.log('getting loc for %s', dir);

shell(command, function (error, stdout, stderr) {
  if (error !== null) {
    return console.log('exec error: ' + error);
  }
  if (stdout) {
    
    var xml = stdout.replace(/[^<]*(<\?xml.*)/, '$1');
    
    parseXML(xml, function (err, result) {
      
        console.log(JSON.stringify(result, null, 2));
        
    });
    
  }
  
});