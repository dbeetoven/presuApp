import { Injectable } from '@angular/core';

import { Cart } from './models/cart';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private carts: BehaviorSubject<Cart[]> = new BehaviorSubject<Cart[]>([]);
    private cart = [];
    private data = [
        {
            category: 'CEMENTO',
            expanded: true,
            products: [
                { id: 0, name: 'HOLCIM x 50KG', unidad: 'BI' },
                { id: 1, name: 'HERCAL x 40KG', unidad: 'BI' },
                { id: 2, name: 'LOMA NEGRA x 50KG', unidad: 'BI' },
                { id: 3, name: 'PLASTICOR', unidad: 'BI' }
            ]
        },
        {
            category: 'ARIDOS',
            products: [
                { id: 4, name: 'ARENA COMUN', unidad: 'Mt3' },
                { id: 5, name: 'PIEDRA PARTIDA', unidad: 'Mt3' }
            ]
        },
        {
            category: 'BLOQUES DE CEMENTO',
            products: [
                { id: 6, name: 'ENCAD 14x20x40', unidad: 'Mil' },
                { id: 7, name: 'MITAD 14x20x20', unidad: 'Mil' },
                { id: 8, name: 'ENCAD 20x20x40', unidad: 'Mil' }
            ]
        }
    ];

    constructor() {}

    public addCartToList(cart: Cart) {
        const carts = this.carts.getValue();
        carts.push(cart);
        this.carts.next(carts);
    }

    getProducts() {
        return this.data;
    }

    public getCart(): BehaviorSubject<Cart[]> {
        return this.carts;
    }

    public restar(carts) {
        this.carts.next(carts);
    }

    public remove(cart: Cart): void {
        console.log(cart);
        const carts = this.carts.getValue();
        const posCart = carts.indexOf(cart);
        if (posCart !== -1) {
            carts.splice(posCart, 1);
        }
        this.carts.next(carts);
    }
}
