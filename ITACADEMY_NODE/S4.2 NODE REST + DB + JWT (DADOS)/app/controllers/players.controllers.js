const { response, request } = require('express');
const path = require('path');
const juego = require('../models/juego');

// POST /players: crea un jugador
const postPlayers = async (req = request, res = response) => {
    let { nombre } = req.body;
    
    if(!nombre || nombre === "" ) {
        // usuario anónimo
        nombre = null;
    } else {
        if (await juego.existeJugador({nombre})) {
            res.status(400).json({
                msg:"usuario ya existente"
            });
            return;
        }
    }    
    
    const jugador = await juego.anadirJugador(nombre);
    if (jugador === null) {        
        res.status(500).json({
            msg:"Error en la BD, ponte en contacto con el admin"
        })
        return;
    }
    // 🙂
    res.status(201).json({
        msg:"Usuario creado con éxito",
        jugador
    });
    
}

// PUT /players: modifica el nom del jugador
const putPlayers = async (req = request, res) => {
    const { id, nombre, nuevoNombre } = req.body

    if ((!nombre || nombre ==="") && !id) {
        res.status(400).json({
            msg:"Falta información. Es necesario facilitar id o nombre"
        })
        return;
    }

    let jugador = await juego.existeJugador ({id, nombre});

    if (!jugador) {
        res.status(400).json({
            msg:"usuario no existe"
        });
        return;
    } 

    if(await juego.existeJugador({nombre: nuevoNombre})) {
        res.status(400).json({
            msg:"nuevo nombre no disponible"
        });
        return;
    };    

    const jugadorModificado = (id)
                                ?await juego.modificarNombreJugador({id,nuevoNombre})
                                :await juego.modificarNombreJugador({nombre,nuevoNombre});
    
    if(jugadorModificado === null) {
        res.status(500).json({
            msg:"Error al modificar usuario. Ponte en contacto con el administrador"
        });
        return;
    }

    //🙂
    res.status(201).json({
        msg:"Nombre de jugador modificado",
        jugadorModificado
    });
    
}
// POST /players/{id}/games: un jugador específic realitza una tirada
const postPlayersGames = async (req = request, res) => {
    let { id } = req.params;
    //id = parseInt(id);
   
    if(! await juego.existeJugador({id})){
        res.status(400).json({
            msg:"id de jugador no válido"
        });
        return;
    }

    const jugada = await juego.jugar(id);

    res.status(201).json({
        msg:"Tirada efectuada",
        jugada
    });
}

// DELETE /players/{id}/games: elimina les tirades del jugador
const deletePlayersGames = async (req, res) => {

    let { id } = req.params;
    //id = parseInt(id);
   
    if(! await juego.existeJugador({id})){
        res.status(400).json({
            msg:"id de jugador no válido"
        });
        return;
    }

    const jugador = await juego.eliminarTiradasJugador(id);

    res.status(200).json({
        msg:"Eliminadas las tiradas del jugador",
        jugador
    });
}

// GET /players: retorna el llistat de tots els jugadors del sistema amb el seu percentatge mig d’èxits
const getPlayers = async (req, res) => {
    
    const jugadores = await juego.rankingJugadores();

    res.status(200).json({
            msg:"Listado obtenido",
            jugadores
        });
    }

// GET /players/{id}/games: retorna el llistat de jugades per un jugador.
const getPlayersGames = async (req = request, res) => {

    let { id } = req.params;
    if(!id) {
        res.status(400).json({
            msg: "Id de usuario no indicado"
        });
        return;
    }
    
    // id = parseInt(id); // Peta con Mongo...

    if(! await juego.existeJugador({id})) {
        res.status(400).json({
            msg: "Id de usuario no válido"
        });
        return;
    }


    const jugadas = await juego.getJugadas(id);

    res.status(200).json({
            msg:"Listado obtenido correctamente",
            jugadas: jugadas
        });
    }


// GET /players/ranking: retorna el percentatge mig d’èxits del conjunt de tots els jugadors
const getRanking = async (req, res) => {
    
    const ratioAciertos = await juego.obtenerRatioTotal();
    
    res.status(200).json({
            msg:"Promedio aciertos jugadores obtenido correctamente",
            ratioAciertos
        });
    }

// GET /players/ranking/loser: retorna el jugador amb pitjor percentatge d’èxit
const getRankingLoser = async (req, res) => {

    const loser = await juego.rankingLoser();

    res.status(200).json({
        msg:"Loser obtenido correctamente",
        loser
    });
}

// GET /players/ranking/winner: retorna el jugador amb millor percentatge d’èxit
const getRankingWinner = async (req, res) => {

    //TODO: optimizar ranking winner como con Loser

    const winner = await juego.rankingWinner();
    
    res.status(200).json({
        msg:"Winner obtenido correctamente",
        winner
    });
}


// Endpoint no válido
const playersNotFound = (req = request, res = response) => {
    res.status(404).json({
        msg: req.path + " - Endpoint no válido"
    });
}    

module.exports = {
    postPlayers, 
    putPlayers, 
    postPlayersGames, 
    deletePlayersGames, 
    getPlayers, 
    getPlayersGames, 
    getRanking, 
    getRankingLoser, 
    getRankingWinner,
    playersNotFound 
}