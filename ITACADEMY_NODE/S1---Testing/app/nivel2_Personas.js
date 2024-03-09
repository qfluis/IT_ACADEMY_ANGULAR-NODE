// Nivel 2 Ejercicio 2
/* Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. 
La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. 
Invoca el mètode dirNom des de fora de la classe. */

class Persona {
    constructor(nom){
        this.nom = nom;
    }

    dirNom(){
        const saludo = `El meu nom es: ${this.nom}`;
        console.log(saludo);
        return saludo;    
    }
}

module.exports.Persona = Persona;
