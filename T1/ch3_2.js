var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.write('<h1>hello</h1>');
    res.end();
}).listen(3120,()=>{
    console.log("Server is running at http://localhost:3120");
})