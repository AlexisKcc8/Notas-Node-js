// un sistema de modulos es un conjunto de utilidades que nos permite comunicar diferentes partes del codigo
// un módulo no es mas que una parte del codigo que puede ser por otros módulos

// --------------------- SISTEMAS DE MODULOS ---------------------

// ******************* COMMON JS (CJS) *******************
//  SISTEMA POR DEFECTO UTILIZADO POR  NODE
// const {suma, resta, multiplicacion} = require("./modules/operaciones");
    // para los modulos json no es necesario exportarlos con module.exports
// const {users} = require("./modules/users.json");
// cuando se trata de librerias externas o propias de node basta con poner el nombre de la libreria y node leera el index de dica libreria

// principalmente lo que se puede importar con require son:
// - modulos core de node
// - archivos o carpetas que tengan un index
// - librerias externas
// const {sign} = require("jsonwebtoken");

// console.log("suma:" +suma(5,10));
// console.log("resta" + resta(5,10));
// console.log("multiplicacion " + multiplicacion(5,10));
// console.log(users);

// NOTA: PARA ELEGIR EL SISTEMA DE MODULOS TENEMOS QUE IR AL PACKAGE.JSON Y ESPECIFICAR LA PROPIEDAD TYPE = "MODULE" PARA USAR ESM, POR DEFECTO ESTA COMO "COMMONJS"

// NOTA: PARA ESPECIFICAR QUE UN ARCHIVO USE UN  SISTEMA DE MODULO ESPECIFICO DEBEMOS DE HACER LO SIGUIENTE
// NOMBREARCHIVO.CJS (PARA COMMONJS)
// NOMBREARCHIVO.MJS (PARA ECMAScript Modules)


// ******************* ECMAScript Modules (ESM) *******************
// SISTEMA OFICIAL DE JAVASCRIPT PARA LA GESTION DE MODULOS
// NOTA : LOS EXPORTS E IMPORTS SON LO MISMO QUE USAMOS EN JS 
import {suma, resta, multiplicacion} from "./modules/operaciones.js"
console.log("suma:" +suma(5,10));
console.log("resta" + resta(5,10));
console.log("multiplicacion " + multiplicacion(5,10));