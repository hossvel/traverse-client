import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
           
         

        ]
    },
    {
        path: 'login',
        loadComponent: ()=> import('./bussiness/authentication/login/login.component'),
      
    }
   

];
