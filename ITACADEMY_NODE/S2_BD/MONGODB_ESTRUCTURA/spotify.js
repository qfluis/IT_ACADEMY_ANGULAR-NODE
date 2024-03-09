//db = db.getSiblingDB('spotify');
db.usuario.drop();
db.usuario.insertMany([
    {
        _id: ObjectId("458525ff55ff55f48ddddd00"),
        tipo: "premium", /* free / premium */
        email: "loquesea@email.com",
        password: "jdkjdhe7e78d667w",
        username: "lokito777",
        fechaNacimiento: new Date("1981-03-25"),
        genero: "hombre", /* hombre / mujer */
        pais: "España",
        cp: "08999",
        suscripciones: [
            {
                fechaInicio: "2022-03-01",
                fechaRenovacion: "2022-06-01",
                formaPago: "tarjeta", /* tarjeta / paypal */
                pagos: [
                    {
                        numeroOrden: "20220301-12334",
                        fecha: new Date(2022-03-01),
                        total: 12.05
                    }
                ]
            }
        ],
        tarjetas: [
            {
                numero: "444444444",
                mes: "02",
                anyo: "25",
                codigo: "CVV"
            }
        ],
        paypal: [
            {
                nombreUsuario: "holiwi"
            }
        ],
        playlists:[
            {
                _id: ObjectId("458525ff55ff55f48ddddd01"),
                titulo: "Mi playlist",
                numCanciones: 1,
                fechaCreacion: new Date("2022-03-22"),
                fechaEliminacion: new Date("2022-03-23"),
                estado: "activa", /* activa / eliminada */
                tipo: "compartida", /* compartida / privada */
                canciones: {
                    nombreUsuario: "Manuuuu",
                    idUsuario: ObjectId("458525ff55ff55f48ddddd02"),
                    fechaInclusion: new Date("2022-03-24"),
                    tituloCancion: "Asereje",
                    idCancion: ObjectId("458525ff55ff55f48ddddd03")                    
                }
            }
        ],
        artistasSeguidos: [
            {
                nombre: "Las ketchup",
                idArtista: ObjectId("458525ff55ff55f48ddddd05")
            }
        ],
        albumsFavoritos: [
            {
                titulo: "Ja Deje",
                idAlbum: ObjectId("458525ff55ff55f48ddddd04")
            }
        ],
        cancionesFavoritas: [
            {
                titulo: "Asereje",
                idCancion: ObjectId("458525ff55ff55f48ddddd03")
            }
        ]

    }
]);

db.artista.drop();
db.artista.insertMany([
    {
        _id: ObjectId("458525ff55ff55f48ddddd05"),
        nombre: "Las ketchup",
        imagen: "lasketchup.jpg",
        albums: [
            {
                _id: ObjectId("458525ff55ff55f48ddddd04"),
                titulo: "Ja Deje",
                anyo: "2000",
                imagen: "ketchup.jpg",
                canciones:[
                    {
                        _id: ObjectId("458525ff55ff55f48ddddd03"),
                        titulo: "Asereje",
                        duracion: 7255,
                        reproducciones: 5555555,

                    }
                ]
            }
        ],
        artistasRelacionados: [
            {
                nombre: "Metallica",
                idArtista: ObjectId("458525ff55ff55f48ddddd06")
            }
        ]
    }
    
]);