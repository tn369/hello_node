const http = require('http');
const fs = require('fs').promises;
const ejs = require('ejs');


const server = http.createServer(getFromClient);
server.listen(3000);
console.log("Server start!")

async function getFromClient(req, res) {
    const index_page = await fs.readFile('./index.ejs', 'utf-8');
    const content = ejs.render(index_page)
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(content);
    res.end();
}