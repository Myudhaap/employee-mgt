import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IEmployee, IEmployees } from '../../core/models/employee.interface';
import { selectEmployeeError, selectEmployees, selectHistoryEmployee } from '../../states/employee/employee.selector';
import { getAllEmployee } from '../../states/employee/employee.action';
import { Paginator } from 'primeng/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {
  employees$!: Observable<IEmployees | null>
  error$!: Observable<string | null>
  history$!: Observable<any>

  @ViewChild('paginator') paginator: Paginator | undefined
  filterForm!: FormGroup

  totalRecords: number = 0
  rows: number = 5
  page: number = 0
  employees!: IEmployee[]
  loading: boolean = true;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private messageService: MessageService
  ){
    this.employees$ = this.store.select(selectEmployees)
    this.error$ = this.store.select(selectEmployeeError)
    this.history$ = this.store.select(selectHistoryEmployee)

    this.history$.subscribe(res => {
      this.filterForm = this.fb.group({
        username: [res ? res.params.username : ''],
        firstName: [res ? res.params.firstName : ''],
        lastName: [res ? res.params.lastName : '']
      })

      this.page = res ? res.page : 0
      this.rows = res ? res.perPage : 5
    })
    

    this.fetchEmployee(this.page, this.rows, this.filterForm.value)
  }

  fetchEmployee(page: number, perPage: number, params: any){
    this.store.dispatch(getAllEmployee({page, perPage, params}))

    this.employees$.subscribe((res) => {
      this.employees = res?.employees ? [...res.employees] : []
      this.totalRecords = res?.total ?? 5
      this.loading = false
    })

    this.error$.subscribe(err => {
      if(err) console.log(err)
    })
  }

  onPageChange(event: any){
    this.fetchEmployee(event.page, event.rows, this.filterForm.value)
    this.page = event.page
  }

  resetPaginator(){
    this.paginator?.changePage(0)
  }

  async onSubmit(){
    const data = this.filterForm.value
    this.page = 0
    this.fetchEmployee(this.page, this.rows, data)
  }

  onEdit(value: IEmployee){
    this.messageService.add({ severity: 'warn', summary: 'Edited', detail: `Content with username: ${value.username} edited.` });
  }

  onDelete(value: IEmployee){
    this.messageService.add({ severity: 'error', summary: 'Deleted', detail: `Content with username: ${value.username} deleted.` });
  }
}
