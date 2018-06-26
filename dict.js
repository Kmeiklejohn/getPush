const resources = {
  "/IP": "Internet Protocol",
  "/TCP": "Transmission Control Protocol"
};
const textBody = require("body");


let http = require("http")
const hostName = null
let port = 3000

http.createServer(function (req, res) {


  if (req.method === "GET") {
    if (resources[req.url] === undefined) {
      res.statusCode = 404;
      res.end("ERROR NOT FOUND");
    } else if (req.method === "PUT") {
      res.statusCode = 201;
      textBody(req, res, (err, requestBody) => {
        resources[req.url] = requestBody;
        const responseBody = resources[req.url];
        res.end(responseBody);
      })
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      const responseBody = resources[req.url];
      res.end(responseBody);
    }
  }



}).listen(port, hostName, () => {

  console.log('Server running at http://127.0.0.1:8000/')
})