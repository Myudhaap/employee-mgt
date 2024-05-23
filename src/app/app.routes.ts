import { Routes } from '@angular/router';
import { LayoutMainComponent } from './shared/components/layout/layout-main/layout-main.component';
import { LayoutAuthComponent } from './shared/components/layout/layout-auth/layout-auth.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuardService],
        component: LayoutMainComponent,
    },
    {
        path: "auth",
        component: LayoutAuthComponent,
        loadChildren: () => 
            import("./features/auth/auth.module").then(m => m.AuthModule)
    }
];
