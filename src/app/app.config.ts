import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { AuthReducer } from './states/auth/auth.reducer';
import { provideEffects } from '@ngrx/effects';
import { AuthEffect } from './states/auth/auth.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({name: 'auth', reducer: AuthReducer}),
    provideEffects([AuthEffect])
  ]
};
