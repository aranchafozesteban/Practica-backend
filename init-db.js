const readline = require('readline');

const connection = require('./lib/connectMongoose');

const Anuncio = require('./models/anuncio');

const Lista = require('./anunciosLista');


async function main(){

    const preguntar = await ask('¿Estás 100% seguro de que quieres borrar la base de datos?')
        if (!preguntar){
            process.exit();
        }
    
    await initAnuncios();

    connection.close();
}

main().catch(err => console.log('Hubo un error', err));

async function initAnuncios(){
    const borrado = await Anuncio.deleteMany();
    console.log(`Se han borrado ${borrado.deletedCount} anuncios.`);

    // anuncios de fichero js 
    const iniciales = await Anuncio.insertMany([
        {
            "nombre": "Bicicleta",
            "venta": true,
            "precio": 230.15,
            "foto": "bici.jpg",
            "tags": [ "lifestyle", "motor"]
            },
            {
            "nombre": "iPhone 3GS",
            "venta": false,
            "precio": 50.00,
            "foto": "iphone.png",
            "tags": [ "lifestyle", "mobile"]
            },
            {
                "nombre": "Pulsera",
                "venta": false,
                "precio": 35.00,
                "foto": "iphone.png",
                "tags": ["lifestyle"]
                }
      ]);
    console.log(`Se han creado ${iniciales.length} anuncios.`);
}

function ask(texto){
    return new Promise((resolve, reject)=> {
        const interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        interface.question(texto, respuesta =>{
            interface.close();
            if (respuesta.toLowerCase() === 'si'){
                resolve(true);
                return;
            }
            resolve(false);
        })
    })
}