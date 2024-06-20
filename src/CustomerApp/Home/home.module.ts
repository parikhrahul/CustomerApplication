import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home.component';
import { HomeRoutes } from '../Routing/CustomerApp.HomeRouting';




@NgModule({
  
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(HomeRoutes),
    CommonModule,FormsModule
  ],bootstrap: [HomeComponent]
})
export class HomeModule { }
