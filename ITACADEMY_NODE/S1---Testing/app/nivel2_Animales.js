// Nivel 3 Ejercicio 1
/* Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. 
Invoca-la amb diferents definicions. */

class Animal {
    constructor(tipo, nombre) {
        if(this.constructor == Animal) {
            throw Error("Nou, no se puede instanciar esta clase");
        }  
        this.tipo = tipo;
        this.nombre = nombre;        
    } 

    saludar() {
        const saludo = `Hola me llamo ${this.nombre} y soy del tipo ${this.tipo}`
        console.log(saludo);
        return saludo;
    }
}

const crearAnimal = (tipo, nombre) => {
    let animal = Object.create(Animal.prototype);
    animal.nombre = nombre;
    animal.tipo = tipo;
    return animal;
}

module.exports.Animal = Animal;
module.exports.crearAnimal = crearAnimal;