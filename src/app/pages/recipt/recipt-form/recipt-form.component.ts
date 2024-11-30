import { formatDate } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/apiservice/api.service';

@Component({
    selector: 'app-recipt-form',
    templateUrl: './recipt-form.component.html',
    styleUrls: ['./recipt-form.component.scss']
})
export class ReciptFormComponent implements OnInit {
    private apiService = inject(ApiService);

    private activatedRoute = inject(ActivatedRoute);

    private router = inject(Router);

    private id = 0;

    private date: String = '';

    public vcode: String = '';

    public balance: String = '';

    public seletedMode: any;

    public isRefvisible: boolean = false;

    public modes: {PMName: String}[] = [];

    public formData = {
        SqlAction: "insert",
        RecId: 0,
        RecNo:'',
        RecDate: '',
        SessionId: "",
        DriverName: "",
        DriverId: "",
        Vid: "",
        VCode: "",
        Vname: "",
        PayMode: "",
        ReceiptAmt: "",
        RefNumber: "",
        Note: "",
        ClId: 0,
        AuthCod: ""
    }

    constructor() {
        this.id = this.activatedRoute.snapshot.params['Vid'];
        this.vcode = this.activatedRoute.snapshot.params['Vcode'];
        this.date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    }

    public ngOnInit(): void {
        const sessionData = (sessionStorage.getItem('data'));
        if(sessionData && sessionData?.length > 0) {
            const parsedData = JSON.parse(sessionData);
            parsedData['vid'] = this.id;
            this.apiService.reciptDetailsService(parsedData).subscribe({
                next: (response) => {
                    const { Table, Table1, Table2 } = response.GetReceiptDtls;
                    this.balance = Table1[0].BalanceAmount || 0;
                    this.modes = Table2;
                    this.formData.RecDate = this.date.toString();
                    this.formData.SessionId = parsedData.sessionId;
                    this.formData.ClId = parsedData.CLID;
                    this.formData.VCode = Table[0].VCode;
                    this.formData.Vname = Table[0].Vname;
                    this.formData.Vid = Table[0].Vid;
                },
                error: (error) => {
                    console.log(error);
                },
                complete: () => {
                    console.log("completed");
                }
            })
        }
    }

    public handleSelectMode(event: any) {
        this.seletedMode = event;
        this.formData.PayMode = this.seletedMode.PMName;
        if(this.formData.PayMode !== "CASH") {
            this.isRefvisible = true;
        } else {
            this.isRefvisible = false;
        }
    }

    public async hanldeSaveRecipt() {
        try {
            const response = await lastValueFrom(this.apiService.saveReciptService(this.formData))
            if(response.SaveReceiptSlip) {
                const { Table } = response.SaveReceiptSlip;
                if(Table[0].Results === 1) {
                    this.router.navigate(['/delivery/home'])
                }
            }
        } catch (error) {
            console.log("Error", error);
        }
    }
}
