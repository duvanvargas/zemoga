import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsComponent } from './cars.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';

const routes: Routes = [{
  path: '', component: CarsComponent
},{
  path: ':id', component: CardDetailComponent, pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
