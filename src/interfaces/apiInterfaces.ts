export interface User {
    Id: number
    Name: string,
    Lastname:string,
    Email:string,
    Phone:string,
    IdRol:number
    Img:string,
    Password:string
}

export interface Note {
    Id: number,
    Title: string,
    Description:string,
    ExpiriationDate:string,
    IdTypeOfNote:number
    IdUser:number
    Location:string,
    CreationHour:string,
}