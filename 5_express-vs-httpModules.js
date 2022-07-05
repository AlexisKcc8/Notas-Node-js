//! Introducción

//! Creando un server en Express
//* para ello instalamos la dependencia con npm i -E express (-E para que sea la dependencia exacta)
import express from 'express';
console.clear();
const PORT = 3000;
const serverApp = express();
//! Añadiendo endpoints
//* express nos provee los verbos comunes que ya conocemos y como parametros tenemos que agregar la ruta/endpoint y el callback que se activara al ser filtrado con esos valores, ejemplos abajo
//* de igual manera para obtener un recurso en especifico express cuenta cuenta con la sintaxis de los 2 puntos (:)

//* PARA DEFINIR UN MIDDLEWARE, SI NO PONEMOS NADA LA FUNCION SE EJECUTARA PARA TODAS LAS RUTAS, DE IGUAL MANERA SIEMPRE DEBEN IR ARRIBA DE LOS METODOS DE PETICION
serverApp.use(express.json());
serverApp.use(express.text());
serverApp.post('/ligaMX/:idEquipo', (req, res) => {
    //? propiedad params para obtener los parametros del endpoint
    // console.log(req.params.idEquipo);
    //! Headers
    // console.log(req.headers);
    // //? o el metodo get para obtener un header en especifico
    // console.log(req.get('Content-Type'));

    //! Respondiendo las solicitudes
    //* segun el estado podemos personalizar la respuesta para el cliente
    // res.status(404).send({
    //     errorMessage : "time not found" 
    // });
    //! Parsear el body
    //* express nos da la propiedad body para obtener la informacion del body que viene de la peticion, sin embargo en necesario ejecutar un parse

    //? NOTA: UN MIDDLEWARE ES UNA FUNCION QUE SE EJECUTA PARA MULTIPLES ENDPOINTS
    console.log(req.body);
    res.send("respuesta devuelta para ligaMX")
})

serverApp.put('/ligaAscenso/:idEquipo',(req, res) => {
    console.log(req.body);
    res.send(`respuesta para ${req.path}`)
});
serverApp.listen(PORT, ()=> console.log(`servidor levantado en el puerto ${PORT}`));

//! Consultando la documentación
