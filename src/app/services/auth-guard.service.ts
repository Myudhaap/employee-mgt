import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUsername } from '../states/auth/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  username$!: Observable<string | undefined>
  username: string | undefined = ''
  
  constructor(
    private store: Store,
    private router: Router
  ) { 
    this.username$ = this.store.select(selectUsername)
  }

  canActivate(): boolean {
      this.username$.subscribe({
        next: (username) => this.username = username
      })

      if(this.username == ""){
        this.router.navigate(["/auth/login"])
        return false
      }else{
        return true
      }
  }
}
