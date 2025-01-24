const http = require('http');
const handleRequest = require('./controller/requestController');
const port = 8091;

// const handelRqt = (req,res) => {
//   res.write("<h1>Hello</h1>");
//   res.end();
// }

const server = http.createServer(handleRequest);
server.listen(port,(error)=>{
  if(error)
  {
    console.log("server is not start");
  }
  else
  {
    console.log("server is start");
    console.log("http://localhost:"+port);
  }
})