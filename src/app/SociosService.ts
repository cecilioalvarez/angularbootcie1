import { Injectable } from '@angular/core';
import { Socio } from './socio';

@Injectable({
  providedIn: 'root'
})
export class SociosService {

  listaSocios:Socio[]=[] ;

   constructor () {
 
     this.listaSocios.push(new Socio("pepe","perez",20));
     this.listaSocios.push(new Socio("ana","perez",30));
     
   }

   public buscarTodos():Socio[] {
    return this.listaSocios;
   }
}
