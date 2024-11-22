import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatosCompartidosService } from '../servicios/compartir-datos.service';  
import { average_adulto, average_generos, average_programa, EnviarDatosService, registro, registroRequest } from '../servicios/enviar-datos.service';
import { NgApexchartsModule } from "ng-apexcharts";
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ChartType } from 'ng-apexcharts';
import { Router } from '@angular/router';





@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, NgApexchartsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent  {

  constructor(private Datos:DatosCompartidosService, private enviar: EnviarDatosService, private route: Router) {
    this.Datos.Elegir.subscribe((elegir: boolean) => this.elegir = elegir);
    this.Datos.selectedCarrera.subscribe((carrera: number) => this.carrera = carrera);
    this.Datos.selectedGenero.subscribe((genero: number) => this.genero = genero);
    this.Datos.selectedfecha.subscribe((fecha: string) => this.fecha = fecha)}

  carrera!: number;
  genero!: number;
  fecha: string = '';
  elegir!: boolean; 

  Imc!: number;

  peso!: number;
  altura!: number;
  texto!: string;

  chartSeries: ApexAxisChartSeries = [];
  chartOptions: ApexChart = {
    type: 'bar',
    height: 350
  };
 
  chartSeriesEdad: ApexAxisChartSeries = [];
  xaxisEdad: ApexXAxis = { categories: [] };
  
  chartSeriesCarrera: ApexAxisChartSeries = [];
  xaxisCarrera: ApexXAxis = { categories: [] };



  
  
  chartSeriesGenero: ApexAxisChartSeries = [];
  xaxisGenero: ApexXAxis = { categories: [] };




  
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
        this.registrarDatos()

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
    console.log('Petición completada')
    this.GraficasDatos_carreras()
  },


});

 }

 
 GraficasDatos_edades(): void {
   this.enviar.obtenerAverage_adulto().subscribe({
     next: (data) => {
       this.chartSeriesEdad = [
         { name: "IMC Promedio por Edad", data: data.map((item) => item.promedio) }
       ];
       this.xaxisEdad = { categories: data.map((item) => item.edad.toString()) };
     }
   });
 }
 
 GraficasDatos_carreras(): void {
   this.enviar.obtenerAverage_programas().subscribe({
     next: (data) => {
       this.chartSeriesCarrera = [
         { name: "IMC Promedio por Carrera", data: data.map((item) => item.imc_promedio) }
       ];
       this.xaxisCarrera = { categories: data.map((item) => item.programa) };
     },
     error: (error) => {
      console.warn(this.chartSeriesCarrera)
      }
   });
 }
 
 GraficasDatos_generos(): void {
   this.enviar.obtenerAverage_generos().subscribe({
     next: (data) => {
       this.chartSeriesGenero = [
         { name: "IMC Promedio por Género", data: data.map((item) => item.promedio) }
       ];
       this.xaxisGenero = { categories: data.map((item) => item.genero) };
     }
   });
 }



 regresar(): void{
  this.route.navigateByUrl("/datos");
}

 


}  