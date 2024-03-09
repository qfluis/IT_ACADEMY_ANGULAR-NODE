import { Component} from '@angular/core';
import { Personaje } from '../intefaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

 
  // Personaje por defecto
  nuevo: Personaje = {
    nombre:'Trunks',
    poder:5000
  }


  constructor() {
  }

}
