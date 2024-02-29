var fs = require('fs');

fs.writeFile('mynewfile2.txt', 'Jayson R Kennedy', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});