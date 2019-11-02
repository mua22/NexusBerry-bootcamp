const http = require("http");
const server = http.createServer(handleRequests);

server.on("connection", socket => {
  console.log("Connection Created");
});

server.listen("3000");
console.log("Listening on 3000");

function handleRequests(req, res) {
  if (req.url === "/") {
    res.write("Hello From Nexus Server");
    res.end();
  }
  if (req.url === "/api/products") {
    res.write(JSON.stringify(["Laptop", "apple"]));
    res.end();
  }
}
