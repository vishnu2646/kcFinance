import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { ApiService } from 'src/app/services/apiservice/api.service';
import { IpserviceService } from 'src/app/services/ipservice/ipservice.service';
import { IUser, IUserList } from 'src/app/types/types';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    private router = inject(Router);

    private ipService = inject(IpserviceService);

    private apiService = inject(ApiService);

    public user = {
        userId: '',
        UsrName: '',
        UsrPwd: '',
        ComCode: 0,
        SessionId: '',
        IPAddress: '',
        ComId: 'GRANT000000000000001',
    }

    public selectedUser: any;

    public userList: IUser[] = [];

    public ngOnInit() {
        const sessionId = uuidv4();
        this.user.SessionId = sessionId;
        this.handleUpdateIpAddress();
        this.handleGetUserList();
    }

    public handleSelectUser(event: IUser) {
        const user = event;
        this.selectedUser = user;
        this.user.UsrName = user.UsrName as string;
        this.user.userId = user.UsrId as string;
    }

    public handleLogin() {
        this.apiService.loginService(this.user).subscribe({
            next: (response) => {
                const data = response.CheckLogin.Table[0];
                data.sessionId = this.user.SessionId;
                sessionStorage.setItem('data', JSON.stringify(data));
                this.router.navigate(['/delivery/home']);
            },
            error: (error) => {
                console.log(error);
            },
            complete: () => {
                console.log("complete");
            }
        });
    }

    private handleGetUserList() {
        this.apiService.getUserListService().subscribe((data: IUserList) => {
            const { Table } = data.GetUserName;
            this.userList = Table;
        })
    }

    private handleUpdateIpAddress() {
        this.ipService.getIpAddress().subscribe((data: any) => {
            if(Object.keys(data).includes('ip')) {
                this.user.IPAddress = data['ip'];
            }
        });
    }
}
