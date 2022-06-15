const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const index_page = fs.readFileSync('./index.ejs', 'utf-8');

const server = http.createServer(getFromClient);
server.listen(3000);
console.log("Server start!")

async function getFromClient(req, res) {
    const params = {
        title: "Indexページ",
        content: "これはテンプレートを使ったサンプルページです。"
    }
    const content = ejs.render(index_page, params)
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(content);
    res.end();
}