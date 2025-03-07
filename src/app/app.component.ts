import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { ListalibrosComponent } from './listalibros/listalibros.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet
    ,ListalibrosComponent,FormularioLibroComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'miapp2';
}
