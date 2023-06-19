export class User {
    id:number;
    name:string;
    username:string;
    password:string;
    email:string;
    contactNo:number;
    accounts?:Account[];
}

class Account{
    number:number;
    balance:number;
}
