import express from 'express';
import {USERS_BBDD} from "../bbdd.js"
const postRouter = express.Router();
//! next, es una funcion callback y es la que se ejecuta dependiendo del endpoitn de donde se haya hecho la request
postRouter.use((req, res, next)=>{
    console.log(req.ip);
    next();
});
//? 1.- Obtener detalles de todos los posts
postRouter.get('/', (req ,res)=>{
    res.send(USERS_BBDD)
}) 
//? 2.- Obtener detalles de una cuenta 
postRouter.get('/:id', (req ,res)=>{
    const {id} = req.params;
    const postsFind = USERS_BBDD.find((posts) => posts.id === Number(id));
    if (!postsFind) {
        return res.status(404).send({
            status: '404 Not Found'
        });
    }

    res.send({
        message: `found post with id ${id}`,
        body: postsFind
    })
}) 
//? 3.- Crear una nueva cuenta  
postRouter.post('/', (req ,res)=>{
    const {id, title} = req.body;

    if (!id || !title) {
        return res.status(404).send({
            errorMessage:`data required not found`
        })
    }
    const foundPost = USERS_BBDD.find((post) => post.id === Number(id));
    if (foundPost) {
        return res.status(409).send({
            errorMessage: `the posts with id : ${id} is already`
        })
    }

    USERS_BBDD.push({
        id,
        title
    });

    res.send({
        message:`post added with successfully!!`
    })
}) 
//? 4.- Actualizar una cuenta  
postRouter.patch('/:id', (req ,res)=>{
    const {id} = req.params;
    const {title} = req.body;

    if (!title) {
        return res.status(400).send()
    }
    const post = USERS_BBDD.find((post) => post.id === Number(id));
    if(!post){
        return res.status(404).send({
            errorMessage : `post with id = ${req.params.id} not found` 
        });
    }
    post.title = title;
    return res.send({
        response: `posts ${id} updating exiting`
    })
}) 
//? 5.- Eliminar una cuenta
postRouter.delete('/:id', (req ,res)=>{
    const {id} = req.params;
    const userIndex = USERS_BBDD.findIndex((user) => user.id === Number(id));
    if(userIndex === -1){
        res.status(404).send({
            errorMessage : `user with id = ${req.params.id} not found` 
        });
    }
    USERS_BBDD.splice(userIndex, 1);
    res.send({
        response: `posts removing exiting`
    })
}) 

export default postRouter;