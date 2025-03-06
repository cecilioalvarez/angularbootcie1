import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class LibroRestService {

  constructor(private httpClient:HttpClient) {



   }
   public buscarTodos():Observable<Libro[]> {
    return this.httpClient.get<Libro[]>("http://localhost:8080/webapi/libros");
   }
}
