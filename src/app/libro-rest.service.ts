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
  public buscarTodos():Observable<Libro[]>{

 return this.httpClient.get<Libro[]>("http://localhost:8080/webapi/libros");
  }
  public insertar(libro:Libro):Observable<Libro>{

    return this.httpClient.post<Libro>("http://localhost:8080/webapi/libros",libro)

  
}
public buscarUno(isbn:String):Observable<Libro>{

  return this.httpClient.get<Libro>(`http://localhost:8080/webapi/libros/${isbn}`);

}
public borrar(libro:Libro):Observable<Libro> {
  return this.httpClient.delete<Libro>('http://localhost:8080/webapi/libros/${libro.isbn}');
}
}