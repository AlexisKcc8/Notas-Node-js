// window en node es surtituido por el objeto global

// console.log(window); // error  window es undefined en node
// console.log(global);


// procces nos devuelve un objeto con la informacion de proceso, de igual menra posee metodos de ayuda
// console.log(process);
// console.log(process.env);

//----------------------------------  GLOBAL DE COMMON JS ----------------------------------
// Node por defecto trae el sistema de modulos common js
// console.log(__filename);
// console.log(__dirname);
global.miValor = "Kley";
const {suma} = require("./modules/suma");
// console.log(suma(10,30));
// nota: para nombrar variables globales y utilizarlas en otros archivos o modulos en necesario declararlos con global
