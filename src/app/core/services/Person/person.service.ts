import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { personMock } from './person.mock';
import { Person } from '../../interfaces/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  public POSITIVE: string = 'POSITIVE';
  public NEGATIVE: string = 'NEGATIVE';
  constructor() { }

  getPersons(): Observable<Person[]>{
    return of(this.getLocalStoragePersons())
  }
  
  votePerson(indexPerson, typeVote): void{
    console.log(indexPerson)
    let persons: Person[] = this.getLocalStoragePersons();
    persons.map(person=>{
      if(person.id == indexPerson){
        if(typeVote == this.POSITIVE){
          person.positiveVotes++;
        }
        if(typeVote == this.NEGATIVE){
          person.negativeVotes++;
        }
      }
      return person;
    })
    this.setLocalStoragePersons(persons);
  }

  getLocalStoragePersons(): any{
    if(window.localStorage.getItem('persons')){
      return JSON.parse(window.localStorage.getItem('persons'))
    }
    return personMock;
  }

  setLocalStoragePersons(personsArr): void{
    window.localStorage.setItem('persons', JSON.stringify(personsArr))
  }


}
