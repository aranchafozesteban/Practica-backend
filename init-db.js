const readline = require('readline');

const connection = require('./lib/connectMongoose');

const Anuncio = require('./models/anuncio');

const Lista = require('./anunciosLista.json');


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
    const iniciales = await Anuncio.insertMany(Lista);
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
