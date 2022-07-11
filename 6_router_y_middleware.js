import express  from "express";
import dotenv from "dotenv";
import postRouter from "./routes/post.js";

//? por defecto el path busca a .env y no es necesario pasarle un nuevo path
//? al config 
dotenv.config();
console.clear();
const PORT= process.env.PORT;
const expressApp = express();

expressApp.use(express.json());
expressApp.use(express.text());
expressApp.use("/posts", postRouter);


expressApp.listen(PORT,()=>{
    console.info(`Server Opended in port ${PORT}`)
})