import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'soldOut',
  standalone: true
})
export class SoldOutPipe implements PipeTransform {

  transform(QTY: number): string | null {
    if (QTY > 100) {
      return null;
    } else {
      return "Low Quantity ";
    }
  }

}
