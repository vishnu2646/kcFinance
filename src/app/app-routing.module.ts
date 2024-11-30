import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { DashboardComponent } from './pages/delivery/dashboard/dashboard.component';
// import { AdminComponent } from './pages/admin/admin.component';
// import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './pages/delivery/search/search.component';
// import { DeliveryReciptComponent } from './pages/delivery/delivery-recipt/delivery-recipt.component';
import { ReciptBillComponent } from './pages/delivery/recipt/recipt.component';
// import { ReciptComponent } from './pages/recipt/recipt.component';
// import { BillComponent } from './pages/delivery/bill/bill.component';
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
                path: 'search',
                component: SearchComponent
            },
            {
                path: 'recipt',
                component: ReciptDashboardComponent
            },
            {
                path: 'payment-recipt',
                component: ReciptBillComponent
            },
            {
                path: 'bill/:Vid',
                component: ReciptFormComponent
            }
        ]
    },
    // {
    //     path: 'admin',
    //     component: AdminComponent,
    //     children: [
    //         {
    //             path: 'home',
    //             component: AdminDashboardComponent
    //         }
    //     ]
    // },
    // {
    //     path: 'recipt',
    //     component: ReciptComponent,
    //     children: [
    //         {
    //             path: 'dashboard',
    //             component: ReciptDashboardComponent
    //         },
    //         {
    //             path: 'bill',
    //             component: ReciptFormComponent
    //         }
    //     ]
    // },
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
