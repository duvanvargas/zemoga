import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonService } from 'src/app/core/services/Person/person.service';

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.sass']
})
export class HeaderCardComponent implements OnInit {

  voted: boolean = false;
  @Output() votedBar: EventEmitter<any> = new EventEmitter;
  constructor(
    private personService: PersonService
  ) { }

  ngOnInit(): void {
  }

  voteAgain(): void{
    this.votedBar.emit(null);
    this.voted = false;
  }

  votePositive(idxPerson): void{
    this.voted = true;
    this.personService.votePerson(idxPerson,this.personService.POSITIVE);
    this.votedBar.emit(null);
  }
  voteNegative(idxPerson): void{
    this.voted = true;
    this.personService.votePerson(idxPerson,this.personService.NEGATIVE);
    this.votedBar.emit(null);
  }
}
