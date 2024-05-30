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
        await mongoose.connect('mongodb+srv://jhonwoodz675:Mg6d1VR0ob0d3w5a@api.ix6qiai.mongodb.net/?retryWrites=true&w=majority&appName=API');
        console.log('Si hay conexion a la base de datos');

        app.listen(10000, () => {
            console.log('Servidor escuchando en el puerto 10000');
        });
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);
    }
};

startServer();
