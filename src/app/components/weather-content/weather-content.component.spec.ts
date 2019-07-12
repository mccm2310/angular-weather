import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherContentComponent } from './weather-content.component';
import { RequestsService } from '../../services/requests.service';
import { WeatherCardComponent } from '../weather-card/weather-card.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('WeatherContentComponent', () => {
  let component: WeatherContentComponent;
  let fixture: ComponentFixture<WeatherContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherContentComponent, RequestsService, WeatherCardComponent ],
      imports: [ReactiveFormsModule],
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
});
