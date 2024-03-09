import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  loginMode;
  @ViewChild('feedback') txtFeedback!:ElementRef<HTMLDivElement>;

  constructor(
    private _builder:FormBuilder, 
    private loginService:LoginService,
    private route:Router
  ) {
    this.loginForm = this._builder.group({
      userName: ['', Validators.compose([Validators.required, Validators.email])],
      userPass: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });  
    this.loginMode = true;
  }

  ngOnInit(): void {    
  }

  changeLoginMode(){
    this.loginMode = !this.loginMode;
    this.txtFeedback.nativeElement.classList.add("display-none");
    this.txtFeedback.nativeElement.innerHTML= '';
  }

  sendForm(values:any){
    if (!this.loginMode){
      this.createUser(values.userName, values.userPass);
    } else {
      this.checkUser(values.userName, values.userPass);
    } 
  }

  createUser(user: string, pass: string){
    this.loginService.addUser(user , pass);
    this.loginForm.reset();
    this.txtFeedback.nativeElement.classList.remove("display-none");
    this.txtFeedback.nativeElement.innerHTML = "Usuario creado con éxito, chequea tu email para confirmarlo.<br> Ya puedes hacer login."
    this.txtFeedback.nativeElement.classList.add("feedback--ok");
    this.txtFeedback.nativeElement.classList.remove("feedback--ko");
    this.loginMode = true;
  }

  async checkUser(user: string, pass: string) {
    const resultado:boolean = await this.loginService.checkUserAndPassword(user, pass);
    if(resultado){
      this.txtFeedback.nativeElement.classList.remove("display-none");
      this.txtFeedback.nativeElement.innerHTML = "Usuario logeado correctamente";
      this.txtFeedback.nativeElement.classList.add("feedback--ok");
      this.txtFeedback.nativeElement.classList.remove("feedback--ko");
      this.route.navigate(['']);
    } else {
      this.txtFeedback.nativeElement.classList.remove("display-none");
      this.txtFeedback.nativeElement.innerHTML = "Usuario y/o contraseña incorrectos";
      this.txtFeedback.nativeElement.classList.add("feedback--ko");
      this.txtFeedback.nativeElement.classList.remove("feedback--ok");
    }
  }
}
