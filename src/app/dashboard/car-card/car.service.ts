import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private httpClient: HttpClient) {}

  public fetchCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>('http://localhost:3000/cars-all');
  }
}
