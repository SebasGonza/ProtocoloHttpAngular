import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { GifsService } from '../components/services/gifs.service';



@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SideBarComponent],
  
})
export class SharedModule { }
