import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { DashboardComponent } from './pages/delivery/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ReciptFormComponent } from './pages/recipt/recipt-form/recipt-form.component';
import { ReciptDashboardComponent } from './pages/recipt/recipt-dashboard/recipt-dashboard.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'delivery',
        component: DeliveryComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'home',
                component: DashboardComponent
            },
            {
                path: 'recipt',
                component: ReciptDashboardComponent
            },
            {
                path: 'bill/:Vid',
                component: ReciptFormComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
