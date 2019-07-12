import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastCardComponent } from './forecast-card.component';
import { FormatData } from '../../models/data-map.model';

describe('ForecastCardComponent', () => {
  let component: ForecastCardComponent;
  let fixture: ComponentFixture<ForecastCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastCardComponent, FormatData ]
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
});
