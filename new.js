const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url == "/" || req.url == "/index.html" || req.url == "/home") {
    fs.readFile("./index.html", null, function (err, data) {
      if (err) {
        return res.status(500).json({ message: err });
      }
      res.write(data);
      res.end();
    });
  }
  if (req.url == "/about.html") {
    fs.readFile("./about.html", null, function (err, data) {
      if (err) {
        return res.status(500).json({ message: err });
      }
      res.write(data);
      res.end();
    });
  }
  if (req.url == "/contact.html") {
    fs.readFile("./contact.html", null, function (err, data) {
      if (err) {
        return res.status(500).json({ message: err });
      }
      res.write(data);
      res.end();
    });
  }
});
server.listen(8080, "localhost");

console.log("You have successfully created a server!");
