/*
https://www.tutorialesprogramacionya.com/mongodbya/detalleconcepto.php?punto=26&codigo=26&inicio=20
https://www.mongodb.com/docs/manual/
*/

//db = db.getSiblingDB('optica');
db.proveedores.drop();
db.proveedores.insertMany([
    {
        _id: ObjectId("458525ff55ff55f48aaaaa00"),
        nombre: "Luisete Quevedete SL",
        direccion: {
            calle: "micalle",
            numero_piso: 4,
            puerta: 1,
            ciudad: "Santako",
            cp: "08922",
            pais: "Españita"
        },
        telefono: "655888999",
        fax: "155558556",
        nif: "45555888Y",
        marcas: [
            {
                _id: ObjectId("458525ff55ff55f48aaaaa01"),
                nombre:"Palomino",
                gafas: [
                    {
                        _id: ObjectId("458525ff55ff55f48aaaaa02"),
                        nombre_modelo:"Fashion 234",
                        graduacion_d_max: 15.0,
                        graduacion_i_max: 15.0,
                        tipo_montura:"flotante",  /*flotante - pasta - metalica*/
                        color_montura: "rojo fuego",
                        color_vidrios: "transparente",
                        precio: 180.50,                
                    },
                    {
                        _id: ObjectId("458525ff55ff55f48aaaaa09"),
                        nombre_modelo:"Fashion 444",
                        graduacion_d_max: 15.0,
                        graduacion_i_max: 15.0,
                        tipo_montura:"metalica",  /*flotante - pasta - metalica*/
                        color_montura: "azul marino",
                        color_vidrios: "cromados",
                        precio: 250.50,                
                    }
                ]
            }
        ]
    },
    {
        _id: ObjectId("458525ff55ff55f48aaaaa06"),
        nombre: "GAFOTASA",
        direccion: {
            calle: "callleeee",
            numero_piso: 2,
            puerta: 2,
            ciudad: "Badalona",
            cp: "08822",
            pais: "Españita"
        },
        telefono: "777888999",
        fax: "155998556",
        nif: "45225888Y",
        marcas: [{
            _id: ObjectId("458525ff55ff55f48aaaaa07"),
            nombre:"Haramami",
            gafas: [{
                _id: ObjectId("458525ff55ff55f48aaaaa08"),
                nombre_modelo:"Q-TR3R",
                graduacion_d_max: 14.0,
                graduacion_i_max: 14.0,
                tipo_montura:"pasta",  /*flotante - pasta - metalica*/
                color_montura: "verde oliva",
                color_vidrios: "mate",
                precio: 580.50,                
            }]
        }]
    }






]);

db.clientes.drop();
db.clientes.insertMany([
    {
        _id: ObjectId("458525ff55ff55f48aaaaa03"), 
        nombre: "Luis Q",
        direccion: {
            calle: "micalle",
            numero_piso: 4,
            puerta: 1,
            ciudad: "Santako",
            cp: "08922",
            pais: "Españita"
        },
        telefono:"156852556",
        email: "holiwi@kiwi.com",
        fecha_reg: new Date("2022-03-25"),
    },
    {
        _id: ObjectId("458525ff55ff55f48aaaaa04"),
        nombre: "Peter",
        direccion: {
            calle: "micalle2",
            numero_piso: 4,
            puerta: 1,
            ciudad: "Badalona",
            cp: "08942",
            pais: "Españita"
        },
        telefono:"153762556",
        email: "holiwi2@kiwi.com",
        fecha_reg: new Date("2022-03-28"),
        cliente_recomendador: "Luis Q",
        id_cliente_recomendador: ObjectId("458525ff55ff55f48aaaaa03") 
    }
]);

db.empleados.drop();
db.empleados.insertMany([
    {
        _id: ObjectId("458525ff55ff55f48aaaaa05"),
        nombre: "Vendedor Dedor",
        ventas: [
            {
                fecha_venta: new Date("2022-04-01"),
                nombre_modelo:"Fashion 234",
                nombre_cliente: "Luis Q",
                id_gafas_vendidas: ObjectId("458525ff55ff55f48aaaaa02"), /* Por si necesitamos más info */
                graduacion_d: 5.0,
                graduacion_i: 4.0,
                id_cliente: ObjectId("458525ff55ff55f48aaaaa03")
            },
            {
                fecha_venta: new Date("2022-04-02"),
                nombre_modelo:"Q-TR3R",
                nombre_cliente: "Peter",
                id_gafas_vendidas: ObjectId("458525ff55ff55f48aaaaa08"), /* Por si necesitamos más info */
                graduacion_d: 3.0,
                graduacion_i: 4.25,
                id_cliente: ObjectId("458525ff55ff55f48aaaaa04")
            }

        ]
    }
])


