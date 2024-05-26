import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeeState } from "./employee.reducer";

export const selectEmployeeFeature = createFeatureSelector<EmployeeState>('employee')

export const selectEmployees = createSelector(
    selectEmployeeFeature,
    (state: EmployeeState) => state.employees
)

export const selectEmployeeError = createSelector(
    selectEmployeeFeature,
    (state: EmployeeState) => state.error
)

export const selectHistoryEmployee = createSelector(
    selectEmployeeFeature,
    (state: EmployeeState) => state.history
)

export const selectEmployee = createSelector(
    selectEmployeeFeature,
    (state: EmployeeState) => state.employee
)