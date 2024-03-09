import { HttpClient } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { ServicioNavesService } from './servicio-naves.service';

/*
describe('ServicioNavesService', () => {
  let httpClientSpy : {get :jasmine.Spy }
  let service: ServicioNavesService;

  beforeEach(() => {
    //TestBed.configureTestingModule({});
    //service = TestBed.inject(ServicioNavesService);
    
    httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
    service = new ServicioNavesService(httpClientSpy as any);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
*/


//const httpGetSpy: jasmine.Spy<any> = spyOn(http, 'get').and.returnValue(of('Test result.'));
