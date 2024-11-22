import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class DatosCompartidosService {

  private elegir = new BehaviorSubject<boolean>(false);
  private selectedfechaSubject = new BehaviorSubject<string>('');
  private selectedGeneroSubject = new BehaviorSubject<number>(0);
  private selectedCarreraSubject = new BehaviorSubject<number>(0);

  constructor() { }


  get selectedfecha() {
    return this.selectedfechaSubject.asObservable();
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
  
  setSelectedfecha(fecha: string) {
    this.selectedfechaSubject.next(fecha);
  }

  setSelectedGenero(genero: number) {
    this.selectedGeneroSubject.next(genero);
  }

  setSelectedCarrera(carrera: number) {
    this.selectedCarreraSubject.next(carrera);
  }
}
