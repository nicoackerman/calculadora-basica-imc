import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnviarDatosService {

  private apiUrl1 = 'http://localhost:5000/registers'
  private apiUrl2 = 'http://localhost:5000/registers/genders'
  private apiUrl3 = 'http://localhost:5000/registers/programs'
  private apiUrl4 = 'http://localhost:5000/registers/bmi/average/adult'
  private apiUrl5 = 'http://localhost:5000/registers/bmi/average/genders'
  private apiUrl6 = 'http://localhost:5000/registers/bmi/average/programs'
  private apiUrl7 = 'http://localhost:5000/registers/genders/id?gender='
  private apiUrl8 = 'http://localhost:5000/registers/programs/id?program='



  constructor(private http: HttpClient) { }



  actualizarApiUrl7(nuevaUrl: string): void {
    this.apiUrl7 = nuevaUrl;
    console.warn(this.apiUrl7)

  }
  
  actualizarApiUrl8(nuevaUrl: string): void {
    console.warn(this.apiUrl8)
    this.apiUrl8 = nuevaUrl;
  }
  
  generarIDGenero(gender: string): string {
    this.apiUrl7 = 'http://localhost:5000/registers/genders/id?gender=';
    return this.apiUrl7 + encodeURIComponent(gender);
  }

  generarIDPrograma(programa: string): string {
    this.apiUrl8 = 'http://localhost:5000/registers/programs/id?program=';
    return this.apiUrl8 + encodeURIComponent(programa);
  }

  obtenerIDGeneros(): Observable<number> {
    return this.http.get<{ id: number }>(this.apiUrl7).pipe( 
      map(response => response.id) 
    );
  }
  
  obtenerIDCarreras(): Observable<number> {
    return this.http.get<{ id: number }>(this.apiUrl8).pipe(
      map(response => response.id) 
    );
  }

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


export interface ID {
  id: string;
}

export interface Carrera {
  programa: string;
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
  programa: string,
  imc_promedio: number
}



export interface registroRequest{
  fecha_nacimiento: string,
  genero_id: number
  programa_id: number,
  peso_kg: number,
  altura_m: number,
  imc_kg_m2: number
  
}

export interface registro{
  fecha: string,
  genero: string
  carrera: string,
  peso: number,
  altura: number,
  imc: number
}