'use strict';

const { signedCookie } = require('cookie-parser');
const express = require('express');
const router = express.Router();
var createError = require('http-errors');
const Anuncio = require('../../models/anuncio');


// GET /apiv1/anuncios --> lista con anuncios sin filtros
router.get('/', async (req, res, next)=>{
    try{
        const anuncios = await Anuncio.lista();
        res.json({anuncios: anuncios });
    }catch(err){
        next(err);
    }
});

router.get('/parametro_opcional/:color?', (req, res, next) => {
    const color = req.params.color;
    res.send(`He recibido el parámetro ${color}`);
  });


// GET /apiv1/anuncios --> lista con anuncios con filtros
router.get('/', async (req, res, next)=>{
    try{
        //filtros
        const nombre = req.query.nombre;
        const venta = req.query.venta;
        const precio = req.query.precio;
        const filtro = {};

        //paginación 
        const skip = req.query.skip;
        const limit = req.query.limit;

        //selección de campos
        const fields = req.query.fields;

        // filtro por nombre --> /apiv1/anuncios?nombre=Bicicleta
        if (nombre){
            filtro.nombre = nombre;
        }

        // filtro por venta o compra --> /apiv1/anuncios?venta=true
        if (venta) {
            filtro.venta = venta;
        }

        // filtro por precio -->
        if (precio) {
            filtro.precio = precio;
        }
        

        //filtro por tag -->

        //filters.nombre = new RegExp('^' + req.query.nombre, "i");
        
        const anuncios = await Anuncio.lista(filtro,skip, limit);
        res.json({results: anuncios });
    }catch(err){
        next(err);
    }
});

// Crear anuncio
router.post('/', async (req, res, next) => {
    try {
  
      const anuncioDatos = req.body;
  
      
      const add = new Anuncio(anuncioDatos);
  
      
      const anuncioGuardado = await add.save();
  
      res.json({ nuevoAnuncio: anuncioGuardado });
  
    } catch (err) {
      next(err);
    }
  });


module.exports = router