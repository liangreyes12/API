const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Ruta para registrar usuarios
router.post('/register', async (req, res) => {
    const { nombre, apellido, email, contrasena } = req.body;

    // Verificar si el usuario ya existe por correo electrónico
    const emailExist = await User.findOne({ email: email });
    if (emailExist) {
        return res.status(400).send('El correo ya está registrado');
    }

    // Encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(contrasena, salt);

    // Crear un nuevo usuario
    const user = new User({
        nombre: nombre,
        apellido: apellido,
        email: email,
        contrasena: hashedPassword
    });

    try {
        const savedUser = await user.save();
        res.status(200).json({ message: 'Usuario registrado exitosamente', redirect: '../HTML/Login.php' });
    } catch (err) {
        res.status(400).send(err);
    }
});

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
    const { email, contrasena } = req.body;

    try {
        // Verificar si el usuario existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Correo electrónico o contraseña incorrectos' });
        }

        // Verificar la contraseña
        const validPass = await bcrypt.compare(contrasena, user.contrasena);
        if (!validPass) {
            return res.status(400).json({ message: 'Correo electrónico o contraseña incorrectos' });
        }

        // Si las credenciales son válidas, redirigir a Base.php
        res.status(200).json({ message: 'Inicio de sesión exitoso', redirect: '../HTML/Base.php' });

    } catch (err) {
        console.error('Error al iniciar sesión:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});


module.exports = router;