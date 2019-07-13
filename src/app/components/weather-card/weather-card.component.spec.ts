import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardComponent } from './weather-card.component';
import { ForecastCardComponent } from '../forecast-card/forecast-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { FormatData } from '../../models/data-map.model';
import { WeatherContentComponent } from '../weather-content/weather-content.component';
import { DebugElement } from '../../../../node_modules/@angular/core';
import { By } from '../../../../node_modules/@angular/platform-browser';


describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;
  let submitButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherContentComponent, WeatherCardComponent, ForecastCardComponent ],
      imports: [FormsModule, HttpClientModule, ReactiveFormsModule],
      providers: [ FormatData ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();    
    submitButton = fixture.debugElement.query(By.css('button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });  
  
  it('should check is exist Forecast Select', () => {
    expect(component.forecastdaySelect).not.toBeNull();
  });

  it('should check is exist add button', () => {
    expect(fixture.debugElement.query(By.css('button'))).toBeDefined();
  });

  it('should check is exist weather icon', () => {
    expect(fixture.debugElement.query(By.css('img'))).toBeDefined();
  });
});
