//? cookie parser para usarlo como middleware y leer las cookies
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import authSessionRouter from "./routes/8_auth_session.js";
import authTokenRouter from "./routes/8_auth_token.js";
console.clear();
dotenv.config();

const PORT = process.env.PORT || 3000;
const expressApp = express();

//? cookie parser para usarlo como middleware y leer las cookies
expressApp.use(cookieParser());
expressApp.use(express.json());
expressApp.use(express.text());

expressApp.use("/auth-token", authTokenRouter);
expressApp.use("/auth-session", authSessionRouter);

expressApp.listen(PORT, () =>
  console.log(`Servidor levantado en el puerto ${PORT}`)
);