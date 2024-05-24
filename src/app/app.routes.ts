import { Routes } from '@angular/router';
import { LayoutMainComponent } from './shared/components/layout/layout-main/layout-main.component';
import { LayoutAuthComponent } from './shared/components/layout/layout-auth/layout-auth.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuardService],
        component: LayoutMainComponent,
        loadChildren: () => 
            import("./features/dashboard/dashboard.module").then(m => m.DashboardModule)
    },
    {
        path: "auth",
        component: LayoutAuthComponent,
        loadChildren: () => 
            import("./features/auth/auth.module").then(m => m.AuthModule)
    },
    {
        path:"**",
        component: NotFoundComponent
    }
];
