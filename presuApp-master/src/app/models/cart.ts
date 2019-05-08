export interface Cart {
    id: number;
    name: string;
    unidad: number;
    title: string;
    expanded?: boolean;
    idUnidad?: number;
    unity?: any;
    count?: number;
}

export class Cart {
    constructor(obj: Cart) {
        Object.assign(this, obj);
    }
}