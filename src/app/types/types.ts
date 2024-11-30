
export interface IUser {
    UsrId: String;
    UsrName: String;
}

export interface IUserList {
    GetUserName: {
        Table: IUser[];
    }
}

export interface IStatementList {
    AccId: number;
    CName: String;
    C_Bal_Amt: String;
    C_Bal_Due: String;
    CurrenAmt: String;
    LedgerNo: String;
    MobileNo: String;
    rsid: number;
}

export interface IDeliveryNote {
    Action: number;
    RouteName: String;
    Vcode: String;
    Vid: number;
    Vname: String;
}
