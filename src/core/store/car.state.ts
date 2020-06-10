import { Car } from '../interfaces/Car';


export default class CarState {
    cars: Car[];
}

export const initializeState = (): CarState => {
    return {
        cars: Array<Car>()
    }
}