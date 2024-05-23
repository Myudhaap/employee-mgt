import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from "primeng/toast"
import {ButtonModule} from "primeng/button"
import { MessageService } from 'primeng/api';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule,
  ],
  providers: [MessageService]
})
export class AuthModule { }
