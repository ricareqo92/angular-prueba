import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseOne'
})
export class UpperCaseOnePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {

    if ( !value ) {
      return '';
    } else {
      let array: Array<any> = value.split(' ');
      let cad: string = '';

      let arrayUpdate = array.map((word) => word[0].toUpperCase() + word.slice(1, word.length));
      
      arrayUpdate.forEach((word) => {
        cad = cad.concat(' ', word);
      });
      
      return cad;
    }
  }
}
