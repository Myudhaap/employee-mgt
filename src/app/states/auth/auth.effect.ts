import { Injectable, inject } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import {Actions, createEffect, ofType} from "@ngrx/effects"

import * as AuthAction from './auth.action'
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class AuthEffect{
    constructor(
        private actions$: Actions,
        private authService: AuthService
    ){}

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthAction.signin),
            switchMap((action) => 
                this.authService.signin(action.payload).pipe(
                    map(res => AuthAction.signinSuccess({user: res})),
                    catchError((error: {message: string}) => of(
                        AuthAction.signinFailure({errorMessage: error.message})
                    ))
                )
            )
        )
    )
}