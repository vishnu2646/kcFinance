import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryComponent } from './delivery.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
    declarations: [
        DashboardComponent,
        DeliveryComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class DeliveryModule { }
