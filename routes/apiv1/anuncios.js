'use strict';

const express = require('express');
const router = express.Router();
const Anuncio = require('../../models/anuncio');


// GET apiv1/anuncios
router.get('/', (req, res, next)=>{
    res.json({});
});

module.exports = router