import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { MasterPageComponent } from './master-page/master-page.component';
import { MainRoutes } from './Routing/CustomerApp.MainRouting'
import { RouterModule } from '@angular/router';
import { BaseLogger,ConsoleLogger, DbLogger, FileLogger } from './Utility/CustomerApp.Logger';

var providersCollection = [];
providersCollection.push({provide: "1", useClass: DbLogger})
providersCollection.push({provide: "2", useClass: ConsoleLogger})
providersCollection.push({provide: BaseLogger, useClass: FileLogger})


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
  providers: [providersCollection],
  bootstrap: [MasterPageComponent]
})
export class CustomerMainModule { }
