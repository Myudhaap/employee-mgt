import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";

export const selectAuthFeature = createFeatureSelector<AuthState>('auth')

export const selectUsername = createSelector(
    selectAuthFeature,
    (state: AuthState) => state.username
)

export const selectError = createSelector(
    selectAuthFeature,
    (state: AuthState) => state.error
)