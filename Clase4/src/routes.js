const {Router} = require("express");
const { Product } = require("./models");

const routes = new Router;

routes.get("/health", (_, res) => res.send("check"));
//estudiar heatlh check

const BASE = "/api/v1/products";

routes.get(BASE, async(req,res)=>{
    const products = await Product.find();
    res.json(products);
});

module.exports = routes;