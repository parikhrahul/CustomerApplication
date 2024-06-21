import { Component, Injector, OnInit } from '@angular/core';
import { BaseLogger } from '../Utility/CustomerApp.Logger';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  LogObejct : BaseLogger;
  constructor(_injector: Injector) {
    this.LogObejct = _injector.get("1");
    this.LogObejct.Log();

  }


  ngOnInit(): void {
  }

}
