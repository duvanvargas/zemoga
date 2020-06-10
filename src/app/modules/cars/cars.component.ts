import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/core/services/Car/car.service';
import { Observable } from 'rxjs';
import { Car } from 'src/app/core/interfaces/Car';
import CarState from 'src/app/core/store/car.state';
import { Store, select } from '@ngrx/store';
import { BeginGetCarsAction, BeginGetCarsActionSuccess } from 'src/app/core/store/car.action';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.sass']
})
export class CarsComponent implements OnInit {

  cars$: Observable<CarState>;

  constructor(
    private carService: CarService,
    private store: Store<{ cars: CarState}>
  ) {
    store.dispatch(BeginGetCarsAction());
    this.cars$ = store.pipe(select('cars'));
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe(items=>{
      this.store.dispatch(BeginGetCarsActionSuccess({ payload:items }));
    });
  }

}
