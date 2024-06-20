import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import { SupplierComponent } from './supplier.component';
import { SupplierRoutes } from '../Routing/CustomerApp.SuplierRouting';



@NgModule({
  declarations: [
      SupplierComponent
  ],
  imports: [
    RouterModule.forChild(SupplierRoutes),
    CommonModule,FormsModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
