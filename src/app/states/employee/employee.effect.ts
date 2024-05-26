import { Injectable } from "@angular/core";
import { EmployeeService } from "../../services/employee.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getAllEmployee, getAllEmployeeFailure, getAllEmployeeSuccess, getByIdEmployee, getByIdEmployeeFailure, getByIdEmployeeSuccess } from "./employee.action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class EmployeeEffect{
    constructor(
        private actions$: Actions,
        private employeeService: EmployeeService
    ){}

    getAllEmployee$ = createEffect(() => 
        this.actions$.pipe(
            ofType(getAllEmployee),
            switchMap(action => 
                this.employeeService.getAll(action.page,action.perPage, action.params).pipe(
                    map(res => getAllEmployeeSuccess({employees: res.employees, history: res.history})),
                    catchError((err: {message: string}) => of(
                        getAllEmployeeFailure({errorMessage: err.message})
                    ))
                )
            )
        )
    )

    getById$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getByIdEmployee),
            switchMap(action =>
                this.employeeService.getById(action.id).pipe(
                    map(res => getByIdEmployeeSuccess({employee: res})),
                    catchError((err: {message: string}) => of(
                        getByIdEmployeeFailure({errorMessage: err.message})
                    ))
                )
            )
        )
    )
}