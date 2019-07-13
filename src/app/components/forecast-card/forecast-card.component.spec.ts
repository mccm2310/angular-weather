import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastCardComponent } from './forecast-card.component';
import { FormatData } from '../../models/data-map.model';
import { WeatherContentComponent } from '../weather-content/weather-content.component';
import { WeatherCardComponent } from '../weather-card/weather-card.component';
import { FormsModule, ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { By } from '../../../../node_modules/@angular/platform-browser';

describe('ForecastCardComponent', () => {
  let component: ForecastCardComponent;
  let fixture: ComponentFixture<ForecastCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherContentComponent, WeatherCardComponent, ForecastCardComponent],
      imports: [FormsModule, HttpClientModule, ReactiveFormsModule],
      providers: [ FormatData ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should check is exist Forecastday', () => {
    expect(component.forecastday).not.toBeNull();
  });  

  it('should check is exist weather icon', () => {
    expect(fixture.debugElement.query(By.css('img'))).toBeDefined();
  });
});
