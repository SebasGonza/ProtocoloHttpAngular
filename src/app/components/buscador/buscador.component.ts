import { Component, ViewChild, ElementRef} from '@angular/core';

// Importaciones Propias
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  @ViewChild('buscador') buscador!:ElementRef;

  constructor(private gifServices:GifsService) { }

  
  obtenerBusqueda() {
    const termino = this.buscador.nativeElement.value;
    this.gifServices.guardaHistorial(termino);
    this.buscador.nativeElement.value = "";

  }
}
