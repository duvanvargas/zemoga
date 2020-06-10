import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/interfaces/Car';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/core/services/Car/car.service';
import { Store, select } from '@ngrx/store';
import CarState from 'src/app/core/store/car.state';
import { BeginGetCarsAction, BeginGetCarsActionSuccess } from 'src/app/core/store/car.action';
import { carsMock } from 'src/app/core/services/Car/car.mock';

@Component({
  selector: 'app-card-banner',
  templateUrl: './card-banner.component.html',
  styleUrls: ['./card-banner.component.sass']
})
export class CardBannerComponent implements OnInit {
  cars$: Observable<CarState>;
  carActive: Car;

  constructor(
    private carService: CarService,
    private store: Store<{ cars: CarState}>
  ) {
    store.dispatch(BeginGetCarsAction());
    this.cars$ = store.pipe(select('cars'));
  }

  ngOnInit(): void {
    this.getRandomCar();
  }
  
  getRandomCar(): void{
    this.carService.getCars().subscribe(items=>{
      this.carActive = items[Math.floor(Math.random() * carsMock.length)];
      this.store.dispatch(BeginGetCarsActionSuccess({ payload:items }));
    });
  }

  nextSlide(): void{
    this.carActive = carsMock[Math.floor(Math.random() * carsMock.length)];
  }

  previousSlide(): void{
    this.carActive = carsMock[Math.floor(Math.random() * carsMock.length)];
  }
}
