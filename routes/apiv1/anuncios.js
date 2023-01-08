'use strict';

const { signedCookie } = require('cookie-parser');
const express = require('express');
const router = express.Router();
var createError = require('http-errors');
const Anuncio = require('../../models/anuncio');


// GET /apiv1/anuncios --> lista con anuncios 
router.get('/', async (req, res, next)=>{
    try{
        //filtros
        const nombre = req.query.nombre;
        const venta = req.query.venta;
        const precio = req.query.precio;
        const foto = req.query.foto;
        const tags = req.query.tags;
        const filtro = {};

        //paginación 
        const skip = req.query.skip;
        const limit = req.query.limit;

        //selección de campos
        const fields = req.query.fields;

        // filtro por nombre --> /apiv1/anuncios?nombre=Bicicleta
        if (nombre){
            filtro.nombre = new RegExp('^' + req.query.nombre, "i");
        }

        // filtro por venta o compra --> /apiv1/anuncios?venta=true
        if (venta) {
            filtro.venta = venta;
        }

        // filtro por precio -->/apiv1/anuncios?venta=XX.XX
        if (precio) {
            filtro.precio = precio;
        }
        
         // filtro por foto -->/apiv1/anuncios?foto=X.png
         if (foto) {
            filtro.foto = foto;
        }

        //filtro por tag --> /apiv1/anuncios?tag=motor
        if (tags){
            filtro.tags = tags;
        }

        const anuncios = await Anuncio.lista(filtro,skip, limit,fields);
        res.json({anuncios: anuncios });
    }catch(err){
        next(err);
    }
});

// GET /apiv1/anuncios --> lista con anuncios 
router.get('/tags', async (req, res, next)=>{
    try{
        //filtros
        const tags = req.query.tags;
        listaTags ={}

        // filtro por nombre --> /apiv1/anuncios?nombre=Bicicleta
        if (tags){
            filtro.tags = tags
        }


        const anuncios = await Anuncio.lista(tags);
        res.json({anuncios: listaTags });
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