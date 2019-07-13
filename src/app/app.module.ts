import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherContentComponent } from './components/weather-content/weather-content.component';
import { ForecastCardComponent } from './components/forecast-card/forecast-card.component';
import { FormatData } from './models/data-map.model';
import { RequestsService } from './services/requests.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherContentComponent,
    ForecastCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument()    
  ],
  providers: [
    FormatData,
    RequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
