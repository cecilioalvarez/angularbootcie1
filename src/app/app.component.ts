import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { ListalibrosComponent } from './listalibros/listalibros.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { C8Component } from './c8/c8.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet
    ,ListalibrosComponent,FormularioLibroComponent,RouterModule,C8Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'miapp2';
}
