import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { CardComponent } from './components/card/card.component';
import { CardBannerComponent } from './components/card-banner/card-banner.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';


@NgModule({
  declarations: [CarsComponent, CardComponent, CardBannerComponent, CardDetailComponent],
  imports: [
    CommonModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
