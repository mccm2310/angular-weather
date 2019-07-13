import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestsService } from '../../services/requests.service';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-weather-content',
  templateUrl: './weather-content.component.html',
  styleUrls: ['./weather-content.component.css']
})
export class WeatherContentComponent implements OnInit {
  fg: FormGroup;
  minLongitud = 3;
  locationSelected: {};
  hasLocation: boolean;
  loading: boolean = true;
  quickAccess: any;
  canAddLocation: boolean = false;
  existLocation: boolean;
  setIpLocation: boolean = true;
  
    constructor(fb: FormBuilder, private requestsService : RequestsService) { 
      this.fg = fb.group({
        nombre: ['', Validators.compose([          
          this.nombreValidator,
          this.nombreValidatorParametrizable(this.minLongitud)
        ])]
      });
    }
  
    ngOnInit() {
      this.quickAccess = [
        {location: 'Mendoza', locationToShow: 'Mendoza - Argentina'},
        {location: 'Buenos Aires', locationToShow: 'Buenos Aires - Argentina'},
        {location: 'Bogota', locationToShow: 'Bogotá - Colombia'},
        {location: 'Lima', locationToShow: 'Lima - Perú'},
      ]

      const elemNombre = <HTMLInputElement>document.getElementById('nombre');
      
      fromEvent(elemNombre, 'input')
      .pipe(
          map((e:KeyboardEvent)=>(e.target as HTMLInputElement).value),
          filter(text => text.length > 2),
          debounceTime(300),
          distinctUntilChanged(),
          switchMap((text: string) => this.requestsService.getWeatherFromParam(text)) 
        )
        .subscribe(
            response => parentComponent.successResult(response),
            error => parentComponent.errorResult(error),
            () => parentComponent.completeResult(),
          );     

        var parentComponent = this;
        this.requestsService.getIpAddress()
          .subscribe(
            function(response) { 
              var substrIP = response.split("IP:")
              var formatIP = substrIP[1].substr(1,substrIP[1].length);    
              parentComponent.getWeather(formatIP);   
            },
            function(error) { console.log(error)},
            function() { 
              console.log("the location is completed") ;
            }
        );
    }
  
    nombreValidatorParametrizable(minLong: number): ValidatorFn {
      return ( control: FormControl): { [s:string]: boolean } | null => {
        const l = control.value.toString().trim().length;
  
        if (l > 0 && l < minLong){
          return { minLongNumber: true };
        }
        return null;
      }
    }

    nombreValidator(control: FormControl) : Validators {
      const l = control.value.toString();
  
      var regex = /^[a-zA-Z\s]*$/;
      if (l && !regex.test(l)){
        return { invalidName: true };
      }
      return null;
    }

    addQuickAccess(locationSelected){
      this.quickAccess.push({location: locationSelected.location.name, locationToShow: locationSelected.location.name +' - '+ locationSelected.location.country});
    }

    getWeather(location){  
      var parentComponent = this;      
      parentComponent.loading = true;      
      parentComponent.hasLocation = false;               
      parentComponent.canAddLocation = false;
      this.requestsService.getWeatherFromParam(location).subscribe(
        response => parentComponent.successResult(response),
        error => parentComponent.errorResult(error),
        () => parentComponent.completeResult(),
      );
      return false;
    }

    evalLocation(locationSelected) {
      var parentComponent = this; 
      parentComponent.existLocation = false;
      
      parentComponent.quickAccess.forEach(x => {
        if(x.location == locationSelected.location.name){
          parentComponent.existLocation = true;
        }
      });    

      if(!parentComponent.existLocation && !this.setIpLocation){            
        parentComponent.canAddLocation = true;
      }
    }

    successResult(response){
      this.locationSelected = response;
      this.hasLocation = true;
      this.loading = false;
      this.evalLocation(this.locationSelected);
    }
    errorResult(error){
      this.hasLocation = false;
      this.loading = false;
    }
    completeResult(){      
      this.setIpLocation = false;
      console.log("the weather location is completed")
    }
}
