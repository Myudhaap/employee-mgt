import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyRupiah',
  standalone: true
})
export class CurrencyRupiahPipe implements PipeTransform {

  transform(number: string, showPrefix: boolean = true): string {
    if(number == null) return ''

    const value = parseInt(number)

    const formatVal = new Intl.NumberFormat('id-ID',{
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 2
    }).format(value)

    return showPrefix ? formatVal : formatVal.replace("Rp", "");
  }

}
