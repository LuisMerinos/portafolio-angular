import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Producto} from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url = "https://angular-html-fa3a8-default-rtdb.firebaseio.com/productos_idx.json";
    cargando = true;
productos: Producto []= [];

  constructor(private http:HttpClient) {


    this.cargarProductos();
  }




  private cargarProductos(){

 this.http.get( this.url).subscribe((resp:Producto[])=>{
  console.log(resp);
  this.productos= resp;
  this.cargando = false;
 });
}


}



