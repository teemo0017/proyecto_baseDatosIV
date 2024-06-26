import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPrincipalComponent } from './components/info-principal/info-principal.component';
import { PageInicioComponent } from './page/page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';




@NgModule({
  declarations: [
    InfoPrincipalComponent,
    PageInicioComponent,
    GalleryComponent,
    AboutComponent,

  ],
  imports: [
    CommonModule,

  ],exports:[
    AboutComponent
  ]
})
export class InicioModule { }
