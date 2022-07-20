import { Router } from "express";
import { USERS_BBDD } from "../usersBBDD.js";
import { authByEmailPwd } from "../helpers/authByEmailPwd.js";
export const authRouter = Router();

//? EndPoint publico (no autenticado ni autorizado)
authRouter.get("/public", (req, res) => res.send("pasa compañero"));

//? EndPoint autenticado para todo usuario registrado
authRouter.post("/autenticado", (req, res) => {
  const { email, password } = req.body;
  //* si el email o password no son enviados
  if (!email || !password) return res.sendStatus(400); //* Bad Request - Error del cliente
  try {
    const user = authByEmailPwd(email, password);
    //* si el usuario pasa todas las pruebas anteriores sera autenticado
    return res.send({
      status: 200,
      message: `Usuario ${user.name} auteticado con exito`,
    });
  } catch (error) {
    return res.sendStatus(401); //? 401 (No autorizacion)
  }
});
//? EndPoint autorizado para administradores
authRouter.post("/autorizado", (req, res) => {
  const { email, password } = req.body;

  //* si el email o password no son enviados
  if (!email || !password) return send(400); //* Bad Request - Error del cliente

  try {
    const user = authByEmailPwd(email, password);

    //* si el usuario exites pero no escribe igual la contraseña
    if (user.role !== "admin") return res.sendStatus(403);

    //* si el usuario pasa todas las pruebas anteriores sera autenticado
    return res.send({
      status: 200,
      message: `Usuario ${user.name} autorizado con exito`,
    });
  } catch (error) {
    return res.sendStatus(401); //? 401 (No autorizacion)
  }
});
