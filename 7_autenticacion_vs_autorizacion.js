import express  from "express";
import dotenv from "dotenv";
import {authRouter} from "./routes/8_auth.js"
//? por defecto el path busca a .env y no es necesario pasarle un nuevo path
//? al config 
dotenv.config();
console.clear();
const PORT = process.env.PORT;
const expressApp = express();

expressApp.use(express.json());
expressApp.use(express.text());
expressApp.use("/auth", authRouter);

expressApp.listen(PORT, ()=>{
    console.log("Server Opened in PORT " + PORT);
})



