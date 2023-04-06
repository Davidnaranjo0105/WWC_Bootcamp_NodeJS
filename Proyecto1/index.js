'use strict'; 
const fs = require('fs');
const express = require("express"); 
const PORT = 8000;
const app = express(); 
const urlPath = "/api/v1/products/";
app.use(express.json()); 

let products = [
    { id: 1,
      name: "Chunky salmón y cordero",
      description: "Descripcion",
      price: 80000,
      available_units : 3,
      category: "Perros",
    },
    {
        id: 2,
      name: "Chunky pollo",
      description: "Descripcion",
      price: 90000,
      available_units : 7,
      category: "Perros",
    },
    {
      id: 3,
    name: "MaxCat",
    description: "Descripcion",
    price: 35000,
    available_units : 9,
    category: "Gatos",
  }
  ];

  app.get('/', (req,res) => {
    //res.query;
    //console.log(res.query);
    res.send("Pagina principal"); //Texto plano de respuesta
});


function crearTxt (listadoActual) {
  fs.writeFile('lista-productos.txt', JSON.stringify(listadoActual), (err) => {
  if (err) throw err;
  console.log('La lista de productos se ha almacenado en el archivo lista-productos.txt');
});
}

app.get(urlPath,(req, res)=>{
    res.json(products); // Devuelve toda la lista de productos
});

 app.post(urlPath,(req,res)=>{
    const {id,name,description,price,available_units,category} = req.body; // crear el producto y devolver el producto
    const product = {id,name,description,price,available_units,category};
    products.push(product); //creado con su identificador único asignado.                         
    res.json(products);
    crearTxt(products);
});

 app.patch("/api/v1/products/:id",(req,res)=>{ // Modificar un producto y devolverlo
     const {id} = req.params;
    const productoModificado = req.body;
    console.log("req.body ", req.body);
    console.log("products ", products);
    const productoEncontrado = products.find(producto => producto.id === id);
  // console.log("encontrado "+productoEncontrado);
  // console.log("modificado "+productoModificado);
     if (productoEncontrado) {
      // for (let key in productoModificado) {
      //   productoEncontrado[key] = productoModificado[key];
      // }
      // res.json(productoEncontrado);
      // crearTxt(products);
    } else {
      res.status(404).send('Producto no encontrado');
    } 
});

app.delete("/api/v1/products/:id",(req,res)=>{ // Eliminar producto devolver: “producto {nombreDeProducto} fue eliminado” 
 const {id} = req.params;
 console.log(id);
  const indiceProducto = products.findIndex(producto => producto.id === id);
console.log(indiceProducto);
   if (indiceProducto) {
    products.splice(indiceProducto);
    res.send('Producto eliminado correctamente');
    crearTxt(products);
   }
});  

app.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}${urlPath}`);
})
    