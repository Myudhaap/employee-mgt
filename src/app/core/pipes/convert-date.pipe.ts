import { Pipe, PipeTransform } from '@angular/core';
import dayjs from "dayjs";

@Pipe({
  name: 'convertDate',
  standalone: true,
})
export class ConvertDatePipe implements PipeTransform {

  transform(date: string, format: string = "YYYY-MM-DD"): string | null {
    return dayjs(date).format(format)
  }

}
