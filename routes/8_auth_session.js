import { Router } from "express";
import { nanoid } from "nanoid";
import {authByEmailPwd} from "../helpers/authByEmailPwd.js"
import { USERS_BBDD } from "../usersBBDD.js";

const authSessionRouter = Router();
//? ejemplo de array de sesiones
const sessions = [];
//TODO --- Login con Email y password
authSessionRouter.post("/login", (req, res)=>{
  const {email, password} = req.body;
  console.log(email, password);
  if (!email || !password) return res.sendStatus(400);

  try {
    const {id} = authByEmailPwd(email, password);
    //* generar el sessionId
    const sessionId = nanoid();
    //* guardar el id de cada usuario en el array de sesiones como un objeto
    sessions.push({sessionId, id});
    //* setear en una cookie
    res.cookie("sessionId", sessionId, {
      //* httpOnly lo que hace es que cuando la cookie se setee en el navegador no podamos leerla desde js (cliente)
      httpOnly:true,
      //* secure nos permite decirle al nevagdor que la cookie solo se enviara cuando se haga un solicitud por HTTPS
      // secure:true,
    })
    return res.send();
  } catch (error) {
    return res.sendStatus(401);
  }
})
//TODO --- Solicitud autenticada con sesion para obtener el perfil del usuario
authSessionRouter.get('/profile', function (req, res) {
  //? express necesita un middleware para leer las cookies, entonces instalamos cookie-parser (npm i cookie-parse)
  const {cookies} = req;
  console.log(cookies);
  if (!cookies.sessionId) return res.sendStatus(401);

  const userSession = sessions.find((session) => session.sessionId === cookies.sessionId);
  console.log(userSession);
  if (!userSession) return res.sendStatus(401);
  
  const user = USERS_BBDD.find((user)=>user.id === userSession.id);
  if (!user) return res.sendStatus(401);

  delete user.password;
  return res.send(user);
})
export default authSessionRouter;
