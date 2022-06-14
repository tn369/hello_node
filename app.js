const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<!DOCTYPE > <html lang="ja">')
    res.write('<head><meta charset="utf-8"></head>')
    res.write('<title>Hello</title>')
    res.write('<body><h1>Hello Node.js!</h1></body>')
    res.write('<p>This is Node.js sumple page.</p>')
    res.write('<p>これは、Node.jsのサンプルページです。</p>', 'utf-8')
    res.write('</body> </html >')
    res.end();
});

server.listen(3000);
