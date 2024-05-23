import { Injectable } from '@angular/core';
import { IUser } from '../core/models/user.interface';
import { data } from '../data/data';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signin(payload: IUser): Observable<IUser>{
      if(payload.username == data.user.username && payload.password == data.user.password){
        return of(data.user)
      }else{
        return throwError(new Error("Username or Password not available"))
      }
  }
}
