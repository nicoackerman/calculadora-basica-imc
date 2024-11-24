import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatosCompartidosService } from '../servicios/compartir-datos.service';  
import { average_adulto, average_generos, average_programa, EnviarDatosService, registro, registroRequest } from '../servicios/enviar-datos.service';
import { NgApexchartsModule } from "ng-apexcharts";
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ChartType } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { GraficasComponent,ChartOptions } from '../graficas/graficas.component';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule


@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, NgApexchartsModule, GraficasComponent, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})


export class CalculadoraComponent  {

  

public grafica1Options: Partial<ChartOptions> = {
 };

public grafica2Options: Partial<ChartOptions> = {
};

public grafica3Options: Partial<ChartOptions> = {
};


  public actualizarGrafica1(datos: number[], categorias: string[], titulo: string): void {
    this.grafica1Options = {
      series: [{ name: "edad", data: datos }],
      chart: { height: 400, width:800, type: "bar" },
      xaxis: { categories: categorias },
      title: { text: titulo, floating: false, align: "center" }
    };
  }

  public actualizarGrafica2(datos: number[], categorias: string[], titulo: string): void {
    this.grafica2Options = {
      series: [{ name: "Datos", data: datos }],
      chart: { height: 400, width:800, type: "bar" },
      xaxis: { categories: categorias },
      title: { text: titulo, floating: false, align: "center" }
    };
  }

  public actualizarGrafica3(datos: number[], categorias: string[], titulo: string): void {
    this.grafica3Options = {
      series: [{ name: "Datos", data: datos }],
      chart: { height: 400, width:800, type: "bar" },
      xaxis: { categories: categorias,position: "top" },
      title: { text: titulo, floating: false, align: "center" }

    };
  }


  constructor(private Datos:DatosCompartidosService, private enviar: EnviarDatosService, private route: Router) {
    this.Datos.Elegir.subscribe((elegir: boolean) => this.elegir = elegir);
    this.Datos.selectedCarrera.subscribe((carrera: number) => this.carrera = carrera);
    this.Datos.selectedGenero.subscribe((genero: number) => this.genero = genero);
    this.Datos.selectedfecha.subscribe((fecha: string) => this.fecha = fecha)}


  mostrarHtml: boolean = false
  carrera!: number;
  genero!: number;
  fecha: string = '';
  elegir!: boolean; 

  Imc!: number;

  peso!: number;
  altura!: number;
  texto!: string;



  
  reiniciar() {
    this.route.navigateByUrl("/dummy", { skipLocationChange: true }).then(() => {
      this.route.navigateByUrl("/calculadora");
    });
  }
  

  imc() {
    this.Imc =this.peso / ((this.altura / 100) ** 2); 
  
    const nuevoimc = document.createElement("p");
    nuevoimc.textContent = `${this.Imc.toFixed(2)}`;

    const resultrango = document.getElementById("rango");
    const resultDiv = document.getElementById("imc");
    console.log(this.Imc)

    if (Number.isFinite(this.Imc) && this.Imc > 0) {

      if (this.Imc < 18.5){
        resultrango!.className = "text-lg font-semibold text-yellow-400"
        this.texto = "Bajo"
       }
  
       else if(this.Imc > 18.5 && this.Imc < 24.9){
        resultrango!.className = "text-lg font-semibold text-green-500"
        this.texto = "Normalidad"
       }
  
       else if (this.Imc> 24.9 && this.Imc < 29.9 ){
        resultrango!.className = "text-lg font-semibold text-orange-500"
        this.texto = "Sobrepeso"
       }
  
       else{
        resultrango!.className = "text-lg font-semibold text-red-500"
        this.texto = "Obesidad"
       }
       
      nuevoimc.className = "text-4xl font-bold text-gray-800";
    
      
      if (resultDiv) {
        resultDiv.innerHTML = '';
        resultDiv.appendChild(nuevoimc);
  
      }
  
      if (resultrango){
        resultrango.innerHTML = ''
        const textNode = document.createTextNode(this.texto);
        resultrango.appendChild(textNode);
        console.log(this.elegir)
        if (this.elegir){
          this.mostrarHtml = true
          this.GraficasDatos_edades()
          this.GraficasDatos_carreras()
          this.GraficasDatos_generos()
          this.registrarDatos()
        }
      }

    }
    else{

      resultDiv!.innerHTML = ''
      resultrango!.innerHTML = ''


    }
} 


registrarDatos(): void {
  
  const registro: registroRequest = {
    fecha_nacimiento: this.fecha,
    genero_id: this.genero,
    programa_id: this.carrera,
    peso_kg: this.peso,
    altura_m: this.altura /100,
    imc_kg_m2: this.Imc,
  }


this.enviar.registro(registro).subscribe({
  next: () => console.log("Registro exitoso"),
  error: (error) => {
    console.error('Error al registrar:', error);
    console.log(registro)
    alert('Hubo un problema al registrar los datos.');
  },
  complete: () =>{
    console.log(registro)
    console.log('Petición completada')
    
  },
});

 }

 GraficasDatos_edades(): void {
  let datos: number[] = [];
  let datos1: string[] = [];


  this.enviar.obtenerAverage_adulto().subscribe({
    next: (data) => {
      datos = datos.concat(data.map((item) => parseFloat(item.imc_promedio.toFixed(2))));
      console.log(datos); 
      datos1 = datos1.concat(data.map((item) => item.edad))
      console.log(datos1)
    },
    error: (err) => {
      console.error('Error al obtener los datos:', err);
    },

    complete: () =>{
      this.actualizarGrafica1(datos,datos1,"IMC promedio por edad (a partir de los 19 años)")
    }
  });
}




GraficasDatos_carreras(): void {
  let datos: number[] = [];
  let datos1: string[] = [];


  this.enviar.obtenerAverage_programas().subscribe({
    next: (data) => {
      datos = datos.concat(data.map((item) => parseFloat(item.imc_promedio.toFixed(2))));
      console.log(datos); 
      datos1 = datos1.concat(data.map((item) => item.programa))
      console.log(datos1)
    },
    error: (err) => {
      console.error('Error al obtener los datos:', err);
    },

    complete: () =>{
      this.actualizarGrafica2(datos,datos1,"iMC promedio de cada carrera académica ")
    }
  });
}


GraficasDatos_generos(): void {
  let datos: number[] = [];
  let datos1: string[] = [];


  this.enviar.obtenerAverage_generos().subscribe({
    next: (data) => {
      datos = datos.concat(data.map((item) => parseFloat(item.imc_promedio.toFixed(2))));
      console.log(datos); 
      datos1 = datos1.concat(data.map((item) => item.genero))
      console.log(datos1)
    },
    error: (err) => {
      console.error('Error al obtener los datos:', err);
    },

    complete: () =>{
      this.actualizarGrafica3(datos,datos1,"IMC promedio por género")
    }
  });
}

 regresar(): void{
  this.route.navigateByUrl("/datos");
}

 


}  