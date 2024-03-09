/* Sumas, restas, multiplicaciones y divisiones */
const sumar = (a, b, ...args) => {
    let resultado = a + b;
    for (let argument of args){
        resultado += argument;
    }
    return resultado;
}

const restar = (a, b, ...args) => {
    let resultado = a - b;
    for (let argument of args){
        resultado -= argument;
    }
    return resultado;
}

const multiplicar = (a, b, ...args) => {
    let resultado = a * b;
    for (let argument of args){
        resultado *= argument;
    }
    return resultado;
}

const dividir = (a, b, ...args) => {
    if(a == 0 || b == 0 || args.includes(0)) {
        return null;
    }
    let resultado = a / b;
    for (let argument of args){
        resultado /= argument;
    }
    return resultado;
}


/* ASYNC / AWAIT N1E1 */

let employees = [
    {id: 1, name: 'Linux Torvalds'},
    {id: 2, name: 'Bill Gates'},
    {id: 3, name: 'Jeff Bezos'},
    {id: 4, name: 'Bender'}
];
 
let salaries = [
    {id: 1, salary: 4000},
    {id: 2, salary: 1000},
    {id: 3, salary: 2000}
];

getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const result = employees.find( employee => employee.id == id);
        if(result){
            resolve(result);
        } else {
            reject(new Error('Empleado no encontrado'));
        }
    });
}

getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        const result = salaries.find( salary => salary.id == employee.id);
        if(result){
            resolve(result);
        } else {
            reject(new Error('Salario no encontrado'));
        }
    });
}

//Nivel 2 Ejercicio 1
/* Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï 
la seva funció resolve() després de 2 segons de la seva invocació. */

const esperaXSegundos = (segundos) =>{
    return new Promise((resolve, reject) => {
        if(!isNaN(segundos)) {
            setTimeout(() => resolve() , segundos*1000);
        } else {
            reject(new Error("Error. Se esperaba un número"));
        }        
    });
}

const esperar = async (segundos) => {
    // Añadidos returns a función original
    try {
        //console.log("N2E1 > Espera iniciada ...")
        await esperaXSegundos(segundos);
        //console.log("N2E1 > Espera finalizada");
        return true;
    } catch ( err ) {
        //console.log( "N2E1 > " + err.message );
        return err;
    }    
    
    
}

// Nivel 2 Ejercicio 3 + Nivel 3 Ejercicio 1
/* Invoca la primera funció getEmployee() i després getSalary() 
niant l'execució de les dues promises.*/
/* Fixa un element catch a la invocació del nivell anterior que capturi qualsevol 
error i el mostri per la consola. */

const getEmployeeAndSalary = async (id) => {
    let respuesta = {};
    await getEmployee(id)
        .then( res => {
            respuesta.id = id;
            respuesta.name = res.name;
            return getSalary(res);
        })
        .then( res => {
            //console.log("N2E2",res)
            respuesta.salary = res.salary;
        })
        .catch( err => {
            //console.log("N3E1",err.message);
            respuesta = err;
        }); 
    
    return respuesta;
}


getEmployeeAndSalary(1);


module.exports.sumar = sumar;
module.exports.restar = restar;
module.exports.multiplicar = multiplicar;
module.exports.dividir = dividir;

module.exports.getEmployee = getEmployee;
module.exports.getSalary = getSalary;

module.exports.esperar = esperar;
module.exports.getEmployeeAndSalary = getEmployeeAndSalary;





