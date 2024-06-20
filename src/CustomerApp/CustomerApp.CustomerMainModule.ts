import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { MasterPageComponent } from './master-page/master-page.component';
import { MainRoutes } from './Routing/CustomerApp.MainRouting'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MasterPageComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class CustomerMainModule { }
