import { Component } from '@angular/core';
import { LibroRestService } from '../libro-rest.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Libro } from '../libro';

@Component({
  selector: 'app-detalle-libro',
  imports: [],
  templateUrl: './detalle-libro.component.html',
  styleUrl: './detalle-libro.component.scss'
})
export class DetalleLibroComponent {
   libro:Libro={} as Libro;
  
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


