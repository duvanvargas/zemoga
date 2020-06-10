import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/core/services/Person/person.service';
import { Person } from 'src/app/core/interfaces/Person';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  voted: boolean = false;
  person: Person;
  constructor(
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    this.getPerson()
  }
  
  getPerson(): void{
    this.personService.getPersons().subscribe(items => {
      this.person = items.find(item => item.id==5);
    })
  }

  onVotedBar(): void{
    this.voted = !this.voted;
    this.getPerson();
  }

}
