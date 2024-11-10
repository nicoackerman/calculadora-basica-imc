import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./Inicio/inicio.component').then(m => m.InicioComponent),
    children:[
        {
            path: '**',
            redirectTo: 'inicio',
            pathMatch: 'full'  
        },

        {
            path: 'terminos',
            title: "terminos y condiciones",
            loadComponent: () => import('./Inicio/terminos/terminos.component').then(m => m.TerminosComponent),
            children:[
                {path: "datos",
                title: "llenar datos",
                loadComponent: () => import('./Inicio/terminos/datos/datos.component').then(m => m.DatosComponent)
                },

                {
                    path:"calculadora",
                    title: "calculadora imc",
                    loadComponent: () => import('./Inicio/terminos/datos/calculadora/calculadora.component').then(m => m.CalculadoraComponent)
                }

            ]
        }     
    ]
  },

  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/inicio'
  }
];