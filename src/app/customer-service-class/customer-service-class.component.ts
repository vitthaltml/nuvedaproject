import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-service-class',
  templateUrl: './customer-service-class.component.html',
  styleUrls: ['./customer-service-class.component.css']
})
export class CustomerServiceClassComponent implements OnInit {

  constructor() { }
  activeTab = 'home';
  ngOnInit() {
    this.activeTab=this.activeTab;
  }
  
  search(activeTab){
    this.activeTab = activeTab;

  }

}
