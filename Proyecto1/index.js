"use strict";
const fs = require("fs");
const express = require("express");
const PORT = 8000;
const app = express();
const urlPath = "/api/v1/products/";
app.use(express.json());

let products = [
  {
    id: 1,
    name: "Chunky salmón y cordero",
    description:
      "Verdadera carne de cordero y salmón como principales fuentes de proteína. Salmón como fuente de ácidos grasos EPA y DHA. Ideal para perros con piel sensible",
    price: 80000,
    available_units: 3,
    category: "Perros",
  },
  {
    id: 2,
    name: "Chunky pollo",
    description:
      "Chunky - Pollo Adulto, esta diseñado para soportar su salud y bienestar, es un alimento elaborado con altos estándares de calidad, diseñado para favorecer y cubrir los requerimientos nutricionales y energía que necesitan a diario. ",
    price: 90000,
    available_units: 7,
    category: "Perros",
  },
  {
    id: 3,
    name: "MaxCat",
    description:
      "Max - Cat Gatito Pollo, es rico en taurina, que es buena para el corazón del felino y además es un excelente auxiliar en la salud del tracto urinario y del corazón de tu gato, es una excelente comida para tu mascota, aporta nutrientes que tu felino necesita, mejora su visión.",
    price: 35000,
    available_units: 9,
    category: "Gatos",
  },
];

function crearTxt(listadoActual) {
  fs.writeFile("lista-productos.txt", JSON.stringify(listadoActual), (err) => {
    if (err) throw err;
    console.log(
      "La lista de productos se ha almacenado en el archivo lista-productos.txt"
    );
  });
}

const errorHandler = (error, req, res, next) => {
  console.log(error.message);
  res.status(500).send(`Algo salió mal ${error.message}`);
};

app.get("/", (req, res, next) => {
  res.send("Pagina principal");
});

app.get(urlPath, (req, res) => {
  res.json(products);
});

app.post(urlPath, (req, res) => {
  let { id, name, description, price, available_units, category } = req.body;
  let product = { id, name, description, price, available_units, category };
  products.push(product);
  res.json(products);
  crearTxt(products);
});

app.patch(urlPath + ":id", (req, res) => {
  let id = parseInt(req.params.id);
  let product = req.body;
  let index = products.findIndex((product) => product.id === id);

  if (index !== -1) {
    products[index] = product;
    res.json(product);
    crearTxt(products);
  } else {
    res.status(404).send("Producto no encontrado");
  }
});

app.delete(urlPath + ":id", (req, res) => {
  let id = parseInt(req.params.id);
  let index = products.findIndex((product) => product.id === id);

  if (index !== -1) {
    let producto = products[index];
    products.splice(index, 1);
    res.send(`Producto ${producto.name} eliminado correctamente`);
    crearTxt(products);
  } else {
    res.status(404).send("Producto no encontrado");
  }
});

app.use((req, res, next) => {
  res.status(404).send("Recurso no encontrado");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening in http://localhost:${PORT}${urlPath}`);
});
