import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CmpListaComponent } from './cmp-lista/cmp-lista.component';
import { CmpDetalleComponent } from './cmp-detalle/cmp-detalle.component';
import { CmpObjtListaComponent } from './cmp-objt-lista/cmp-objt-lista.component';
import { CmpBarraComponent } from './cmp-barra/cmp-barra.component';
import { OfertasService } from './ofertas.service';


@NgModule({
  declarations: [
    AppComponent,
    CmpListaComponent,
    CmpDetalleComponent,
    CmpObjtListaComponent,
    CmpBarraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [OfertasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
