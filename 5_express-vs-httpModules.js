//! Introducción

//! Creando un server en Express
//* para ello instalamos la dependencia con npm i -E express (-E para que sea la dependencia exacta)
import express from 'express';
console.clear();
const data = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      "userId": 1,
      "id": 6,
      "title": "dolorem eum magni eos aperiam quia",
      "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
      "userId": 1,
      "id": 7,
      "title": "magnam facilis autem",
      "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
      "userId": 1,
      "id": 8,
      "title": "dolorem dolore est ipsam",
      "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
      "userId": 1,
      "id": 9,
      "title": "nesciunt iure omnis dolorem tempora et accusantium",
      "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
      "userId": 1,
      "id": 10,
      "title": "optio molestias id quia eum",
      "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
      "userId": 2,
      "id": 11,
      "title": "et ea vero quia laudantium autem",
      "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
      "userId": 2,
      "id": 12,
      "title": "in quibusdam tempore odit est dolorem",
      "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    },
    {
      "userId": 2,
      "id": 13,
      "title": "dolorum ut in voluptas mollitia et saepe quo animi",
      "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    },
    {
      "userId": 2,
      "id": 14,
      "title": "voluptatem eligendi optio",
      "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
    },
    {
      "userId": 2,
      "id": 15,
      "title": "eveniet quod temporibus",
      "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
    },
    {
      "userId": 2,
      "id": 16,
      "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
      "body": "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
    },
    {
      "userId": 2,
      "id": 17,
      "title": "fugit voluptas sed molestias voluptatem provident",
      "body": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
    },
    {
      "userId": 2,
      "id": 18,
      "title": "voluptate et itaque vero tempora molestiae",
      "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
    },
    {
      "userId": 2,
      "id": 19,
      "title": "adipisci placeat illum aut reiciendis qui",
      "body": "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
    },
    {
      "userId": 2,
      "id": 20,
      "title": "doloribus ad provident suscipit at",
      "body": "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
    }
  ]

const PORT = 3000;
const serverApp = express();
//! Añadiendo endpoints
//* express nos provee los verbos comunes que ya conocemos y como parametros tenemos que agregar la ruta/endpoint y el callback que se activara al ser filtrado con esos valores, ejemplos abajo
//* de igual manera para obtener un recurso en especifico express cuenta cuenta con la sintaxis de los 2 puntos (:)

//* PARA DEFINIR UN MIDDLEWARE, SI NO PONEMOS NADA LA FUNCION SE EJECUTARA PARA TODAS LAS RUTAS, DE IGUAL MANERA SIEMPRE DEBEN IR ARRIBA DE LOS METODOS DE PETICION
serverApp.use(express.json());
serverApp.use(express.text());
serverApp.get("/users/posts", (req, res)=>{
    res.send(data)
})
serverApp.get("/users/posts/:idPost", (req, res)=>{
    let idPost = Number(req.params.idPost);
    let post = data.find((post) => post.id === idPost);
    console.log(post);
    // if(post === undefined){
    //     res.status(404).send({
    //         errorMessage : "post not found" 
    //     });
    // }
    // res.send(post)
})
serverApp.post('/users/posts', (req, res)=>{
    // req.query es para obtener los parametros del endpoint
    //? parseo del body con los middlewares de arriba
    const body = req.body
    if(typeof body === "string"){
        res.status(400).send({
            errorMessage : "bad request" 
        })
    }
    data.push(body)
    res.send("adding exiting")
})
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

serverApp.delete('/users/posts/:idPost',(req, res)=>{
    let idPost = Number(req.params.idPost);
    let post = data.filter((post) => post.id !== idPost);
    const ids = data.map((post) => post.id);
    const idMax = Math.max(...ids);
    if(idPost > idMax){
        res.status(404).send({
            errorMessage : "post not found" 
        });
    }
    res.send(post)
})
serverApp.listen(PORT, ()=> console.log(`servidor levantado en el puerto ${PORT}`));

//! Consultando la documentación
