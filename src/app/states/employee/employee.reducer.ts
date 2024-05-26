import { createReducer, on } from "@ngrx/store";
import { IEmployees } from "../../core/models/employee.interface";
import { getAllEmployeeFailure, getAllEmployeeSuccess } from "./employee.action";

export interface EmployeeState{
    employees: IEmployees | null,
    error: string | null,
    history: any | null
}

export const initialEmployeeState: EmployeeState = {
    employees: null,
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
    }))
)

