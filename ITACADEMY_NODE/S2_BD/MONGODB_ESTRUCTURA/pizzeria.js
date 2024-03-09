//db = db.getSiblingDB('pizzeria');
db.clientes.drop();
db.clientes.insertMany([
    {
        _id: ObjectId("458525ff55ff55f48bbbbb00"),
        nombre: "Luis",
        apellidos: "Kebe Efe",
        direccion: "c/ bleblebe, 5, 1º 3ª",
        cp: "08999",
        localidad: "Santa Coloma",
        provincia: "Barcelona", /* no necesario */
        idLocalidad: ObjectId("458525ff55ff55f48bbbbb01"),        
        telefono: "444333222",
        pedidos: [
            {
                _id: ObjectId("458525ff55ff55f48bbbbb04"),
                fechaHoraPedido: new Date("2022-04-14 17:01"),
                tipo: "domicilio",   /* domicilio / recoger  */
                detalle: [
                    {
                        nombreProducto: "Pizza 4 quesos",
                        idProducto: ObjectId("458525ff55ff55f48bbbbb05"),
                        cantidad: 1
                    }
                ],
                precioTotal: 20.80,     
                idRepartidor: ObjectId("458525ff55ff55f48bbbbb07"),
                fechaHoraEntrega: new Date("2022-04-14 17:21")
            }
        ]
    }
]);

db.provincias.drop();
db.provincias.insertMany([
    {
        _id: ObjectId("458525ff55ff55f48bbbbb02"),
        nombre: "Barcelona",
        localidades: [
            {
                _id: ObjectId("458525ff55ff55f48bbbbb01"),
                nombre: "Santa Coloma"
            }
        ]
    }  
]);

db.productos.drop();
db.productos.insertMany([
    {
        _id: ObjectId("458525ff55ff55f48bbbbb05"),
        tipo: "pizza", /* Pizza / Hamburquesa / Bebida */
        nombre: "Pizza 4 quesos",
        descripcion: "clasica pizza con 4 quesos de gran calidad",
        imagenUrl: "/images/pizza_4_quesos.jpg",
        precio: 18.00,
        categoriaPizza: "Clasica",
        idCategoriaPizza: ObjectId("458525ff55ff55f48bbbbb03")
    }
]);

db.categoriasPizza.drop();
db.categoriasPizza.insertMany([
    {
        _id: ObjectId("458525ff55ff55f48bbbbb03"),
        nombre: "Clasica"
    }
]);

db.tiendas.drop();
db.tiendas.insertMany([
    {
        _id: ObjectId("458525ff55ff55f48bbbbb06"),
        nombre: "Tienda1",
        direccion: "C/ bleble, 55",
        cp: "08999",
        localidad: "Santa Coloma",
        provincia: "Barcelona",
        idLocalidad: ObjectId("458525ff55ff55f48bbbbb01"),
        empleados: [
            {
                _id: ObjectId("458525ff55ff55f48bbbbb07"),
                nombre: "Currito",
                apellidos: "Uno",
                nif: "55666555A",
                telefono: "444555333",
                tipo: "repartidor", /* repartidor / cocinero */
            }
        ]
    }
]);