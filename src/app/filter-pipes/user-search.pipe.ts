import { Pipe, PipeTransform } from '@angular/core';
import { GuncelleDto } from '../dto/GuncelleDto';
import { List } from '../dto/List';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(value: List[], filterText?: any): List[] {
    filterText = filterText?filterText.toLocaleLowerCase():null;

    return filterText?value.filter((v:List) => v.adiSoyadi
    .toLocaleLowerCase().indexOf(filterText) !== -1):value

  }

}
