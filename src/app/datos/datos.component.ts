import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {

  constructor( private router: Router) {}


  datos() {

    this.router.navigateByUrl("/calculadora");
  }

}
