import { Component } from '@angular/core';
import { Libro } from '../libro';
import { FormsModule } from '@angular/forms';
import { LibroRestService } from '../libro-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-libro',
  imports: [FormsModule],
  templateUrl: './formulario-libro.component.html',
  styleUrl: './formulario-libro.component.scss'
})
export class FormularioLibroComponent {

  libro:Libro={} as Libro;
  constructor (private libroRestService:LibroRestService,private router:Router) {

  }
  public insertar(){
    //console.log(this.libro);
    this.libroRestService.insertar(this.libro).subscribe((datos)=>{
      console.log("insertado");
      this.router.navigate(["/listalibros"]);
    })
    
  }
}
