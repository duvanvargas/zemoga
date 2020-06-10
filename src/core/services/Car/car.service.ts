import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { carsMock } from './car.mock';
import { Car } from '../../interfaces/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars(): Observable<Car[]>{
    return of(carsMock);
  }
}
