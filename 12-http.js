const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Our Page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.statusCode = 404;
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href='/'>Back Home</a>
    `);
  }
});

server.listen(4000, () => {
  console.log("Server listening on port 4000");
});
