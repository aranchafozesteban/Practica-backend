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

---
## API Documentation

List of ads without filters:

```sh
GET /apiv1/anuncios
```

{"anuncios":[{"_id":"63ba5510d9264b0bb528fd24","nombre":"Bicicleta","venta":true,"precio":230.15,"foto":"bici.jpg","tags":["lifestyle","motor"],"__v":0},{"_id":"63ba5510d9264b0bb528fd25","nombre":"iPhone 3GS","venta":false,"precio":50,"foto":"iphone.png","tags":["lifestyle","mobile"],"__v":0},{"_id":"63ba5510d9264b0bb528fd26","nombre":"Pulsera","venta":false,"precio":35,"foto":"pulsera.png","tags":["lifestyle"],"__v":0},{"_id":"63ba5510d9264b0bb528fd27","nombre":"Mini","venta":true,"precio":29300,"foto":"mini.png","tags":["motor"],"__v":0},{"_id":"63ba5510d9264b0bb528fd28","nombre":"Toyota","venta":false,"precio":25413,"foto":"toyota.png","tags":["motor"],"__v":0}]}

------------------------
List of adds that its name starts with:
```sh
GET /apiv1/anuncios?nombre=Bi
```
{
    "anuncios":[
        {
            "_id":"63ba4e85dc7e1f35142b3311","nombre":"Bicicleta",
            "venta":true,
            "precio":230.15,
            "foto":"bicicleta.png",
            "tags":["lifestyle","motor"],
            }

---
Lista of adds that its price is:
```sh
GET /apiv1/anuncios?precio=230.15
```

{
    "anuncios":[
        {
            "_id":"63ba4e85dc7e1f35142b3311","nombre":"Bicicleta",
            "venta":true,
            "precio":230.15,
            "foto":"bicicleta.png",
            "tags":["lifestyle","motor"],
            }

------
List of products that are on sale:
```sh
GET /apiv1/anuncios?venta=true
```
{
    "anuncios":[
        {
            "_id":"63ba4e85dc7e1f35142b3311","nombre":"Bicicleta",
            "venta":true,
            "precio":230.15,
            "foto":"bicicleta.png",
            "tags":["lifestyle","motor"],
            },
            {"_id":"63ba5510d9264b0bb528fd27","nombre":"Mini","venta":true,"precio":29300,"foto":"mini.png","tags":["motor"],"__v":0}]}

---
List of adds that have that photo:
```sh
GET /apiv1/anuncios?foto=iphone.png
```
{"anuncios":[{"_id":"63ba5510d9264b0bb528fd25","nombre":"iPhone 3GS","venta":false,"precio":50,"foto":"iphone.png","tags":["lifestyle","mobile"],"__v":0}]}

---
List of adds that have those tags:
```sh
GET /apiv1/anuncios?tags=motor
```
{"anuncios":[{"_id":"63ba5510d9264b0bb528fd24","nombre":"Bicicleta","venta":true,"precio":230.15,"foto":"bici.jpg","tags":["lifestyle","motor"],"__v":0},{"_id":"63ba5510d9264b0bb528fd27","nombre":"Mini","venta":true,"precio":29300,"foto":"mini.png","tags":["motor"],"__v":0},{"_id":"63ba5510d9264b0bb528fd28","nombre":"Toyota","venta":false,"precio":25413,"foto":"toyota.png","tags":["motor"],"__v":0}]}

---


List with pagination and limited number of ads:
```sh
GET /apiv1/anuncios?skip=1&limit=3
```

{
    "anuncios":[
        {
            "_id":"63ba5510d9264b0bb528fd25",
            "nombre":"iPhone 3GS",
            "venta":false,
            "precio":50,
            "foto":"iphone.png",
            "tags":["lifestyle","mobile"],"__v":0
            },
            {"_id":"63ba5510d9264b0bb528fd26","nombre":"Pulsera","venta":false,"precio":35,"foto":"pulsera.png","tags":["lifestyle"],"__v":0},{"_id":"63ba5510d9264b0bb528fd27","nombre":"Mini","venta":true,"precio":29300,"foto":"mini.png","tags":["motor"],"__v":0}]}

List with tags:
```sh
GET /apiv1/anuncios?fields=tags
```
{"anuncios":[{"_id":"63ba5510d9264b0bb528fd24","tags":["lifestyle","motor"]},{"_id":"63ba5510d9264b0bb528fd25","tags":["lifestyle","mobile"]},{"_id":"63ba5510d9264b0bb528fd26","tags":["lifestyle"]},{"_id":"63ba5510d9264b0bb528fd27","tags":["motor"]},{"_id":"63ba5510d9264b0bb528fd28","tags":["motor"]}]}


---
Crear un anuncio:
```sh
POST /apiv1/anuncios
```

---
Visualizar foto de un anuncio:
```sh
GET /images/iphone.png
```
