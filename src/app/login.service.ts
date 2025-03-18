import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  public validar(nombre:string,clave:string):Observable<Usuario> {
      return this.httpClient.post<Usuario>(`http://localhost:8080/webapi/usuarios/validar`,
        {"nombre":nombre,"clave":clave});
     }
}
