import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserList } from 'src/app/types/types';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private httpClient = inject(HttpClient);

    private baseUrl = "http://192.168.1.44:2024";

    private key = 'kcf2025';

    public getUserListService(): Observable<IUserList> {
        return this.httpClient.get<IUserList>(`${this.baseUrl}/GetUserName?databaseKey=${this.key}`)
    }

    public loginService(data: any): Observable<any> {
        const { userId, username, UsrPwd, SessionId, ComId, IPAddress } = data;
        return this.httpClient.get<any>(`${this.baseUrl}/CheckLogin?UserId=${userId}&UserName=${username}&OTP=${UsrPwd}&SessionId=${SessionId}&IPAddress=${IPAddress}&ComId=${ComId}&AppKey=n/a&databaseKey=${this.key}`)
    }

    public deliveryPortalService(data: any): Observable<any> {
        const { CLID, OTP } = data;
        return this.httpClient.get<any>(`${this.baseUrl}/GetDeliveryPortal?ClId=${CLID}&AuthCode=${OTP}&databaseKey=${this.key}`)
    }

    public deliveryNoteService(data: any): Observable<any> {
        const { CLID, OTP } = data;
        return this.httpClient.get<any>(`${this.baseUrl}/GetDeliveryNote?ClId=${CLID}&AuthCode=${OTP}&databaseKey=${this.key}`)
    }

    public reciptDetailsService(data: any): Observable<any> {
        const { CLID, OTP, vid, Drid } = data;
        return this.httpClient.get<any>(`${this.baseUrl}/GetReceiptDtls?Vid=${vid}&CLID=${CLID}&Drid=${Drid}&OTP=${OTP}&databaseKey=${this.key}`)
    }

    public saveReciptService(data: any): Observable<any> {
        return this.httpClient.post(`${this.baseUrl}/SaveReceiptSlip?databaseKey=${this.key}`, data);
    }
}
