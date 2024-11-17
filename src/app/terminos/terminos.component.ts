import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosCompartidosService } from '../servicios/compartir-datos.service';  

@Component({
  selector: 'app-terminos',
  standalone: true,
  imports: [],
  templateUrl: './terminos.component.html',
  styleUrl: './terminos.component.css'
})
export class TerminosComponent {

  constructor( private router: Router, private Datos: DatosCompartidosService) {}
  elegir: boolean = false;
  


  De_acuerdo(elegir: boolean) {

    this.Datos.setElegir(elegir);
    console.log(elegir)

    this.router.navigateByUrl("/datos");

  }

  no_de_acuerdo(elegir: boolean){

    this.Datos.setElegir(elegir);
    console.log(elegir)

    this.router.navigateByUrl("/calculadora");
  }

 
}



