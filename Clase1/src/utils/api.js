const fetchAppi = async(url) => { //funcion asincrona dentro de una variable -> se genera una esperac para ver si salio exitoso o un error en el proceso
    try {
        const res = await fetch(url); //fetch manipula la url a enviar y lee la entrada y respuesta
        const data = await res.json(); //valida que ese res esta guardando un json y utilizamos la funcion de js .json()
        console.log(data.results[1].id); //se le asigna a data solo el json de res
        console.log(res); //totalidad de la info que se trae con res
        }
         catch (error) {
        console.log("Esto es un error controlado: " + error);
    }
}
module.exports = fetchAppi; //Exporta dentro de mi proyecto
