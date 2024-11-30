import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReciptComponent } from './recipt.component';
import { ReciptFormComponent } from './recipt-form/recipt-form.component';
import { ReciptDashboardComponent } from './recipt-dashboard/recipt-dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/pipe/filter.pipe';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
    declarations: [
        ReciptComponent,
        ReciptFormComponent,
        ReciptDashboardComponent,
        FilterPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        SharedModule
    ]
})
export class ReciptModule { }
