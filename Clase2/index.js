const http = require("http"); //require trae la propiedad http

const HOST = "localhost";
const PORT = 8000;

const writeHTMLResponse = (res, htmlCode) => {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(htmlCode);
  //res.end("Este es mi primer servidor"); //Creo instancia del servidor
};

const server = http.createServer((req, res) => {//req esta escuchando, dependiendo de la url que le llegue
  const url = req.url; //segun lo que llega lo envia al if
  console.log("URL es: ", url);

  if (url === "/other") {
    writeHTMLResponse(res, "<p> Esta es sotra ruta </p>");
  } else {
    writeHTMLResponse(res, "<p> Codigo HTML </p>");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});
