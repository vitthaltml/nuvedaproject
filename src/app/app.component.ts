import { Component } from '@angular/core';
import {Router} from '@angular/router'
import * as $ from 'jquery';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nuvedapage';
  constructor(public router:Router){
    
  }
   ngOnInit() {
                //Toggle Click Function
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  
}
