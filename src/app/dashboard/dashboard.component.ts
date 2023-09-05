import { Component, OnInit } from '@angular/core';
import { CarService } from './car-card/car.service';
import { Observable } from 'rxjs';
import { Car } from './car-card/car';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public cars$!: Observable<Car[]>

  constructor(private carService: CarService) {

  }
  public ngOnInit(): void {
    this.cars$ = this.carService.fetchCars();
  }
}
