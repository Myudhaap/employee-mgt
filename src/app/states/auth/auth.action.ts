import { createAction, props } from "@ngrx/store";
import { IUser } from "../../core/models/user.interface";

export const signin = createAction(
    '[Auth Login] SignIn',
    props<{payload: IUser}>()
)

export const signinSuccess = createAction(
    '[Auth Login] SignIn Success',
    props<{user: IUser}>()
)

export const signinFailure = createAction(
    '[Auth Login] SignIn Failure',
    props<{errorMessage: string}>()
)