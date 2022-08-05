import { Component,} from '@angular/core';
import { GifsService } from '../../components/services/gifs.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent{

  constructor(private gifs:GifsService) { }

  get historial(){
    return this.gifs.historialBusqueda;
  }

  mostrarGifsSidebar(argumento:string){
    this.gifs.guardaHistorial(argumento);
  }

}
