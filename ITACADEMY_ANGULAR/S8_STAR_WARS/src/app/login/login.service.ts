import { Injectable } from '@angular/core';

export interface User {
  userName:string;
  userPass:string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userList: User[] = [];
  userLogedIn = false;
  
  userLoged = "";

  constructor() {   
    this.userList = JSON.parse(localStorage.getItem("userList") || "[]");
  }

  addUser (user:string, pass:string){
    this.userList.push({userName: user, userPass: pass});
    localStorage.setItem("userList", JSON.stringify(this.userList));
  }

  checkUserAndPassword(user:string, pass:string): boolean{
    const result = this.userList.find((item)=>{
      return (item.userName === user && item.userPass === pass)
    });

    const logedIn: boolean = (result != undefined);
    this.userLogedIn = logedIn;
    if(logedIn) this.userLoged  = result?.userName || "";

    return logedIn ;
  }

  
}
