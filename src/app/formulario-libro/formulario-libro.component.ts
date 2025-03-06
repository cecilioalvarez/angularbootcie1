import { Component } from '@angular/core';
import { Libro } from '../libro';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-libro',
  imports: [FormsModule],
  templateUrl: './formulario-libro.component.html',
  styleUrl: './formulario-libro.component.scss'
})
export class FormularioLibroComponent {

  libro:Libro= {} as Libro;

  public insertar() {

    console.log(this.libro);

  }

}
