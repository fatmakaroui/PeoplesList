import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}
  getPeopleList(): Observable<Person[]> {
    return this.http.get<Person[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
  }
  getPeopleByID(id: number): Observable<Person[]> {
    return this.http.get<Person[]>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
