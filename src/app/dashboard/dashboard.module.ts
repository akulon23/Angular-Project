import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCardComponent } from './car-card/car-card.component';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from './car-card/car.service';

@NgModule({
  declarations: [CarCardComponent, DashboardComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [DashboardComponent]
})
export class DashboardModule {}
