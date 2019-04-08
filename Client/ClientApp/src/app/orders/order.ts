export class Order{
    id: number;
    carId:number;
    userId:number;
    name:string;
    surname:string;
    brand:string;
    model:string;
    beginDate:string;
    endDate:string;
    comment:string;
}
export class UserCombo{
    id: number;
    name: string;
    surname:string;
    birth:string;
    licenseNumber:string;
}
export class CarCombo
{
    id: number;
    brand: string;
    model:string;
    class:string;
    year:number;
    registrationNumber:string;
   
}
export class OrderIns
{
    id:number;
    carId:number;
    userId:number;
    beginDate:string;
    endDate:string;
    comment:string;
}

