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
      description: "Verdadera carne de cordero y salmón como principales fuentes de proteína. Salmón como fuente de ácidos grasos EPA y DHA. Ideal para perros con piel sensible",
      price: 80000,
      available_units : 3,
      category: "Perros",
    },
    {
        id: 2,
      name: "Chunky pollo",
      description: "Chunky - Pollo Adulto, esta diseñado para soportar su salud y bienestar, es un alimento elaborado con altos estándares de calidad, diseñado para favorecer y cubrir los requerimientos nutricionales y energía que necesitan a diario. ",
      price: 90000,
      available_units : 7,
      category: "Perros",
    },
    {
      id: 3,
    name: "MaxCat",
    description: "Max - Cat Gatito Pollo, es rico en taurina, que es buena para el corazón del felino y además es un excelente auxiliar en la salud del tracto urinario y del corazón de tu gato, es una excelente comida para tu mascota, aporta nutrientes que tu felino necesita, mejora su visión.",
    price: 35000,
    available_units : 9,
    category: "Gatos",
  }
  ];

  app.get('/', (req,res,next) => {
    res.send("Pagina principal"); 
});

function crearTxt (listadoActual) { 
  fs.writeFile('lista-productos.txt', JSON.stringify(listadoActual), (err) => { 
  if (err) throw err; 
  console.log('La lista de productos se ha almacenado en el archivo lista-productos.txt');
});
}

app.get(urlPath,(req, res)=>{ 
    res.json(products); 
});

 app.post(urlPath,(req,res)=>{
    const {id,name,description,price,available_units,category} = req.body; 
    const product = {id,name,description,price,available_units,category}; 
    products.push(product);                      
    res.json(products); 
    crearTxt(products); 
});

app.patch(urlPath + ':id', (req, res) => { 
  const id = parseInt(req.params.id); 
  const product = req.body;
  const index = products.findIndex(product => product.id === id); 

  if (index !== -1) {
    products[index]= product;
    res.json(product);
    crearTxt(products);
  } else {
    res.status(404).send('Producto no encontrado');
  }
});

app.delete(urlPath + ':id',(req,res)=>{ 
  const id = parseInt(req.params.id);
  const index = products.findIndex(product => product.id === id);

  if (index !== -1) {
    const producto = products[index];
    products.splice(index, 1);
    res.send(`Producto ${producto.name} eliminado correctamente`);
    crearTxt(products);
   } else {
    res.status(404).send('Producto no encontrado');
  }
});  

app.use((req,res,next)=>{ 
  const error = new Error("Producto no encontrado")  
  error.status = 404 
  next(error) 
});


app.use((err,req,res,next)=>{ 
res.status(err.status || 500) 
res.send({
  error: { 
    status: err.status || 500, 
    message: err.message, 
  }
})
});

app.use((err, req, res, next) => {
  if (err.statusCode === 400) {
    res.status(400).json({message: 'Los campos id, name, description, price, available_units y category son obligatorios'});
  } else {
    console.error(err);
    res.status(500).json({message: 'Ocurrió un error en el servidor'});
  }
});

app.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}${urlPath}`);
});