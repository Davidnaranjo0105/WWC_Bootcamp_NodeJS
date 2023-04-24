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

// Para mostrar todos los productos
const showList = async ()=>{
    const products = await exports.Product.find();
    console.log(products);
}

// // Crear Producto
// const create = async()=>{
//     const product = new exports.Product({
//         id: '31',
//         name: 'A magical key',
//         description: 'It is use by stelar wizards',
//         availableUnits: 2,
//         price: 12,
//         category: 'Magical items'
//     })
//     const result = await exports.Product.save();
//     console.log(result);
// }

// // Actualizar
// const updateList = async (id)=>{
//     const product = await exports.Product.updateOne({_id:id},
//         {
//             $set:{
//                 name: 'A magical key MODIFIED',
//                 description: 'It is use by stelar wizards MODIFIED',
//             }
//         })
// }

// // Eliminar
// const deleteProduct = async (id)=>{
//     const product = await exports.Product.deleteOne({_id:id})
//     console.log('El elemento eliminado es: ', product)
// }

// LLamar los procedimientos

// // Motrar todo
showList();

// // Crear
// create();

// // Actualizar
// updateList('6445907efc980e9ca021132a');

// // Eliminar
// deleteProduct('25');
module.exports = routes;