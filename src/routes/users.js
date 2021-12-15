const express = require('express');
const router = express.Router();

router.get('/signin', (req, res) =>{
    res.send('ingresando a la app');
});


router.get('/singup', (req, res) =>{
    res.send('Formulario de authenticacion')
});

module.exports = router;