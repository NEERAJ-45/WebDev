const http = require("node:http");

const hostName = "127.0.0.1";
const port = "3000";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end('Hello Fellas :D ');


});
server.listen(port,hostName,()=>{

    console.log(`The Server is running at http://${hostName}:${port}/`);
    
})  
