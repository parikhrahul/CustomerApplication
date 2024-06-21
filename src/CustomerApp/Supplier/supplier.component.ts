import { Component, Injector, OnInit } from '@angular/core';
import { BaseLogger } from '../Utility/CustomerApp.Logger';

@Component({
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  LogObject: BaseLogger;

  constructor(_injector:Injector) {
    this.LogObject = _injector.get("2");
    this,this.LogObject.Log();
  }

  ngOnInit(): void {
  }

}
