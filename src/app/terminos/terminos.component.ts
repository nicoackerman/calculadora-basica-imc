import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminos',
  standalone: true,
  imports: [],
  templateUrl: './terminos.component.html',
  styleUrl: './terminos.component.css'
})
export class TerminosComponent {

  constructor( private router: Router) {}




  De_acuerdo() {

    this.router.navigateByUrl("/datos");
  }

  no_de_acuerdo(){

    this.router.navigateByUrl("/calculadora");
  }
 

}



