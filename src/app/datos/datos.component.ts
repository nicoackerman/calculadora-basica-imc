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

  carreraID!: number;
  generosID!: number;

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
        console.log(data);
        this.carreras = data.map((item) => item.programa);
      },
      error: (error) => {
        console.error('Error al obtener las carreras:', error);
      },
      complete: () => {
        console.log(this.carreras);
        console.log('Petición completada');
      }
    });

  }



  actualizarGenero(genero: string) {

    const id_genero = this.Registro.generarIDGenero(genero)

    this.Registro.actualizarApiUrl7(id_genero)

    this.Registro.obtenerIDGeneros().subscribe({
      next: (id: number) => {
        this.generosID = id;
      },
      error: (error) => {
        console.error('Error al obtener los géneros:', error);
      },
      complete: () => {
        console.log(this.generosID);
        this.Datos.setSelectedGenero(this.generosID);
        console.log('Petición completada');
      }
    });
  }
  

  actualizarCarrera(carrera: string) {

    const id_carrera = this.Registro.generarIDPrograma(carrera)

    this.Registro.actualizarApiUrl8(id_carrera)


    this.Registro.obtenerIDCarreras().subscribe({
      next: ( id: number ) => {
        this.carreraID = id;
      },
      error: (error) => {
        console.error('Error al obtener los géneros:', error);
      },
      complete: () => {

        console.log(this.carreraID);

        this.Datos.setSelectedCarrera(this.carreraID);
        console.log('Petición completada');
      }
    });
  }




  actualizarFecha(fecha: string) {
    this.Datos.setSelectedfecha(fecha);
  }


  Enviar_datos(){

    
    if (!this.selectedCarrera || !this.selectedGenero || !this.fecha) {
      alert('Por favor complete todos los campos.');
      return;
    }


    this.actualizarGenero(this.selectedGenero);
    this.actualizarCarrera(this.selectedCarrera);
    this.actualizarFecha(this.fecha);


    console.log(this.selectedGenero)
    console.log(this.selectedCarrera)
    console.log(this.fecha)

    this.router.navigateByUrl("/calculadora");

  }

}
