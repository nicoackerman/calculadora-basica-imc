import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class DatosCompartidosService {

  private elegir = new BehaviorSubject<boolean>(false);
  private fechaSubject = new BehaviorSubject<string>('');
  private selectedGeneroSubject = new BehaviorSubject<string>('');
  private selectedCarreraSubject = new BehaviorSubject<string>('');

  constructor() { }


  get fecha() {
    return this.fechaSubject.asObservable();
  }

  get selectedGenero() {
    return this.selectedGeneroSubject.asObservable();
  }

  get selectedCarrera() {
    return this.selectedCarreraSubject.asObservable();
  }

  get Elegir() {
    return this.elegir.asObservable();
  }


  
  setElegir(elegir: boolean) {
    this.elegir.next(elegir);
  }
  
  setFecha(fecha: string) {
    this.fechaSubject.next(fecha);
  }

  setSelectedGenero(genero: string) {
    this.selectedGeneroSubject.next(genero);
  }

  setSelectedCarrera(carrera: string) {
    this.selectedCarreraSubject.next(carrera);
  }
}
