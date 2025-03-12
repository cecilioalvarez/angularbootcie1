import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Ejemplar } from '../ejemplar';
import { EjemplarRestService } from '../ejemplar-rest.service';

@Component({
  selector: 'app-lista-ejemplar',
  imports: [RouterLink],
  templateUrl: './lista-ejemplar.component.html',
  styleUrl: './lista-ejemplar.component.scss'
})
export class ListaEjemplarComponent {
  
  listaEjemplar:Ejemplar[]=[];

  constructor(private ejemplarRestService:EjemplarRestService) {

    ejemplarRestService.buscarTodos().subscribe((datos)=>{

      this.listaEjemplar=datos;
    })
  }
borrar(isbn:string,numero:number){
  this.ejemplarRestService.borrar(isbn,numero).subscribe((datos)=> {
    this.ejemplarRestService.buscarTodos().subscribe((datos)=>{

  
    this.listaEjemplar=datos;
  })
})
}
}
