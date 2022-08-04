import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GIFResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = "4DobNvh5GGXzspRGcMiH78BssiSnXWwM";
  private _historialBusqueda:string[] = [];

  public resultados: Gif[] = [];
  constructor(private http:HttpClient) {
      if(localStorage.getItem('historial') !== null){
        
      }
   }

  get historialBusqueda(){
    return [...this._historialBusqueda];
  }

  guardaHistorial(argumento: string):void{
    this._historialBusqueda.unshift(argumento);
    this._historialBusqueda = this._historialBusqueda.splice(0,10);

    this.http.get<GIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=4DobNvh5GGXzspRGcMiH78BssiSnXWwM&q=${argumento}&limit=12`) // En el get se tiene que pasar el protocolo https o no funciona
        .subscribe((resp) =>{
          console.log(resp.data);
          this.resultados = resp.data;
          
        });

        localStorage.setItem('historial',JSON.stringify(this._historialBusqueda));

  }
}
