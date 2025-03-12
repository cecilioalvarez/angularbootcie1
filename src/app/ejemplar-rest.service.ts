import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ejemplar } from './ejemplar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjemplarRestService {

  constructor(private httpClient:HttpClient) { 
  }
   public buscarTodos():Observable<Ejemplar[]>{
   
    return this.httpClient.get<Ejemplar[]>("http://localhost:8080/webapi/ejemplar");
     }
     public insertar(ejemplar:Ejemplar):Observable<Ejemplar>{
   
       return this.httpClient.post<Ejemplar>("http://localhost:8080/webapi/ejemplar",ejemplar)
   
     
   }
   public buscarUno(isbn:String,numero:number):Observable<Ejemplar>{
   
     return this.httpClient.get<Ejemplar>(`http://localhost:8080/webapi/ejemplar/isbn/${isbn}/numero/${numero}`);
   
   }
   public borrar(isbn:string,numero:number):Observable<Ejemplar>{
   
    return this.httpClient.delete<Ejemplar>(`http://localhost:8080/webapi/ejemplar/isbn/${isbn}/numero/${numero}`);
   } 
  
  }
