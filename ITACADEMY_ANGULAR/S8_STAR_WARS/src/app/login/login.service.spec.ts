import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  
  let service: LoginService;

  beforeEach(() => {    
    localStorage.removeItem("userList");
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Method addUser adds user', () => {
    service.addUser("qfluis@gmail.com", "contraseña");
    const result = service.checkUserAndPassword("qfluis@gmail.com", "contraseña");
    expect(result).toBeTrue();
  });

  it('Method checkUserAndPassword return false if the user is not in the userList', () => {
    service.addUser("qfluis@gmail.com", "contraseña");
    const result = service.checkUserAndPassword("aaaaaa@gmail.com", "contraseña");
    expect(result).toBeFalse();
  });

  it('Method checkUserAndPassword return false if the user is in the userList but password do not match', () => {
    service.addUser("qfluis@gmail.com", "contraseña");
    const result = service.checkUserAndPassword("qfluis@gmail.com", "aaaaaaaaa");
    expect(result).toBeFalse();
  });

  it('Method checkUserAndPassword return true if the user is in the userList and password match', () => {
    service.addUser("qfluis@gmail.com", "contraseña");
    const result = service.checkUserAndPassword("qfluis@gmail.com", "contraseña");
    expect(result).toBeTrue();
  });

  it('Method checkUserAndPassword return false if the userList is empty', () => {
    const result = service.checkUserAndPassword("qfluis@gmail.com", "contraseña");
    expect(result).toBeFalse();
  });

  it('Method checkUserAndPassword return true if the user is in the userList and password match', () => {
    service.addUser("qfluis@gmail.com", "contraseña");
    const result = service.checkUserAndPassword("qfluis@gmail.com", "contraseña");
    expect(result).toBeTrue();
  });

  it('LocalStorage Works', () => {
    service.addUser("qfluis@gmail.com", "contraseña");
    const userList = JSON.parse(localStorage.getItem("userList") || "[]");
    expect(userList.length).toBe(1);
  });
});
