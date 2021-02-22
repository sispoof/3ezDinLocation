import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';

import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent },
                {path:'search/:pris/:retour/:dateD/:dateF', component:CarListComponent,data:{routerName:'search'}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
