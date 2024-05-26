import { createAction, props } from "@ngrx/store";
import { IEmployees } from "../../core/models/employee.interface";

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