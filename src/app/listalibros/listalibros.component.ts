import { Component } from '@angular/core';
import { LibroRestService } from '../libro-rest.service';
import { Libro } from '../libro';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listalibros',
  imports: [RouterLink],
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
  borrar(libro:Libro) {

    this.libroRestService.borrar(libro).subscribe((datos)=> {

        this.libroRestService.buscarTodos().subscribe((datos)=> {

          this.listaLibros=datos;
        })
    })
  }

}
