import { createReducer,on, Action } from '@ngrx/store';
import CarState, { initializeState } from './car.state';
import * as CarActions from './car.action';


export const reducer = createReducer(initializeState(),
    on(CarActions.BeginGetCarsAction,(state: CarState)=>({...state})),
    on(CarActions.BeginGetCarsActionSuccess,(state: CarState, {payload})=>({...state, cars: payload})),
)


// export reducer to use in all modules
export function CarReducer(state: CarState, action: Action){
    return reducer(state, action);
}