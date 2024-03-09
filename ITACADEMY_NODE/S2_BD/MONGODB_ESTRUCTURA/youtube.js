//db = db.getSiblingDB('youtube');
db.usuario.drop();
db.usuario.insertMany([
    {
        _id: ObjectId("458525ff55ff55f48ccccc00"),
        email: "luisete@gmail.com",
        password: "8893uuiuidkkjg333",
        userName: "luise-t",
        fechaNacimiento: new Date("1981-03-25"),
        genero: "hombre",
        pais: "España",
        cp: "08999",
        videos: [
            {
                _id: ObjectId("458525ff55ff55f48ccccc01"),
                titulo: "Mi primer gameplayer",
                descripcion: "Épico-leyendioso gameplais",
                tamaño: 12345234,
                nombreArchivo: "gameplayer.mp4",
                duracion: 6260,
                thumbnail: "gameplayer.jpg",
                reproducciones: 40,
                likes: 2,
                dislikes: 20,
                estado: "publico", /* publico / oculto / privado */
                etiquetas: [
                    {
                        nombre: "gameplayer",
                        idEtiqueta: ObjectId("458525ff55ff55f48ccccc02")
                    }
                ],
                fechaPublicacion: new Date("2021-04-14 23:17"),
                comentarios: [
                    {
                        _id: ObjectId("458525ff55ff55f48ccccc07"),
                        texto: "Me parece guapo el gameplayer que has hecho",
                        fechaHora: new Date("2021-04-13 23:54"),
                        usuario: "spelunky",
                        idUsuario: ObjectId("458525ff55ff55f48ccccc08"),
                        likesDislikes: [
                            {
                                usuario: "Willy",
                                idUsuario: ObjectId("458525ff55ff55f48ccccc09"),
                                fechaHora: new Date("2022-04-13 22:54")
                            }
                        ]
                    }
                ]
            }
        ],
        canal: { /* un canal por usuario */
                _id: ObjectId("458525ff55ff55f48ccccc03"),
                nombre: "ElCanalDeLaManchaGameplays",
                descripcion: "Epico canal de gambaplays",
                fechaCreacion: new Date("2021-01-01")
        },
        suscripciones: [
            {
                nombre:"CanalBle",
                idCanal: ObjectId("458525ff55ff55f48ccccc04")
            }
        ],
        likesDislikes: [
            {
                tipo: "like", /* like / dislike */
                titulo: "tutorial manicura",
                idVideo: ObjectId("458525ff55ff55f48ccccc04"),
                fecha: new Date("2022-04-14 23:28")
            }
        ],
        playlists: [
            {
                _id: ObjectId("458525ff55ff55f48ccccc06"),
                nombre: "Mi playlist",
                fechaCreacion: new Date("2022-04-14 23:01"),
                estado: "publica", /* publica / privada */
                videos: [
                    {
                        titulo: "Vlog ble ble ble",
                        idVideo: ObjectId("458525ff55ff55f48ccccc05")
                    }                    
                ]
            }
        ]
    }
]);

db.etiquetas.drop();
db.etiquetas.insertMany([
    {
        _id: ObjectId("458525ff55ff55f48ccccc02"),
        nombre: "gameplayer"
    }
]);

