import { Routes } from '@angular/router';
import { LayoutMainComponent } from './shared/components/layout/layout-main/layout-main.component';
import { LayoutAuthComponent } from './shared/components/layout/layout-auth/layout-auth.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutMainComponent,
    },
    {
        path: "auth",
        component: LayoutAuthComponent
    }
];
