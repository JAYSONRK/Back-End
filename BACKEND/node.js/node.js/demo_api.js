const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Hello from home");
    } else if (req.url == "/about") {
        res.end("Hello from about");
    } else if (req.url == "/userapi") {
        // Construct the correct file path
        const filePath = path.join(__dirname, '..', 'node.js', 'userapi.json');
        // Read the userapi.json file asynchronously
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) { // If there's an error reading the file
                console.error("Error reading userapi.json:", err); // Log the error
                // Send a 500 Internal Server Error response
                res.writeHead(500, {'Content-Type': 'text/html'});
                return res.end("500 Internal Server Error");
            }
            console.log(data); // Log the data read from the file
            // Send the contents of the JSON file as the response
            res.writeHead(200, {'Content-Type': 'application/json'}); // JSON response
            res.write(data);
            return res.end(); // End the response
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
    } 
    
}).listen(8080);
