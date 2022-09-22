const http = require("http");
const { readFile } = require("fs/promises");

const port = 8000;

const handler = async (req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    const data = await readFile("./index.html", "utf-8");
    successHtmlStatus(res, data);
  } else if (req.url === "/about" || req.url === "/about.html") {
    const data = await readFile("./about.html", "utf-8");
    successHtmlStatus(res, data);
  } else if (req.url === "/contact-me" || req.url === "/contact-me.html") {
    const data = await readFile("./contact-me.html", "utf-8");
    successHtmlStatus(res, data);
  } else {
    const data = await readFile("404.html", "utf-8");
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write(data);
    res.end();
  }
};

function successHtmlStatus(res, data) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write(data);
  res.end();
  return res;
}

const server = http.createServer(handler);

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
