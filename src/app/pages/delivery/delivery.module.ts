import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryComponent } from './delivery.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DeliveryReciptComponent } from './delivery-recipt/delivery-recipt.component';
import { ReciptBillComponent } from './recipt/recipt.component';
import { BillComponent } from './bill/bill.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
    declarations: [
        DashboardComponent,
        DeliveryComponent,
        SearchComponent,
        DeliveryReciptComponent,
        ReciptBillComponent,
        BillComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class DeliveryModule { }
