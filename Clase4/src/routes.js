const { Router } = require("express");
const routes = new Router();
const Product = require("./models");

// routes.get("/health", (_, res) => res.send("check"));
//estudiar heatlh check

const BASE = "/api/v1/products";

// Traer listado
routes.get(BASE, async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
    console.log(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

// // Crear Producto
routes.post(BASE, async (req, res) => {
  try {
    const product = await new Product(req.body).save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

// // Actualizar
routes.patch(`${BASE}/:id`, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

// // Eliminar
routes.delete(`${BASE}/:id`, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(product);
    console.log("El elemento eliminado es: ", product);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = routes;
