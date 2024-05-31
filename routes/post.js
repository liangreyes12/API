const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Ruta para obtener todas las publicaciones
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las publicaciones', error: error.toString() });
    }
});

// Maneja una solicitud POST a /servicios
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al guardar la publicación', error: error.toString() });
    }
});

// Maneja una solicitud GET a /servicios/:postId
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la publicación', error: error.toString() });
    }
});

// Maneja una solicitud DELETE a /servicios/:postId
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({ _id: req.params.postId });
        res.json(removedPost);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la publicación', error: error.toString() });
    }
});

// Maneja una solicitud PATCH a /servicios/:postId
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        );
        res.json(updatePost);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la publicación', error: error.toString() });
    }
});

module.exports = router;
