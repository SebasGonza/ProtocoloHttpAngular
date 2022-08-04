import { Component} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent {

  constructor(private gifsService:GifsService) { }

  get resultadosGifs(){
    return this.gifsService.resultados;
  }

  

}
