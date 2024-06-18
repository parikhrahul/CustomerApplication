import { Component } from '@angular/core';
import { Customer } from './CustomerApp.CustomerModel';

@Component({
  templateUrl: './CustomerApp.CustomerComponent.html',
  styleUrls: ['./CustomerApp.CustomerComponent.css']
})
export class CustomerComponent {
  title = ' Customer Application';
  CustomerModel : Customer = new Customer();
  CustomerModels : Array<Customer> = new Array<Customer>();
  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }

}
