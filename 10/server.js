const http = require('http');
const html = `<html>
<head>
    <meta charset="utf=8">
    <title>LPR10</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>`;

http.createServer((req, res) => {
    switch (req.url) {
        case '/':
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end("404");
    }

}).listen(3000, () => console.log('On'))