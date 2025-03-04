import { Component } from '@angular/core';
import { SocioRESTService } from '../socio-rest.service';
import { Socio } from '../socio';

@Component({
  selector: 'app-c7',
  imports: [],
  templateUrl: './c7.component.html',
  styleUrl: './c7.component.scss'
})
export class C7Component {

  listaSocios:Socio[]=[];
  constructor(private socioRestService:SocioRESTService) {

    this.socioRestService.buscarTodos().subscribe((datos)=> {

        this.listaSocios=datos;
    })

  }
}
