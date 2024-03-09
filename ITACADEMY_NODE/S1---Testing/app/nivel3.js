const fs = require('fs');
//Nivel 1 Ejercicio 1
/* Donats els objectes employees i salaries, crea una arrow function getEmployee 
que retorni una Promise efectuant la cerca en l'objecte pel seu id. 
Crea una altra arrow function getSalary que rebi com a paràmetre un objecte 
employee i retorni el seu salari.*/

/* Intentos de facilitar el mock, no funcionaron... */
let _emp, _sal;
inicializarDatos = () =>  {
    _emp = JSON.parse(fs.readFileSync(__dirname + '/JSON/employees.json'));
    _sal = JSON.parse(fs.readFileSync(__dirname + '/JSON/salaries.json'));
}

let employees = () => _emp;
let salaries = () => _sal;


/* Implementación original
let employees, salaries;
inicializarDatos = () =>  {
    employees = JSON.parse(fs.readFileSync(__dirname + '/JSON/employees.json'));
    salaries = JSON.parse(fs.readFileSync(__dirname + '/JSON/salaries.json'));
}
*/



getEmployee = (id) => {

    return new Promise((resolve, reject) => {        
        const result = employees().find( employee => employee.id == id);
        if(result){
            resolve(result);
        } else {
            reject(new Error('Empleado no encontrado'));
        }
    });
}

getSalary = (employee) => {
    return new Promise((resolve, reject) => {        
        const result = salaries().find( salary => salary.id == employee.id);
        if(result){
            resolve(result);
        } else {
            reject(new Error('Salario no encontrado'));
        }
    });
}

//Nivel 1 Ejercicio 2
/* Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla 
el nom de l'empleat i el seu salari, usant les funcions que has definit a l'exercici anterior. */
// TODO: DUDA, ¿si hay error se salta el resto del código?
getEmployeeAndSalary = async (id) => {
    try {
        const employee = await getEmployee(id);
        const salary = await getSalary(employee);
        //console.log(`Empleado: ${employee.name} Salario: ${salary.salary}`);
        return {id, name: employee.name, salary: salary.salary}
        
    } catch ( err ) {
        console.log( err.message );
        return ( err );
    }
}

inicializarDatos();

/*
getEmployeeAndSalary(1)
    .then( (response) =>{
        console.log(response);
    })
    .catch( err => console.log( err ));
*/


module.exports.employees = employees;
module.exports.salaries = salaries;
module.exports.getEmployeeAndSalary = getEmployeeAndSalary;


