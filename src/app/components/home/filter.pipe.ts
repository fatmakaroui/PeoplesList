import { Pipe, PipeTransform } from '@angular/core';
import { Person } from 'src/app/shared/models/person';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: Person[], filterString: string): Person[] {
    if (value.length === 0 || !filterString) {
      return value;
    }
    let filteredUsers: Person[] = [];
    for (let user of value) {
      if (user.name.toLowerCase().includes(filterString.toLowerCase())) {
        filteredUsers.push(user);
      }
    }
    return filteredUsers;
  }
}
