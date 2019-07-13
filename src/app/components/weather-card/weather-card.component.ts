import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { FormatData } from 'src/app/models/data-map.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})

export class WeatherCardComponent implements OnInit {
  @Input('locationSelected') locationSelected;
  @Input('canAddLocation') canAddLocation: boolean;
  @Output() addQuickAccess: EventEmitter<any>;
  scaleSelected: string = 'C';
  forecastSelected: boolean = false;
  forecastdaySelect: number = 0;
  forecastInfoSelected: boolean = false;
  forecastSelectedData: any;
  
	@HostBinding('attr.class') cssClass = 'col-md-12';

  constructor(private requestsService : RequestsService, private formatData : FormatData) {
    this.addQuickAccess = new EventEmitter();
   }

  ngOnInit() { 
  }

  changeScale(scale){
    this.scaleSelected = scale;
  }  

  forecastSelect(idx){
    this.forecastdaySelect = idx;
    this.forecastSelectedData = this.locationSelected.forecast.forecastday[idx];
    this.forecastInfoSelected = idx == 0 ? false : true;
  }

  formatLastUpdated(data: string){
    var date = new Date(data);
    var day = this.formatData.DaysString(date.getUTCDay());
    var hours = this.formatTime(date.getHours()) + ':' + this.formatTime(date.getMinutes());
    var formatDate = day +' '+hours;
    return formatDate;
  }

  formatTime(time: number){
    if(time < 10){
      return '0'+time;
    }
    return time;
  }

  formatDayString(data:string){
    var date = new Date(data);
    return this.formatData.DaysString(date.getUTCDay());
  }

  formatWeatherCondition(codeCondition: number){
    return this.formatData.WeatherConditionTranslate(codeCondition);
  }

  addToQuickBar(){
    this.addQuickAccess.emit();
  }
}
