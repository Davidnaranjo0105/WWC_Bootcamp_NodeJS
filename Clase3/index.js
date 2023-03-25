'use strict'; // Hace que los errores silenciosos sean errores

const express = require("express"); //Importación
const PORT = 3000;
const app = express(); //Inicializo el framework
app.use(express.json()); //Te devuelve el json parseado de lo que se esta recbiendo del body

const products = [
    { id: 1,
      name: "Reloj",
      price: 100,
      quantity: 2,
    },
    {
        id: 2,
      name: "Correa",
      price: 100,
      quantity: 3,
    },
    {
        id: 3,
      name: "Sombrero",
      price: 1000,
      quantity: 3,
    },
  ];

app.get('/', (req,res) => {
    //res.query;
    //console.log(res.query);
    res.send("Esta es mi primera app en express"); //Texto plano de respuesta
});

app.get("/api/v1/products",(req, res)=>{
    res.json(products); // Responde con un formato Json
});

app.get("/api/v1/products/:productId", (req,res)=>{
    const {productId} = req.params; //El número que se mandara desde la url al escribirlo en postman
    const productIdInt = parseInt(productId); //Praseo el id a int para que sea igual al del 
    const product = products.find((product) => product.id === productIdInt); //que encuentre el item que tiene el numero que le estoy mandando por id
    console.log(req.params);
    res.json(product);

});

app.post("/api/v1/products", (req,res)=>{
    const product = req.body;
    products.push(product);
    res.json(products);
    
});

app.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}`);
})
    