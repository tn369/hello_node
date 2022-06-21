const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');
const qs = require('querystring');

const index_page = fs.readFileSync('./index.ejs', 'utf-8');
const other_page = fs.readFileSync('./other.ejs', 'utf-8');

const server = http.createServer(getFromClient);
server.listen(3000);
console.log("Server start!")

function getFromClient(req, res) {
    const url_parts = url.parse(req.url, true);
    switch (url_parts.pathname) {
        case '/':
            response_index(req, res);
            break;
        case '/other':
            response_other(req, res);
            break;
        default:

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('no page...');
            break;

    }
}

function response_index(req, res) {
    const params = {
        title: "Index",
        content: "これはIndexページです。"
    };

    const content = ejs.render(index_page, params);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(content);
    res.end();
}


function response_other(req, res) {

    if (req.method === 'POST') {
        let body = ""
        req.on('data', function (data) {
            body += data;
        });

        req.on("end", () => {
            let post_data = qs.parse(body);
            const msg = `これはOtherページです。あなたは「${post_data.msg}」と書きました。`;
            const content = ejs.render(other_page, {
                title: "Other",
                content: msg
            });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(content);
            res.end();
        });
    } else {
        const msg = "ページがありません"
        const content = ejs.render(other_page, {
            title: "Other",
            content: msg
        });
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(content);
        res.end();
    }
}
