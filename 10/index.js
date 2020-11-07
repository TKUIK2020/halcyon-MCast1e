require('http').createServer((req, res) => {
if (req.url ==='/') {
    res.writeHead(200, {'Content-Type': 'image/jpeg'});

    require('fs').readFile('image.jpg', (err, image) => {
        res.end(image);
    });
    
}

}).listen(3000, () => console.log('On'))