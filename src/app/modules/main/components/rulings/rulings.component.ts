import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/core/services/Person/person.service';
import { Observable } from 'rxjs';
import { Person } from 'src/app/core/interfaces/Person';

@Component({
  selector: 'app-rulings',
  templateUrl: './rulings.component.html',
  styleUrls: ['./rulings.component.sass']
})
export class RulingsComponent implements OnInit {

  persons$: Observable<Person[]>;
  
  constructor(
    private personService: PersonService
  ) {
  }

  ngOnInit(): void {
    this.getPersons();
  }

  onPersonVoted(): void{
    this.getPersons();
  }
  
  getPersons(): void{
    this.persons$ =this.personService.getPersons();
  }

}
