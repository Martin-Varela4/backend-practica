// app.get('/', (req, res) => {
//     console.log('Home', req.url)
//   res.send(req.url);
// });



// ?categoria=perfumes&precio=2000
// app.get('/productos', (req, res) => {

//     const categoria= req.query.categoria;
//     const precio= req.query.precio;

    
    
//     console.log(`cat ${categoria}, precio ${precio}`);


//     res.json([{id: 1, nombre: "Dior", active: true}])

// });







// TAREA: endpoint por cada metodo:


// const usuarios = [
//     {id: 1, nombre: "Juan"},
//     {id: 2, nombre: "Pablo"},
//     {id: 3, nombre: "Claudio"}
// ]



// app.get("/usuarios", (req, res) => {


//     res.json(usuarios)
// })


// post con body para crear nuevo usuario
// app.post("/registrar", (req, res) => {


//     const nuevoUsuario = {
//         id: usuarios.length + 1,
//         nombre: req.body.nombre
//     };

//     usuarios.push(nuevoUsuario);


//     res.json({msj : "Usuario registrado", usuario: nuevoUsuario});
// });




// delete para borrar id
// app.delete("/usuarios/:id", (req, res) => {

//     const id = Number(req.params.id);

//     const index = usuarios.findIndex( usuario => usuario.id === id);

//     if(index === -1) {

//         return res.status(404).json({msj: "usuario no encontrado"});
//     }

//     usuarios.splice(index, 1);

//     res.json({msj: "Usuario eliminado"});

    
// })




// patch para actualizar nombre especfico de usuario
// app.patch("/usuarios/:id", (req, res) => {

    // const id = Number(req.params.id);
    // const index = usuarios.findIndex( usuario => usuario.id === id);

    // if(index === -1) {

    //     return res.status(404).json({msj: "usuario no encontrado"});

    // }

    // usuarios[index].nombre = req.body.nombre;

    // res.json({msj: "usuario actualizado", usuario: usuarios[index]});

    // })





// postman e insommnia

// creacion de modulo: pruebas hechas >


// CRUD: Create, Read, Update, Delete


const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());

let usuarios = [
    {id: 1, nombre: "Juan", email: "juanelcapo@gmail.com"},
    {id: 2, nombre: "Pablo", email: "pablolindo@gmail.com"},
    {id: 3, nombre: "Claudio", email: "claudioMalo@gmail.com"}
];


app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

app.post("/crear-usuario", (req, res) => {
    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre: req.body.nombre,
        email: req.body.email
    };

    if(!nuevoUsuario.nombre || !nuevoUsuario.email) {
        return res.status(400).json({msj: "Error: completar todos los campos"});
    }

    usuarios.push(nuevoUsuario);
    res.json({msj : "Usuario registrado con exito", usuario: nuevoUsuario});
});











app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});