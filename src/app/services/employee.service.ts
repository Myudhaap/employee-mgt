import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IEmployee, IEmployees } from '../core/models/employee.interface';
import { employees } from '../data/data';

export interface IGetAllEmployee{
  employees: IEmployees,
  history: any
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeesData: IEmployee[] = employees 

  getAll(page: number = 0, perPage: number = 5, params: any): Observable<IGetAllEmployee>{
    try{
      const start = page * perPage
      const end = start + perPage

      let items: IEmployee[] = [...employees];
      
      if(params?.username != null){
        items = this.employeesData.filter((val: IEmployee) => val.username.toLowerCase().includes(params.username.toLowerCase()))
      }
      
      if(params?.firstName != ''){
        items = this.employeesData.filter((val: IEmployee) => val.firstName.toLowerCase().includes(params.firstName.toLowerCase()))
      }
      
      if(params?.lastName != ''){
        items = this.employeesData.filter((val: IEmployee) => val.lastName.toLowerCase().includes(params.lastName.toLowerCase()))
      }
      
      const res:IEmployees = {
        employees: items.slice(start, end),
        page: page,
        perPage: perPage,
        total: items.length,
        totalPages: Math.ceil(items.length / perPage)
      }

      return of({
        employees: res,
        history: {
          page,
          perPage,
          params
        }
      })

    }catch(e){
      return throwError(new Error("Server Error"))
    }
  }
}
