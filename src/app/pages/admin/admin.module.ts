import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AdminComponent,
        AdminDashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class AdminModule { }
