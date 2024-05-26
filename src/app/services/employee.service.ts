import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { IEmployee, IEmployees } from '../core/models/employee.interface';
import { employees } from '../data/data';
import {v4 as uuidv4} from 'uuid'
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

      let items: IEmployee[] = [...this.employeesData];
      let sortedItems: IEmployee[] = [...items];
      
      if(params?.username != null){
        sortedItems = sortedItems.filter((val: IEmployee) => val.username.toLowerCase().includes(params.username.toLowerCase()))
      }
      
      if(params?.firstName != ''){
        sortedItems = sortedItems.filter((val: IEmployee) => val.firstName.toLowerCase().includes(params.firstName.toLowerCase()))
      }
      
      if(params?.lastName != ''){
        sortedItems = sortedItems.filter((val: IEmployee) => val.lastName.toLowerCase().includes(params.lastName.toLowerCase()))
      }

      if(params?.sort){
        let field = params.sort.field
        let order = params.sort.order
        
        sortedItems.sort((a: IEmployee, b: IEmployee): number => {
          let valueA = a[field]
          let valueB = b[field]
    
          if (typeof valueA === 'string') {
            valueA = valueA.toLowerCase();
          }
          if (typeof valueB === 'string') {
            valueB = valueB.toLowerCase();
          }
      
          let result = 0;
          if (valueA < valueB) {
            result = -1;
          } else if (valueA > valueB) {
            result = 1;
          }
      
          return order === 'asc' ? result : -result;
        })
      }
      
      const res:IEmployees = {
        employees: sortedItems.slice(start, end),
        page: page,
        perPage: perPage,
        total: sortedItems.length,
        totalPages: Math.ceil(sortedItems.length / perPage)
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

  getById(id: string): Observable<IEmployee>{
    try{
      const res = this.employeesData.find(val => val.id == id)

      if(!res) return throwError(new Error("Employee not found"))
      return of(res)
    }catch(e){
      return throwError(new Error("Server error"))
    }
  }

  addEmployee(employee: IEmployee): Observable<IEmployees>{
    try{
      if(!employee) throw Error()

      const uuid = uuidv4()
      console.log(uuid)
      this.employeesData.push({...employee, id: uuid})

      const res:IEmployees = {
        employees: this.employeesData.slice(0, 5),
        page: 0,
        perPage: 5,
        total: this.employeesData.length,
        totalPages: Math.ceil(this.employeesData.length / 5)
      }

      return of(res)
    }catch(e){
      return throwError(new Error("Server Error"))
    }
  }
}
