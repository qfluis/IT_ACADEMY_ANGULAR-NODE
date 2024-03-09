const nivel1 = require('../app/nivel1');

// TESTING sumar/restar/dividir/multiplicar

describe('Testing función sumar', ()=> {
    test('sumar 1 + 2 debe dar 3', () => {
        expect(nivel1.sumar(1,2)).toBe(3);
    });
    test('sumar 1 + 2 + 4 debe dar 7', () => {
        expect(nivel1.sumar(1,2,4)).toBe(7);
    });
    test('sumar 1 + -2 + -4 debe dar -5', () => {
        expect(nivel1.sumar(1,-2,-4)).toBe(-5);
    });
});

describe('Testing función restar', () => {
    test('restar 5 - 1 debe dar 4', ()=> {
        expect(nivel1.restar(5,1)).toBe(4);
    });
    test('restar 5 - 1 - 2 debe dar 2', ()=> {
        expect(nivel1.restar(5,1, 2)).toBe(2);
    });
    test('restar 5 - 10 - 8 debe dar -13', ()=> {
        expect(nivel1.restar(5,10, 8)).toBe(-13);
    });
    test('restar (-10) - (-10) - (5) debe dar -13', ()=> {
        expect(nivel1.restar(-10,-10, 5)).toBe(-5);
    });    
});

describe('Testing función multiplicar', ()=> {
    test('multiplicar 2 * 2 debe dar 4', () => {
        expect(nivel1.multiplicar(2,2)).toBe(4);
    });
    test('multiplicar 1 * 2 * 4 debe dar 8', () => {
        expect(nivel1.multiplicar(1,2,4)).toBe(8);
    });
    test('multiplicar 1 * -2 * -4 debe dar 8', () => {
        expect(nivel1.multiplicar(1,-2,-4)).toBe(8);
    });
    test('multiplicar 5 * 5 * 0 debe dar 0', () => {
        expect(nivel1.multiplicar(5,5,0)).toBe(0);
    });
});
describe('Testing función dividir', ()=> {
    test('dividir 4 / 2 debe dar 2', () => {
        expect(nivel1.dividir(4,2)).toBe(2);
    });
    test('dividir 12 / 3 / 2 debe dar 2', () => {
        expect(nivel1.dividir(12,3,2)).toBe(2);
    });
    test('dividir 10 / -2 / -1 debe dar 5', () => {
        expect(nivel1.dividir(10,-2,-1)).toBe(5);
    });
    test('dividir 5 * 5 * 0 debe dar null', () => {
        expect(nivel1.dividir(5,5,0)).toBe(null);
    });
});



// TESTING Async / Await N1 E1
// https://jestjs.io/docs/asynchronous

describe('Testing función getEmployee', ()=> {
    test('obtener empleado Linus Torvalds', () => {
        return expect(nivel1.getEmployee(1)).resolves.toEqual({id: 1, name: 'Linux Torvalds'});        
    });

    test('obtener error empleado no encontrado', () => {
        return expect(nivel1.getEmployee(5)).rejects.toEqual(new Error('Empleado no encontrado'));        
    });
});
describe('Testing función getSalary', ()=> {
    test('obtener salario de Jeff Bezos', () => {
        return expect(nivel1.getSalary({id: 3, name: 'Jeff Bezos'})).resolves.toEqual({id: 3, salary: 2000});        
    });

    test('obtener error salario no encontrado (buscando empleado existente)', () => {
        return expect(nivel1.getSalary({id: 4, name: 'Bender'})).rejects.toEqual(new Error('Salario no encontrado'));        
    });

    test('obtener error salario no encontrado (buscando empleado no existente)', () => {
        return expect(nivel1.getSalary({id: 8, name: 'Bleble'})).rejects.toEqual(new Error('Salario no encontrado'));        
    });
});

// TESTING Async / Await N2 E1
// Jest Fake Timers

describe('Testing función esperar', () => {
    // TODO: No consigo que funcionen FakeTimers
    /* PETA SI LO USO
    beforeEach(()=> {
        jest.useFakeTimers(); // No parece hacer nada...
    });
    
    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });
    */

    test('Entra y ejecuta la función ', () => {
        return expect(nivel1.esperar(1)).resolves.toBe(true);       
    });
    
    test('Devuelve error al pasar parámetro no numérico', () => {
        return expect(nivel1.esperar('jola')).resolves.toEqual(new Error("Error. Se esperaba un número"));
    });

});

describe('Testing función getEmployeeAndSalary', () => {
    test('obtener empleado y salario de Linus Torvalds', () => {
        return expect(nivel1.getEmployeeAndSalary(1)).resolves.toEqual({id: 1, name: 'Linux Torvalds', salary:4000});        
    });
    
    test('obtener error empleado no encontrado', () => {
        return expect(nivel1.getEmployeeAndSalary(5)).resolves.toEqual(new Error('Empleado no encontrado'));        
    });

    test('obtener error salario no encontrado (buscando empleado existente sin salario)', () => {
        return expect(nivel1.getEmployeeAndSalary(4)).resolves.toEqual(new Error('Salario no encontrado'));        
    });
    
});

