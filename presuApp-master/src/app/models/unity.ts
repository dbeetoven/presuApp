export interface Unity{
    id:number;
    descripcion:string;
    title?:string;
}

export class Unity{
    constructor(obj:any){
    Object.assign(this,obj);
    }
}