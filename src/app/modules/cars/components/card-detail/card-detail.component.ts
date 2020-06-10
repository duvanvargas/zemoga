import { Component, OnInit } from '@angular/core';
import CarState from 'src/app/core/store/car.state';
import { Store } from '@ngrx/store';
import { BeginGetCarsAction, BeginGetCarsActionSuccess } from 'src/app/core/store/car.action';
import { CarService } from 'src/app/core/services/Car/car.service';
import { Car } from 'src/app/core/interfaces/Car';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.sass']
})
export class CardDetailComponent implements OnInit {

  car : Car;
  constructor(
    private store: Store<{cars: CarState}>,
    private carService: CarService,
  ) { 
    store.dispatch(BeginGetCarsAction());
  }
  
  ngOnInit(): void {
    this.carService.getCars().subscribe(item=>{
      this.car = item.filter(car=> car.id === 1)[0];
    })
  }

}
