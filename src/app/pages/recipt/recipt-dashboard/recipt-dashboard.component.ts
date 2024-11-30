import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiservice/api.service';
import { IDeliveryNote } from 'src/app/types/types';

@Component({
    selector: 'app-recipt-dashboard',
    templateUrl: './recipt-dashboard.component.html',
    styleUrls: ['./recipt-dashboard.component.scss']
})
export class ReciptDashboardComponent implements OnInit {
    private apiService = inject(ApiService);

    public data: IDeliveryNote[] = [];

    public columns: String[] = [];

    public filterValue: String = '';

    public isDataLoading: boolean = false;

    public ngOnInit(): void {
        const sessionData = (sessionStorage.getItem('data'));
        if(sessionData && sessionData?.length > 0) {
            const parsedData = JSON.parse(sessionData);
            this.isDataLoading = !this.isDataLoading;
            this.apiService.deliveryNoteService(parsedData).subscribe({
                next: (response) => {
                    this.data = response.GetDeliveryNote.Table;
                    this.columns = Object.keys(response.GetDeliveryNote.Table[0]);
                },
                error: (error) => {
                    console.log(error);
                },
                complete: () => {
                    this.isDataLoading = !this.isDataLoading;
                }
            })
        }
    }
}
