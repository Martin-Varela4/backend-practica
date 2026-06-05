const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());

let usuarios = [
    {id: 1, nombre: "Juan", email: "juanelcapo@gmail.com"},
    {id: 2, nombre: "Pablo", email: "pablolindo@gmail.com"},
    {id: 3, nombre: "Claudio", email: "claudioMalo@gmail.com"}
];


//CRUD
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


// READ
app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

app.get("/usuarios/:id", (req, res) => {

    


})















app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});