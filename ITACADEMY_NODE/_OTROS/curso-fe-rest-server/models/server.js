const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../db/config.db');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // BD
        this.dbConnect();


        // Middlewares
        this.middlewares();

        // rutas
        this.routes();
    }

    async dbConnect() {
        await dbConnection();
    }

    middlewares() {

        // CORS - Cross Origin Resource Sharing
        this.app.use( cors() );

        // Lectura y parseo body
        this.app.use( express.json() );

        // Directorio público
        this.app.use( express.static('public')); 

    }

    routes() {       

        this.app.use(this.usuariosPath, require('../routes/usuarios'))
        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor escuchando en puerto " + this.port);
        });
    }
}

module.exports = Server;