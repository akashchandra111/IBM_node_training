var fs = require('fs');
var wstream = fs.createWriteStream('11c_myOutput.txt');

wstream.on('finish', function () {
    console.log('file has been written');
});

wstream.write('Using stream to write text\n');
wstream.write('Another line of text.');
wstream.end();
