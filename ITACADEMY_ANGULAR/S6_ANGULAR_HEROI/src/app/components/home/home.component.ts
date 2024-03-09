import { Component, OnInit } from '@angular/core';
import { Frase } from  'src/app/interfaces/Frase'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  historia:Frase [];
  iniciado:boolean;

  constructor() { 
    this.historia = [
      { txt: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
        img: "1.jpg"},
      { txt: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
        img: "2.jpg"},
      { txt: "L'heroi va decidir travessar la porta que el portava a casa",
        img: "3.jpg"},
      { txt: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
        img:  "4.jpg"}];
    this.iniciado = false;
  }

  iniciar(){
    this.iniciado=true;
  }

  ngOnInit(): void {
  }

}
