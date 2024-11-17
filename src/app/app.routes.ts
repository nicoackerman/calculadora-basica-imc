import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./Inicio/inicio.component').then(m => m.InicioComponent),
  },

  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },

  {
    path: 'terminos',
    title: "terminos y condiciones",
    loadComponent: () => import('./terminos/terminos.component').then(m => m.TerminosComponent),
    
  }, 

  {  

    path: "datos",
    title: "llenar datos",
    loadComponent: () => import('./datos/datos.component').then(m => m.DatosComponent)
  },

  {
    path:"calculadora",
    title: "calculadora imc",
    loadComponent: () => import('./calculadora/calculadora.component').then(m => m.CalculadoraComponent)
  },

  { path: 'dummy',    
    loadComponent: () => import('./calculadora/calculadora.component').then(m => m.CalculadoraComponent)
  },
  
  { path: '', redirectTo: '/calculadora', pathMatch: 'full' }


];