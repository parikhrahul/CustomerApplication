import { Component } from '@angular/core';
import { Customer } from './CustomerApp.CustomerModel';
import { BaseLogger } from '../Utility/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.CustomerComponent.html',
  styleUrls: ['./CustomerApp.CustomerComponent.css']
})
export class CustomerComponent {
  title = ' Customer Application';
  LogObject: BaseLogger;
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
  constructor(_logger : BaseLogger) {
    this.LogObject = _logger;
    this.LogObject.Log();
  }

  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }

  hasError(typeofvalidator: string, controlname: string): boolean {
    return this.CustomerModel.formGroup.controls[controlname].hasError(typeofvalidator);
  }
}
