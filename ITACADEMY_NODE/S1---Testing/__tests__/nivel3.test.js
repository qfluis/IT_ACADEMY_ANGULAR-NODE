
const nivel3 = require('../app/nivel3');
const getEmployeeAndSalary = nivel3.getEmployeeAndSalary;

/* Intentos de hacer mock... */

/*
const employees = jest.fn().mockReturnValue(20);
const salaries = jest.fn().mockReturnValue(-20);

const nivel3_mock = jest.mock('../app/nivel3', () => {
    return {
        ...nivel3,
        employees,
        salaries
    };
});

console.log(nivel3_mock.fn());
*/

/*
nivel3_mock = jest.mock("../app/nivel3", ()=> {
    //console.log("HOLA");
    const originalModule = jest.requireActual('../app/nivel3');
    //console.log("MODULO", originalModule);
    return {
        //__esModule:true,
        ...originalModule,
       //default: jest.fn(() => 'mocked baz'),
        employees: [
            {"id": 1, "name": "Luis Quevedo"},
            {"id": 2, "name": "Sara Quevedo"},
            {"id": 3, "name": "Cristina Giménez"}
        ],
        salaries: [
            {"id": 1, "salary": 4000},
            {"id": 2, "salary": 6000}
        ]        
    }
});
console.log(nivel3_mock);
*/
/*
const employees = jest
  .spyOn(nivel3, 'employees')
  .mockImplementation(() => {
    return [
        {"id": 1, "name": "Luis Quevedo"},
        {"id": 2, "name": "Sara Quevedo"},
        {"id": 3, "name": "Cristina Giménez"}
    ]
  }); 

const salaries = jest
    .spyOn(nivel3, 'salaries')
    .mockImplementation(() => {
    return [
        {"id": 1, "salary": 4000},
        {"id": 2, "salary": 6000}
    ]
    }); 

*/

/*
jest.mock('../app/nivel3')
nivel3.employees.mockReturnValue(
    [
        {"id": 1, "name": "Luis Quevedo"},
        {"id": 2, "name": "Sara Quevedo"},
        {"id": 3, "name": "Cristina Giménez"}
    ]
);
nivel3.salaries.mockReturnValue(
    [
        {"id": 1, "salary": 4000},
        {"id": 2, "salary": 6000}
    ]
)
*/

/* Al final tests sin hacer mock... */

describe('Testing función getEmployeeAndSalary (JSON version)', () => {
    test('obtener empleado y salario de Luis Quevedo', () => {
        //return expect(getEmployeeAndSalary(1)).resolves.toEqual({id: 1, name: 'Luis Quevedo', salary:5000});        
        //return expect(nivel3.getEmployeeAndSalary(1)).resolves.toEqual({id: 1, name: 'Luis Quevedo', salary:4000});        
        return expect(getEmployeeAndSalary(1)).resolves.toEqual({id: 1, name: 'Linux Torvalds', salary:4000}); 
    });
    
    test('obtener error empleado no encontrado', () => {
        return expect(getEmployeeAndSalary(5)).resolves.toEqual(new Error('Empleado no encontrado'));        
    });

    test('obtener error salario no encontrado (buscando empleado existente sin salario)', () => {
        return expect(getEmployeeAndSalary(4)).resolves.toEqual(new Error('Salario no encontrado'));        
    });
    
    
});