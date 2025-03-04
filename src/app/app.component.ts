import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { C5Component } from './c5/c5.component';
import { C6Component } from './c6/c6.component';
import { C7Component } from './c7/c7.component';
import { ListasociosComponent } from './listasocios/listasocios.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet
    ,C1Component,
    C2Component,
    C3Component,
    C4Component,
    C5Component,C6Component,C7Component,ListasociosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'miapp2';
}
