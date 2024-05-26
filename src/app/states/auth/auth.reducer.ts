import { createReducer, on } from "@ngrx/store"
import * as AuthAction from "./auth.action"

export interface AuthState{
    username: string | undefined,
    error: string | null
}

export const initialAuthState: AuthState = {
    username: '',
    error: null
}

export const AuthReducer = createReducer(
    initialAuthState,
    on(AuthAction.signinSuccess, (state, {user}) => ({
        ...state,
        username: user.username,
        error: null
    })),
    on(AuthAction.signinFailure, (state, {errorMessage}) => {
        return {
            ...state,
            error: errorMessage,
            username: ""
        }
    })
)