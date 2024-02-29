var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' Jayson Robert kennedy.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});