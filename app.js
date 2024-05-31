const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const postRoute = require('./routes/post');
app.use('/servicios', postRoute);

app.get('/', (req, res) => {
    res.send('Prueba 1 Respuesta Del Servidor');
});

const startServer = async () => {
    try {
        await mongoose.connect('mongodb+srv://jhonwoodz675:LucySnow4321@cluster0.hv6zwvw.mongodb.net/myDB?retryWrites=true&w=majority');
        console.log('Si hay conexión a la base de datos');

        app.listen(3001, () => {
            console.log('Servidor escuchando en el puerto 3001');
        });
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);
    }
};

startServer();
