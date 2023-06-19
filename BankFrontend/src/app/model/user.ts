import { Account } from "./account";

export class User {
    id: number;
    name: string;
    username: string;
    password: string;
    email: string;
    contactNo: number;
    account: Account = new Account();
}

