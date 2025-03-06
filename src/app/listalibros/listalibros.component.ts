import { Component } from '@angular/core';
import { LibroRestService } from '../libro-rest.service';
import { Libro } from '../libro';

@Component({
  selector: 'app-listalibros',
  imports: [],
  templateUrl: './listalibros.component.html',
  styleUrl: './listalibros.component.scss'
})
export class ListalibrosComponent {

  listaLibros:Libro[]=[];

  constructor(private libroRestService:LibroRestService) {

    libroRestService.buscarTodos().subscribe( (datos)=> {

        this.listaLibros=datos;
    })
  }

}
