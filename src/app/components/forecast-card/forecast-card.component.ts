import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.css']
})

export class ForecastCardComponent implements OnInit {
  @Input() forecastday;  
  daysString: any;

  constructor() { }

  ngOnInit() {
    this.daysString = new Map(); 
    this.daysString.set(0, 'lun.');
    this.daysString.set(1, 'mar.');
    this.daysString.set(2, 'mie.');
    this.daysString.set(3, 'jue.');
    this.daysString.set(4, 'vie.');
    this.daysString.set(5, 'sab.');
    this.daysString.set(6, 'dom.');
  }
 

  getDayString(data) {
    var date = new Date(data);   
    return this.daysString.get(date.getDay());
  }

}