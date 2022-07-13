
import {USERS_BBDD} from "../usersBBDD.js"
export const authByEmailPwd = (email, password) => {
 //* buscar al usuario
 const user = USERS_BBDD.find(user => user.email === email);

 //* si el usuario no exite - usuario no autenticado
 if (!user) throw new Error(); //* (No autorizacion - autenticado)
 
 //* si el usuario exites pero no escribe igual la contraseña
 if(user.password !== password) throw new Error();

 return user;
}
