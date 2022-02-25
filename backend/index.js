const http = require('http');

http.createServer((req,res)=>{

    res.write('Welcome to server');
    res.end();

}).listen(5000);