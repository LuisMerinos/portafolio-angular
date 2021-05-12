import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {InfoPagina} from '../interfaces/info-pagina.interface'

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info : InfoPagina = {};
  cargada= false;
  equipo : any [] = [];
  url = ' https://angular-html-fa3a8-default-rtdb.firebaseio.com/equipo.json' ;

  constructor(private http:HttpClient) {

   this.cargarInfo();
   this.cargarEquipo();
   }

private cargarInfo(){
  console.log("servicio lanzado");
  //leer el archivo Json
  this.http.get('assets/data/data-pagina.json').subscribe((resp: InfoPagina)=>{
    this.cargada= true;
    this.info= resp;

  });

}


private cargarEquipo(){
  this.http.get (this.url).subscribe((resp:any[] )=>{


    this.equipo  = resp  ;

    console.log(this.equipo);

  });


}

}
