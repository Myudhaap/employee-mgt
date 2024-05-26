import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IEmployee } from '../../../core/models/employee.interface';
import { selectEmployee } from '../../../states/employee/employee.selector';
import { getByIdEmployee } from '../../../states/employee/employee.action';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  id!: string
  employee$!: Observable<IEmployee | null>
  employee!: IEmployee | null

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private location: Location
  ){
    this.route.paramMap.subscribe(params =>
      this.id = params.get('id') ?? ''
    )

    this.employee$ = this.store.select(selectEmployee)
  }

  ngOnInit(): void {
    this.store.dispatch(getByIdEmployee({id: this.id}))

    this.employee$.subscribe(res => {
      this.employee = res ?? null
    })
  }

  onOk(){
    this.location.back()
  }

}
