import { Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { ArrayexComponent } from './arrayex/arrayex.component';
import { RoutingexComponent } from './routingex/routingex.component';

export const routes: Routes = [

    {path:'addition/:msg',component:AdditionComponent},
    {path:'arrayex',component:ArrayexComponent},
    {path:'routingex',component:RoutingexComponent}

];
