import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { C5Component } from './c5/c5.component';
import { C6Component } from './c6/c6.component';
import { C7Component } from './c7/c7.component';
import { ListalibrosComponent } from './listalibros/listalibros.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { C8Component } from './c8/c8.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet
    ,C1Component,
    C2Component,
    C3Component,
    C4Component,
    C5Component,C6Component,C7Component,ListalibrosComponent,FormularioLibroComponent,C8Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'miapp2';
}
