import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor','Viuda Negra'];
  ultimoHeroeBorrado: string = '';

  borrarHeroe():void {
    this.ultimoHeroeBorrado = this.heroes.pop() || 'todos los Avengers';
    //this.heroes.shift()  // elimina el primero
    //if (this.ultimoHeroeBorrado != '') console.log("R.I.P " + this.ultimoHeroeBorrado);
    console.log("R.I.P. " + this.ultimoHeroeBorrado);
  }

}
