const fs = require('fs');
const http = require('http');
const server = http.createServer()

server.on('request', (req, res) => {
    fs.readFile('demofile1.html', function(err, data) {
        const stream = fs.createReadStream('input.txt');
        stream.pipe(res);
      });
});
server.listen(8000);