import { Injectable } from '@angular/core';

@Injectable()
export class OfertasService {

  ofertas: Array<Object>;
  

  constructor() {

    this.ofertas = [];
   }

   getOfertas(){
     return this.ofertas;
   }



}
