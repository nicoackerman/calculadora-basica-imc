import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviarDatosService {

  private apiUrl1 = 'http://localhost:3000/registers'
  private apiUrl2 = 'http://localhost:3000/registers/genders'
  private apiUrl3 = 'http://localhost:3000/registers/programs'
  private apiUrl4 = 'http://localhost:3000/registers/bmi/average/adult'
  private apiUrl5 = 'http://localhost:3000/registers/bmi/average/genders'
  private apiUrl6 = 'http://localhost:3000/registers/bmi/average/programss'
  



  constructor(private http: HttpClient) { }


  registro(credenciales:registroRequest): Observable<registro>{
    return this.http.post<registro>(this.apiUrl1, credenciales);  
  }

  obtenerGeneros(): Observable<Genero[]> {
    return this.http.get<Genero[]>(this.apiUrl2);
  }

  obtenerCarreras(): Observable<Carrera[]> {
    return this.http.get<Carrera[]>(this.apiUrl3);
  }

  obtenerAverage_adulto(): Observable<average_adulto[]> {
    return this.http.get<average_adulto[]>(this.apiUrl4);
  }

  obtenerAverage_generos(): Observable<average_generos[]> {
    return this.http.get<average_generos[]>(this.apiUrl5);
  }

  obtenerAverage_programas(): Observable<average_programa[]> {
    return this.http.get<average_programa[]>(this.apiUrl6);
  }

  
}


export interface Carrera {
  carrera: string;
}

export interface Genero {
  genero: string;
}

export interface average_adulto{
  edad: number,
  promedio: number
}

export interface average_generos{
  genero: string,
  promedio: number
}

export interface average_programa{
  carrera: string,
  promedio: number
}



export interface registroRequest{
  fecha: string,
  genero: string
  carrera: string,
  peso: number,
  altura: number,
  imc: number
  
}

export interface registro{
  fecha: string,
  genero: string
  carrera: string,
  peso: number,
  altura: number,
  imc: number
}