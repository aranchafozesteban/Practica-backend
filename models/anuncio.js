'use strict';

const mongoose =require('mongoose');

var anuncioSchema = mongoose.Schema({
    nombre: {type: String, index:true},
    venta: {type: Boolean,index: true},
    precio: {type: Number, index: true},
    foto: String,
    tags: [String]
});

anuncioSchema.statics.lista = function(filtro, skip, limit, fields){
    const query =Anuncio.find(filtro);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    return query.exec()
}

var Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;