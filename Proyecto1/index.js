'use strict'; 
const fs = require('fs');
const express = require("express"); 
const PORT = 8000;
const app = express(); 
const urlPath = "/api/v1/products/";
app.use(express.json()); 

const products = [
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

fs.writeFile('lista-productos.txt', JSON.stringify(products), (err) => {
  if (err) throw err;
  console.log('La lista de productos se ha almacenado en el archivo lista-productos.txt');
});

app.get(urlPath,(req, res)=>{
    res.json(products); // Devuelve toda la lista de productos
});

 app.post(urlPath,(req,res)=>{
    const {id,name,description,price,available_units,category} = req.body; // crear el producto y devolver el producto
    const product = {id,name,description,price,available_units,category};
    products.push(product); //creado con su identificador único asignado.                         
    res.json(products);
});
fs.writeFile('lista-productos.txt', JSON.stringify(products), { flag: 'a+' }, function (err) {
  if (err) throw err;
  console.log('Se escribió en el archivo');
});

 app.patch("/api/v1/products/:id",(req,res)=>{ // Modificar un producto y devolverlo
     const id = parseInt(req.params);
    const productoModificado = req.body;
    let productoEncontrado = products.find(producto => producto.id === id);
  
  console.log(req.params);
     if (productoEncontrado) {
      for (let key in productoModificado) {
        productoEncontrado[key] = productoModificado[key];
      }
      res.json(productoEncontrado);
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
   }

});  

app.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}${urlPath}`);
})
    