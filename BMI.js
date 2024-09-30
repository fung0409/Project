const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {

    var params = url.parse(req.url, true).query;    
    const height = params.height/100;
    const weight = params.weight;
    const bmi = weight / (height * height);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ BMI: bmi }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});