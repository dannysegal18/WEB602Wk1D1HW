const http = require('http');


// config the web server
const hostname = 'localhost'
const port = 5000


// create the web server
var server = http.createServer((req, res) => {
    const fileUrl = req.url;

    if (fileUrl === '/') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.end(`<html><body><h1>Home Page</h1></body></html>`);
    } else if (fileUrl === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.end(`<html><body><h1>About Page</h1></body></html>`);
    } else if (fileUrl === '/contact') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.end(`<html><body><h1>Contact Page</h1></body></html>`);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-type', 'text/html');
        res.end(`<html><body><h1>Invalid Request!</h1></body></html>`);
    }
});


// listen to port as server starts
server.listen(port, hostname, () => {
    console.log(`The NodeJS server on port ${port} is now running...`);
});