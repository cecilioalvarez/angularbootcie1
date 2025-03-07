import { Routes } from '@angular/router';
import { ListalibrosComponent } from './listalibros/listalibros.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';

export const routes: Routes = [

    {path:"listalibros",component:ListalibrosComponent},
    {path:"formulariolibros",component:FormularioLibroComponent},
    {path:"",component:ListalibrosComponent},
    
    
];
