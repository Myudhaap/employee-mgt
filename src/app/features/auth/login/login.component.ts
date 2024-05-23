import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthAction from "../../../states/auth/auth.action"
import { Observable } from 'rxjs';
import { selectError, selectUsername } from '../../../states/auth/auth.selector';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent{
  loginForm: FormGroup
  @Input() isPasswordShow: boolean = false
  error$!: Observable<string | null>
  username$!: Observable<string | undefined>

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private messageService: MessageService,
    private route: Router
  ){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.error$ = this.store.select(selectError)
    this.username$ = this.store.select(selectUsername)
  }
  
  onToggleShowPassword(){
    this.isPasswordShow = !this.isPasswordShow
  }

  showToast(){
    this.messageService.add({severity: 'success', summary: 'Heading', detail: "Message Content"})
  }

  async onSubmit(){
    const data = this.loginForm.value
    console.log(data)
    this.store.dispatch(AuthAction.signin({payload: data}))

    this.error$.subscribe(error => {
      if(error){
        this.messageService.add({severity: 'error', summary: 'Error', detail: error})
        return
      }
    })

    this.username$.subscribe(username => {
      if(username != ""){
        this.messageService.add({
          severity: 'success', 
          summary: 'Success', 
          detail: `Successfully login`,
        })
        this.route.navigate(['/'])
        return
      }
    })
  }

}
