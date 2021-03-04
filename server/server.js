const http = require("http");

let allCats = [{name: 'Custard', age: 13}, 
{name: "Sooty", age: 5}];

let allDogs = [{name: 'Rex', age: 3}, 
{name: 'Rover', age: 8}];

let allUnicorns = [{name: 'Spike', age: 100}, 
{name: 'Dave', age: 20}];

const requestListener = (req, res) => {
    let body;
    let statusCode;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    switch(req.url) {
        case '/':
            body = { message: 'Hello, no animals here yet!'};
            break;
        case '/cats':
            if (req.method === 'GET') {
                body = {animals: allCats};
                statusCode = 200;
            }
            break;
        case '/dogs':
            if (req.method === 'GET') {
                body = {animals: allDogs};
                statusCode = 200;
            }
            break;
        case '/unicorns':
            if (req.method === 'GET') {
                body = {animals: allUnicorns};
                statusCode = 200;
            }
            break;
        default:
            statusCode = 404;
            body = {error: `Route ${req.url} is invalid`};
            break;
    }

    body = body && JSON.stringify(body);
    res.end(body)
}

const server = http.createServer(requestListener);

const startServer = (port, host) => server.listen(port, host, () => console.log(`Visit http://${host}:${port} animals!`));
const closeServer = cb => server.close(cb);

module.exports = {startServer, closeServer};