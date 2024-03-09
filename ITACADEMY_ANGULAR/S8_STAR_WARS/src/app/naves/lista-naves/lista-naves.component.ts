import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nave, ServicioNavesService } from '../servicio-naves.service';

@Component({
  selector: 'app-lista-naves',
  templateUrl: './lista-naves.component.html',
  styleUrls: ['./lista-naves.component.scss']
})
export class ListaNavesComponent implements OnInit {

  get listaNaves():Nave[] {
    return this.servicioNaves.listaNaves;
  }
  get allShipsCharged():boolean {
    return this.servicioNaves.allShipsCharged;
  }
  

  constructor(private servicioNaves:ServicioNavesService, private router:Router) { }

  ngOnInit(): void {
    //console.log("iniciando lista");
    /*
    this.servicioNaves.getListaNaves$().subscribe(listaNaves => {
      console.log("Holiwi observable");
      this.listaNaves = listaNaves;
    }); */
    //console.log("Lista Naves Publica", this.servicioNaves.listaNavesPublica);

    /*
    const options = {
      root: document.querySelector('#main-container'),
      rootMargin: '10px 0px',
      threshold: 1.0
    }
    const observer = new IntersectionObserver (this.callbackObserver, options); 

    let listaItems = document.getElementsByClassName("nave");
    let target = listaItems[0];
    console.log(listaItems);
    observer.observe(target);
    */
 
  }  

  detalleNave(nombreNave:string) {
    this.router.navigate(["/nave/"+nombreNave]);    
  }

  nextPage(){
    this.servicioNaves.nextPage();
  }

  callbackObserver () {
    console.log("holiwi");
  }

  

}
