# Nodepop

Deploy:

```sh 
npm install
```

Load initial data to database:
```sh 
npm run init-db
```

Start the application in development with:

```sh
npm run dev
```

## API Documentation

List of ads without filters:

GET /apiv1/anuncios

{
    "anuncios":[
        {
            "_id":"63ba4e85dc7e1f35142b3311","nombre":"Bicicleta",
            "venta":true,
            "precio":230.15,
            "foto":"bici.jpg",
            "tags":["lifestyle","motor"],
            }