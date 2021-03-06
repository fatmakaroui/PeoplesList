import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/shared/services/person.service';
import { Person } from 'src/app/shared/models/person';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Lists of people';
  peoples: Array<Person> | any;
  placeholder = 'Search';
  searchText!: string;
  loading = false;
  constructor(private PersonService: PersonService, private route: Router) {}
  ngOnInit() {
    this.getPeoplesList();
  }
  getPeoplesList() {
    this.loading = true;
    this.PersonService.getPeopleList().subscribe(
      (res) => {
        this.peoples = res;
        this.loading = false;
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }
}
