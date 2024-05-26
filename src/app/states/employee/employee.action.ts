import { createAction, props } from "@ngrx/store";
import { IEmployee, IEmployees } from "../../core/models/employee.interface";

export const getAllEmployee = createAction(
    "[Employee] Get All",
    props<{page: number, perPage: number, params: any}>()
)

export const getAllEmployeeSuccess = createAction(
    "[Employee] Get All Failure",
    props<{employees: IEmployees, history: any}>()
)

export const getAllEmployeeFailure = createAction(
    "[Employee] Get All Success",
    props<{errorMessage: string}>()
)

export const getByIdEmployee = createAction(
    "[Employee Detail] Get by id",
    props<{id: string}>()
)

export const getByIdEmployeeSuccess = createAction(
    "[Employee Detail] Get by id success",
    props<{employee: IEmployee}>()
)

export const getByIdEmployeeFailure = createAction(
    "[Employee Detail] Get by id failure",
    props<{errorMessage: string}>()
)

export const addEmployee = createAction(
    "[Employee Add] Add Employee",
    props<{employee: IEmployee}>()
)

export const addEmployeeSuccess = createAction(
    "[Employee Add] Add Employee Success",
    props<{employees: IEmployees}>()
)

export const addEmployeeFailure = createAction(
    "[Employee Add] Add Employee Failure",
    props<{errorMessage: string}>()
)