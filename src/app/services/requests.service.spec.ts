import { TestBed } from '@angular/core/testing';

import { RequestsService } from './requests.service';
import { HttpClientModule } from '@angular/common/http';

describe('RequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: RequestsService = TestBed.get(RequestsService);
    expect(service).toBeTruthy();
  });

  it ('should get the local IP', () => {
    const service: RequestsService = TestBed.get(RequestsService);
    service.getIpAddress().subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  });

  it ('should get the weather', () => {
    const service: RequestsService = TestBed.get(RequestsService);
    var tempLocation = 'Buenos Aires';
    service.getWeatherFromParam(tempLocation).subscribe(
      (response) => expect(response.json()).not.toBeNull(),
      (error) => fail(error)
    );
  });
});
