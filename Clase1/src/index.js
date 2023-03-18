// const fs = require('fs');
// const path = require('path');

// //console.log(__dirname); //directorio
// //console.log(__filename); //archivo

// const readFile = async () => {
//     try {
//     const filePath = path.resolve(`${__dirname}/archivo.txt`);
//     const data = await fs.promises.readFile(filePath, 'utf-8');
//     console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// const fetchAppi = require('./utils/api');
// fetchAppi()

// readFile()

const fetchAppi = require('./utils/api.js');
fetchAppi('https://rickandmortyapi.com/api/character')