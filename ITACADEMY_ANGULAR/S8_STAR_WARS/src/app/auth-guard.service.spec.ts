import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  
  let loginService: { userLogedIn: jasmine.Spy};
  let router: { navigate: jasmine.Spy};
  let service:AuthGuardService;

  beforeEach(()=>{
    loginService = jasmine.createSpyObj('LoginService', ['get']);
    router = jasmine.createSpyObj('Router',['navigate']);
    service = new AuthGuardService(loginService as any, router as any);
  });

  it("Shoult create",()=>{
    expect(service).toBeTruthy();
  }); 
});    