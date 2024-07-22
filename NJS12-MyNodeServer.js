const myhttp = require("http");
const server = myhttp.createServer((req,res)=>{
    res.end("Hello form server side : divi");
})
server.listen(9000,"127.0.0.1",()=>{
    console.log("Listening on port 9005: divi")
})
//npm install -g nodemon
//nodemon NJS12-MyNodeServer.js
//listening on port 9000:ram
//http://localhost:9000/
//hello form server side :Ram