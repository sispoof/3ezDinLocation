import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataViewModule } from "primeng/dataview";
import { CarListComponent } from './car-list/car-list.component';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [HomeComponent, NavbarComponent, HeaderComponent, FooterComponent, CarListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DataViewModule,
    ButtonModule
  ]
})
export class HomeModule { }
 