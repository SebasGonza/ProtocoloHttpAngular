import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';
import { SharedModule } from '../shared/shared.module';
import { BuscadorComponent } from './buscador/buscador.component';
import { GifsComponent } from './gifs/gifs.component';



@NgModule({
  declarations: [
    MainPageComponent,
    BuscadorComponent,
    GifsComponent
  ],
  imports: [
    CommonModule,SharedModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class ComponentsModule { }
