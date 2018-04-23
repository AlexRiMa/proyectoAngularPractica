import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-cmp-lista',
  templateUrl: './cmp-lista.component.html',
  styleUrls: ['./cmp-lista.component.css']
})
export class CmpListaComponent implements OnInit {

  
  ofertas: Array<object>;

  constructor(private ofertaService: OfertasService) {
   }

  ngOnInit() {

    this.ofertas = this.ofertaService.getOfertas();
  }

}
