import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { EnviarDatosService, Genero, Carrera } from "../servicios/enviar-datos.service"
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatosCompartidosService } from '../servicios/compartir-datos.service';  

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent implements OnInit {

  carreras: string[] = [];
  generos: string[] = [];
  fecha: string = '';
  selectedGenero: string = '';
  selectedCarrera: string = '';

  constructor( private router: Router, private Registro:EnviarDatosService, private Datos:DatosCompartidosService) {}



  ngOnInit() {
    this.Registro.obtenerGeneros().subscribe({
      next: (data: Genero[]) => {
        this.generos = data.map((item) => item.genero);
      },
      error: (error) => {
        console.error('Error al obtener los géneros:', error);
      },
      complete: () => {
        console.log('Petición completada');
      }
    });


    this.Registro.obtenerCarreras().subscribe({
      next: (data: Carrera[]) => {
        this.carreras = data.map((item) => item.carrera);
      },
      error: (error) => {
        console.error('Error al obtener las carreras:', error);
      },
      complete: () => {
        console.log('Petición completada');
      }
    });

  }


  actualizarGenero(genero: string) {
    this.Datos.setSelectedGenero(genero);
  }

  actualizarCarrera(carrera: string) {
    this.Datos.setSelectedCarrera(carrera);
  }

  actualizarFecha(fecha: string) {
    this.Datos.setFecha(fecha);
  }


  Enviar_datos(){
    console.log(this.selectedGenero)
    console.log(this.selectedCarrera)
    console.log(this.fecha)

    this.router.navigateByUrl("/calculadora");

  }

}
