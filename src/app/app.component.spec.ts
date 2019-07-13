import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WeatherContentComponent } from './components/weather-content/weather-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NO_ERRORS_SCHEMA } from '../../node_modules/@angular/core';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, WeatherContentComponent
      ],
      imports: [ FormsModule, HttpClientModule, ReactiveFormsModule ],
      schemas: [
          NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Review the Weather');
  });
});
