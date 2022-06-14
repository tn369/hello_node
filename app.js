const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(getFromClient);
server.listen(3000);
console.log("Server start!")

async function getFromClient(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const content = await fs.readFile('index.html', 'utf-8')
    res.write(content);
    res.end();
}