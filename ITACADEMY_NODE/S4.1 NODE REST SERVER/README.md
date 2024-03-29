# Entrega 4.1: Node REST Server
## inicializar proyecto
Es necesario tener instalado npm.
Para instalar dependencias:
```
npm install
```
La aplicación trabaja en el puerto **5555**.
Para iniciar el servidor:
```
npm start
```
## Endpoints
### GET /user
Devuelve el siguiente objeto JSON:
```
{
    "name": "Luis",
    "edad": 41,
    "url": "localhost/user"
}
```
### POST /upload
Permite subir imágenes JPG, PNG y GIF.
Se debe pasar la imágen vía formulario con la key/name **imgfile**.
- En caso de éxito devuelve un código 200.
- En caso de error devuelve un código 400 o 415.
- Si hay error en el server al guardar la imagen devolverá un 500.

### POST /time
Devuelve fecha y hora del server en el siguiente formato:
```
{
    "fecha": "2022-04-22",
    "hora": "08:41:18"
}
```
En los *headers* de la petición se deben incluir las keys:
- user: usuario
- pass: password

### GET /pokemon/{id}
Devuelve un pokemon de la pokeapi (https://pokeapi.co/).
Con el siguiente formato.
```
{
    "status": "OK",
    "pokemon": {
        "name": "pikachu",
        "height": 4,
        "weight": 60,
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    }
}
```

## Testeo endpoints con postman
En carpeta */postman* se puede encontrar el fichero **POSTMAN.json** que contiene la colección de peticiones para probar la API. En la subcarpeta *S4.1* están las imágenes/archivos utilizados.