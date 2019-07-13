import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherContentComponent } from './weather-content.component';
import { RequestsService } from '../../services/requests.service';
import { WeatherCardComponent } from '../weather-card/weather-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForecastCardComponent } from '../forecast-card/forecast-card.component';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { DebugElement } from '../../../../node_modules/@angular/core';
import { By } from '../../../../node_modules/@angular/platform-browser';

describe('WeatherContentComponent', () => {
  let component: WeatherContentComponent;
  let fixture: ComponentFixture<WeatherContentComponent>;
  let submitButton: DebugElement;
  //let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherContentComponent, WeatherCardComponent, ForecastCardComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
      providers: [ RequestsService, WeatherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should get the weather', () => {
    const service: RequestsService = TestBed.get(RequestsService);
    var tempLocation = 'Buenos Aires';
    service.getWeatherFromParam(tempLocation).subscribe(
      (response) => expect(response.json()).not.toBeNull(),
      (error) => fail(error)
    );
  });

  it ('should get the local IP', () => {
    const service: RequestsService = TestBed.get(RequestsService);
    service.getIpAddress().subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  });

  it('should set quickAccess locations', () => {
    component.ngOnInit();
    expect(component.quickAccess).not.toBeNull();
  });

  it('should check is exist LocationSelected', () => {
    expect(component.locationSelected).not.toBeNull();
  });

  it('should check is exist search button', () => {
    expect(fixture.debugElement.query(By.css('button'))).toBeDefined();
  });

  it('should check is exist search input', () => {
    expect(fixture.debugElement.query(By.css('input'))).toBeDefined();
  });
});
