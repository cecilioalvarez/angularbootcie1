import { Component } from '@angular/core';
import { Libro } from '../libro';
import { LibroRestService } from '../libro-rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-libro',
  imports: [],
  templateUrl: './detalle-libro.component.html',
  styleUrl: './detalle-libro.component.scss'
})
export class DetalleLibroComponent {

  libro:Libro= {} as Libro;
  
  constructor(private libroRestService:LibroRestService, private route:ActivatedRoute) {

   
  }
  ngOnInit () {

    console.log(this.route.snapshot.paramMap.get("isbn"));
    let isbn=this.route.snapshot.paramMap.get("isbn");
    if (isbn) {
     this.libroRestService.buscarUno(isbn).subscribe((datoslibro)=> {
      this.libro=datoslibro;
     })
    }
  }
}
