import { Component, OnInit, Input } from '@angular/core';
import { FormatData } from '../../models/data-map.model';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.css']
})

export class ForecastCardComponent implements OnInit {
  @Input() forecastday;  
  daysString: any;

  constructor(private formatData: FormatData) { }

  ngOnInit() {
  }
 
  getDayShortString(data) {
    var date = new Date(data);   
    return this.formatData.DaysShortName(date.getDay());
  }

}