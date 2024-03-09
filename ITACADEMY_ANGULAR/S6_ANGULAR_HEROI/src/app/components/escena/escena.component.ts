import { Component, Input, OnInit } from '@angular/core';
import { Frase } from  'src/app/interfaces/Frase'

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent implements OnInit {

  currentSentence:number;

  @Input() data:Frase[] = [];
  constructor() { 
    this.currentSentence = 0;
  }

  prev(){
    (this.currentSentence > 0)?this.currentSentence--:this.currentSentence;
    this.setBackground();
  }

  next(){
    (this.currentSentence < (this.data.length-1))?this.currentSentence++:this.currentSentence;
    this.setBackground();
  }
  setBackground(){
    let fondo:HTMLElement | null = document.getElementById("fondo");
    fondo!.style.backgroundImage = "url('./assets/images/" + (this.currentSentence+1) + ".jpg')";
  }




  ngOnInit(): void {
  }

}
