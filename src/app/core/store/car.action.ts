import { createAction, props } from '@ngrx/store';
import { Person } from '../interfaces/Person';

// action for pre and laod cars

export const BeginGetCarsAction = createAction('[Car] - begin to get persons');
export const BeginGetCarsActionSuccess = createAction('[Car] - begin to get persons success', props<{ payload: Person[]}>());