import { Component } from '@angular/core';

@Component({
  selector: 'app-c1',
  imports: [],
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.scss'
})
export class C1Component {

  numero:number=0;

  incrementar () {
    this.numero++;
  }
  decrementar() {
    this.numero--;
  }

}
