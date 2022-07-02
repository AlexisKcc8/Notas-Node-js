//? clear para limpiar los resultados anteriores
console.clear();
import {createServer} from "http"
//* creamos el servidor y se lo asignamos a la constantes, el callback recibe 2 argumentos que nos la reques y el response
const serverHTTP = createServer((req, res) =>{
    //? obtenemos el metodo por la siguiente propiedad 
    // console.log(req.method);
    //? obtenemos el path/ruta por la siguiente propiedad 
    // console.log(req.url);
    //? obtenemos las cabeceras por la siguiente propiedad 
    // console.log(req.headers);

    //? el body por defecto no viene completo si no viene como una representacion abstracta del body por que no sabemos cuanto podria pesar siendo este un ejemplo.
    //? para obtener el body tenemos que ir acumulando por pedasos como un stream, para eso tenemos los eventos data y end para la req (peticion)
    let data = "";
    let chunkIndex = 0;
    req.on("data", (chunck)=>{
        data += chunck;
        chunkIndex++;
        console.log(chunkIndex);
    });
    //? y al finalizar de obtener los datos podemos retornar la respuesta la cliente 
    req.on("end", ()=>{

        //? con el metodo end podemos devolver un texto o valor  
        res.end('respuesta de vuelta');
    })
});

//? ponemos en escucha a la constante de tipo server  
serverHTTP.listen(3000);