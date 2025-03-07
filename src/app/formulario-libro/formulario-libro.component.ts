import { Component } from '@angular/core';
import { Libro } from '../libro';
import { FormsModule } from '@angular/forms';
import { LibroRestService } from '../libro-rest.service';

@Component({
  selector: 'app-formulario-libro',
  imports: [FormsModule],
  templateUrl: './formulario-libro.component.html',
  styleUrl: './formulario-libro.component.scss'
})
export class FormularioLibroComponent {

  libro:Libro= {} as Libro;
  constructor(private libroRestService:LibroRestService) {

  
  }

  public insertar() {

    //console.log(this.libro);

    this.libroRestService.insertar(this.libro).subscribe((datos)=>{
      console.log("insertado");
    })

  }

}
