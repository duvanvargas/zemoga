import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/core/interfaces/Person';
import { PersonService } from 'src/app/core/services/Person/person.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() person: Person;
  @Output() personVoted: EventEmitter<any> = new EventEmitter();

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit(): void {

  }

  votePositive(indexP): void{
    this.personService.votePerson(indexP, this.personService.POSITIVE)
    this.personVoted.emit(null);
  }

  voteNegative(indexP): void{
    this.personService.votePerson(indexP, this.personService.NEGATIVE)
    this.personVoted.emit(null);
  }
}
