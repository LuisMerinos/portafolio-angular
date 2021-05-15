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
productosFiltrado: Producto[]= [];

  constructor(private http:HttpClient) {


    this.cargarProductos();
  }




  private cargarProductos(){

  return new Promise( (resolve, rejects )=>{
    this.http.get( this.url).subscribe((resp:Producto[])=>{

      this.productos= resp;
      this.cargando = false;
      resolve(0);
     });

  });

}




getProducto(id : string ){

  return this.http.get(`https://angular-html-fa3a8-default-rtdb.firebaseio.com/productos/${id}.json`);

}


buscarProducto(termino: string){


  if (this.productos.length == 0 ){
   this.cargarProductos().then(()=>{
// ejecuta despues de tener los productos
this.filtrarProductos(termino);

   });
  }else{
    this.filtrarProductos(termino);
  }

}


private filtrarProductos(termino: string ){
 console.log(this.productos);
 this.productosFiltrado= [];
 termino = termino.toLocaleLowerCase();
  this.productos.forEach(prod=>{

    const tituloLower = prod.titulo.toLocaleLowerCase();
  if (prod.categoria.indexOf(termino)>=0 || tituloLower.indexOf(termino)>=0){
   this.productosFiltrado.push(prod);
  }
});




}
}



