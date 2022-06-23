import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/shared/models/person';
import { PersonService } from 'src/app/shared/services/person.service';
@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent implements OnInit {
  currentId: any;
  people: Person | any;
  constructor(
    private activatedRouter: ActivatedRoute,
    private PersonService: PersonService
  ) {
    activatedRouter.params.subscribe((params) => {
      this.currentId = params.id;
    });
    this.getPersonById();
  }

  ngOnInit(): void {}

  getPersonById() {
    this.PersonService.getPeopleByID(this.currentId).subscribe(
      (res) => {
        this.people = res;
        console.log(this.people);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
