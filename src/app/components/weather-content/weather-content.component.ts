import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, FormControl } from '@angular/forms';
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
  
    constructor(fb: FormBuilder, private requestsService : RequestsService) { 
      this.fg = fb.group({
        nombre: ['', Validators.compose([          
          this.nombreValidator,
          this.nombreValidatorParametrizable(this.minLongitud)
        ])]
      });
    }
  
    ngOnInit() {
      const elemNombre = <HTMLInputElement>document.getElementById('nombre');
      //var searchResults2= [];
      
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
            function() { console.log("the location is completed")}
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

    getWeather(location){  
      var parentComponent = this;      
      parentComponent.loading = true;      
      this.hasLocation = false;
      this.requestsService.getWeatherFromParam(location).subscribe(
        response => parentComponent.successResult(response),
        error => parentComponent.errorResult(error),
        () => parentComponent.completeResult(),
      );
      return false;
    }

    successResult(response){
      this.locationSelected = response;
      console.log(response)
      this.hasLocation = true;
      this.loading = false;
    }
    errorResult(error){
      this.hasLocation = false;
      this.loading = false;
    }
    completeResult(){
      console.log("the weather location is completed")
    }
}
