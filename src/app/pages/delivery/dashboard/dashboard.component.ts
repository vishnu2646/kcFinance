import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiservice/api.service';
import { IStatementList } from 'src/app/types/types';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    private apiService = inject(ApiService);

    public column: String[] = [];

    public data: IStatementList[] = [];

    public isDataLoading: boolean = false;

    public ngOnInit(): void {
        const sessionData = (sessionStorage.getItem('data'));
        if(sessionData && sessionData?.length > 0) {
            const parsedData = JSON.parse(sessionData);
            this.isDataLoading = !this.isDataLoading;
            this.apiService.deliveryPortalService(parsedData).subscribe({
                next: (response) => {
                    this.data = response.GetDeliveryPortal.Table;
                    this.column = Object.keys(this.data[0]);
                },
                error: (error) => {
                    console.log(`error:`, error);
                },
                complete: () => {
                    this.isDataLoading = !this.isDataLoading;
                }
            })
        }
    }
}
