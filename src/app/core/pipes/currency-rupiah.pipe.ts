import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyRupiah',
  standalone: true
})
export class CurrencyRupiahPipe implements PipeTransform {

  transform(number: number, showPrefix: boolean = true): string {
    if(number == null) return ''

    const formatVal = new Intl.NumberFormat('id-ID',{
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 2
    }).format(number)

    return showPrefix ? formatVal : formatVal.replace("Rp", "");
  }

}
