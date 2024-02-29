const fs = require('fs');
const http = require('http');
const server = http.createServer()

server.on('request', (req, res) => {
    fs.readFile('demofile1.html', function(err, data) {
        // if (err) return console.log(err);
        // res.end(data.toString());
        const stream = fs.createReadStream('input.txt');
        stream.on('data', (chunkdata) => {
            res.write(chunkdata)
        });
        stream.on('end', () => {
            res.end();
        });
        stream.on('error', (err) => {
            console.log(err);
            res.end("file not found");
        })
      });
});
server.listen(8000);

