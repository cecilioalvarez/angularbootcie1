import { Component } from '@angular/core';
import { Socio } from '../socio';
import { SociosService } from '../SociosService';

@Component({
  selector: 'app-c6',
  imports: [],
  templateUrl: './c6.component.html',
  styleUrl: './c6.component.scss'
})
export class C6Component {

  listaSocios:Socio[]=[] ;
  constructor (private socioService:SociosService) {

    this.listaSocios=socioService.buscarTodos();
    
  }
}
