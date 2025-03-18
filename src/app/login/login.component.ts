import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  nombre:string="";
  clave:string="";
  constructor(private loginService:LoginService) {

  }

  validar() {

   this.loginService.validar(this.nombre,this.clave).subscribe((datos:Usuario)=> {

      console.log(datos);
   })
  }
}
