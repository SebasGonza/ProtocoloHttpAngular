import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GIFResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = "4DobNvh5GGXzspRGcMiH78BssiSnXWwM"; // Llave de la api
  private _historialBusqueda: string[] = [];
  private url: string = 'https://api.giphy.com/v1/gifs'; //url base de la api
  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial') !== null) {
      this._historialBusqueda = JSON.parse(localStorage.getItem('historial')!);
    }
    if (localStorage.getItem('resultados')) {
      this.resultados = JSON.parse(localStorage.getItem('resultados')!);
    }

  }

  get historialBusqueda() {
    return [...this._historialBusqueda];
  }


  guardaHistorial(argumento: string): void {

    if (!this._historialBusqueda.includes(argumento)) {
      this._historialBusqueda.unshift(argumento);
      this._historialBusqueda = this._historialBusqueda.splice(0, 10);

    }

    const params = new HttpParams() // Parametros de busqueda de la api
      .set('api_key', this.apiKey)
      .set('limit', '12')
      .set('q', argumento);

    this.http.get<GIFResponse>(`${this.url}/search`, {params}) // En el get se tiene que pasar el protocolo https o no funciona
      .subscribe((resp) => {
        // console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));

      });
    console.log(this.resultados);
    localStorage.setItem('historial', JSON.stringify(this._historialBusqueda));


  }
}
