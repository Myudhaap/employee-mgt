import { createReducer, on } from "@ngrx/store";
import { IEmployee, IEmployees } from "../../core/models/employee.interface";
import { getAllEmployeeFailure, getAllEmployeeSuccess, getByIdEmployeeFailure, getByIdEmployeeSuccess } from "./employee.action";

export interface EmployeeState{
    employees: IEmployees | null,
    employee: IEmployee | null,
    error: string | null,
    history: any | null
}

export const initialEmployeeState: EmployeeState = {
    employees: null,
    employee: null,
    error: null,
    history: null
}

export const EMployeeReducer = createReducer(
    initialEmployeeState,
    on(getAllEmployeeSuccess, (state, {employees, history}) => ({
        ...state,
        employees,
        error: null,
        history
    })),
    on(getAllEmployeeFailure, (state, {errorMessage}) => ({
        ...state,
        error: errorMessage
    })),
    on(getByIdEmployeeSuccess, (state, {employee}) => ({
        ...state,
        error: null,
        employee: employee
    })),
    on(getByIdEmployeeFailure, (state, {errorMessage}) => ({
        ...state,
        employee: null,
        error: errorMessage
    }))
)

