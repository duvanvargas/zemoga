import { createAction, props } from '@ngrx/store';
import { Car } from '../interfaces/Car';

// action for pre and laod cars

export const BeginGetCarsAction = createAction('[Car] - begin to get cars');
export const BeginGetCarsActionSuccess = createAction('[Car] - begin to get cars success', props<{ payload: Car[]}>());