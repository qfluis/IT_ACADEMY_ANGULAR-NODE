import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nave, ServicioNavesService, Pilot } from '../servicio-naves.service';

@Component({
  selector: 'app-detalle-nave',
  templateUrl: './detalle-nave.component.html',
  styleUrls: ['./detalle-nave.component.scss']
})
export class DetalleNaveComponent implements OnInit {

  nombreNave:string = "";
  nave:Nave | any = "";
  numeroNave:string = '';
  pilotos:string[] = [];
  arrayPilotos:Pilot[] = [];

  constructor(private rutaActiva: ActivatedRoute, private servicioNaves:ServicioNavesService) { }

  ngOnInit(): void {
    this.obtenerDatosNave();
  }

  obtenerDatosNave(){
    this.nombreNave = this.rutaActiva.snapshot.params["id"];
    // obtener Nave
    const result = this.servicioNaves.listaNaves.filter((nave)=>{
      return nave.name === this.nombreNave;
    });
    this.nave = result[0];

    // obtener numero (para foto)
    const urlSplit = this.nave.url.split("/");
    this.numeroNave = urlSplit[urlSplit.length-2];
    this.pilotos = this.nave.pilots;

    if (this.nave.pilots.length > 0) this.obtenerPilotos();

  }

  obtenerPilotos(){
    for (let piloto of this.pilotos){
      this.servicioNaves.obtenerPiloto(piloto).subscribe((resp:Pilot)=>{

        const urlSplit = resp.url.split("/");
        resp.numImg = urlSplit[urlSplit.length-2]
        this.arrayPilotos.push(resp);
      });        
    }    
  }

  imgError(image:any) {
    image.target.src = "./assets/img404.jpg"; 
  }
  imgErrorCh(image:any) {
    image.target.src = "./assets/img404v.jpg"; 
  }

  // https://starwars-visualguide.com/assets/img/characters/1.jpg


}
