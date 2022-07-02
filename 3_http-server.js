//! ---------------------- MODELO OSI ----------------------   
//? Estandar de iterconexion de sistemas  
//! ---------------------- PROTOCOLO HTTP ----------------------  
//? Protocolo de la capa de transporte del modelo osi que nos permitira comunicarnos con los clientes
//? Basado en peticion/respuesta. El cliente pide primero y nosotros respondemos
//? Nosotros (servidor) tambien podemos realizar peticiones como si fueramos clientes a otros servidores

//! ---------------------- HTTP EN NODE ----------------------  
//? Node nos provee de herramientas para comunicarnso con el so, red...
//? Nativo de Node -> http
//? Tercesor -> Express, fastify, hapi, koa...
//* instalamos nodemon para dar seguimeinto. mas info en el archivo notas.txt

//? clear para limpiar los resultados anteriores
console.clear();
import {createServer} from "http"
//* creamos el servidor y se lo asignamos a la constantes, el callback recibe 2 argumentos que nos la reques y el response
const serverHTTP = createServer((req, res) =>{
    console.log("peticion recibida");
    //? con el metodo end podemos devolver un texto o valor  
    res.end('respuesta de vuelta');
});

//? ponemos en escucha a la constante de tipo server  
serverHTTP.listen(3000);


