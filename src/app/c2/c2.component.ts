import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-c2',
  imports: [NgFor],
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.scss'
})
export class C2Component {

  listaNombres:string[]=["pepe","ana","gema"];

}
