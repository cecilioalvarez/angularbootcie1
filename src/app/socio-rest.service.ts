import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socio } from './socio';

@Injectable({
  providedIn: 'root'
})
export class SocioRESTService {

  constructor(private httpClient:HttpClient) {   

   }

   public buscarTodos():Observable<Socio[]> {

    return this.httpClient.get<Socio[]>("http://localhost:8080/webapi/socios");
   }
}
