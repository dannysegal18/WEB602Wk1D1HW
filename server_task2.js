const http = require('http');

const path = require('path');
const fs = require('fs');


// config the web server
const hostname = 'localhost'
const port = 5000


// create the web server
var server = http.createServer((req, res) => {
    var fileUrl = req.url;

    // resolve for file path
    if (fileUrl === '/') {
        fileUrl = '/home';
    }
    var filePath = path.resolve('./task2_pages' + fileUrl + '.html');

    // look for file
    fs.access(filePath, function(err) {
        if (err) {
            res.status = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>Invalid Request!</h1></body></html>`);
            console.log(`Requested page ${filePath} not found!`);
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            fs.createReadStream(filePath).pipe(res);
            console.log(`Successfully read file ${filePath} with status code 200.`)
        }
    });
});


// listen to port as server starts
server.listen(port, hostname, () => {
    console.log(`The NodeJS server on port ${port} is now running...`);
});