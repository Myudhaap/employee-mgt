import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterOutlet, provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideState, provideStore } from "@ngrx/store";
import { AuthReducer } from "./states/auth/auth.reducer";
import { provideEffects } from "@ngrx/effects";
import { AuthEffect } from "./states/auth/auth.effect";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EMployeeReducer } from "./states/employee/employee.reducer";
import { EmployeeEffect } from "./states/employee/employee.effect";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";

@NgModule({
    declarations: [AppComponent],
    imports: [
        RouterOutlet,
        BrowserModule,
        BrowserAnimationsModule,
        ToastModule
    ],
    providers: [
        provideRouter(routes),
        provideStore(),
        provideState({name: 'auth', reducer: AuthReducer}),
        provideState({name: 'employee', reducer: EMployeeReducer}),
        provideEffects([AuthEffect, EmployeeEffect]),
        MessageService
    ],
    bootstrap: [AppComponent]
})

export class AppModule{}