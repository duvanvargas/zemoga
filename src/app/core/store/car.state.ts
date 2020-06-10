import { Person } from '../interfaces/Person';


export default class PersonState {
    persons: Person[];
}

export const initializeState = (): PersonState => {
    return {
        persons: Array<Person>()
    }
}