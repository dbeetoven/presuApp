import { Injectable } from '@angular/core';

import { Cart } from './models/cart';
import { BehaviorSubject } from 'rxjs';
import { Unity } from './models/unity';

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
                { id: 0, name: 'Hierro aletado 6mm', unidad: 'Un', unity: 'Un' },
                { id: 1, name: 'Hierro aletado 8mm', unidad: 'Un', unity: 'Un' },
                { id: 2, name: 'Hierro aletado 10mm', unidad: 'Un', unity: 'Un' },
                { id: 3, name: 'Hierro aletado 12mm', unidad: 'Un', unity: 'Un' },
                { id: 4, name: 'Hierro aletado 16mm', unidad: 'Un', unity: 'Un' },
                { id: 5, name: 'Malla de hierro 6 15x15 (m2)', unidad: 'Un', unity: 'Un' },
                { id: 6, name: 'Malla de hierro 8 15x15 (m2)', unidad: 'Un', unity: 'Un' },
                { id: 7, name: 'Metal despegado liviano', unidad: 'Un', unity: 'Un' },
                { id: 8, name: 'Metal despegado pesado', unidad: 'Un', unity: 'Un' },
                { id: 9, name: 'Alambre', unidad: 'Kg', unity: 'Kg' }
            ]
        },
        {
            category: 'ARIDOS',
            products: [
                { id: 4, name: 'ARENA COMUN', unidad: 'Mt3', unity: 'Bolsa' },
                { id: 5, name: 'PIEDRA PARTIDA', unidad: 'Mt3', unity: 'Bolsa' }
            ]
        },
        {
            category: 'BLOQUES DE CEMENTO',
            products: [
                { id: 6, name: 'ENCAD 14x20x40', unidad: 'Mil', unity: 'Mil' },
                { id: 7, name: 'MITAD 14x20x20', unidad: 'Mil', unity: 'Mil' },
                { id: 8, name: 'ENCAD 20x20x40', unidad: 'Mil', unity: 'Mil' }
            ]
        }
    ];
    private unities: Unity[];


    constructor() {
        this.unities = [{ id: 1, descripcion: "Kg" },
        { id: 2, descripcion: "Pallet" },
        { id: 3, descripcion: "Mil" },
        { id: 4, descripcion: "Agranel" },
        { id: 5, descripcion: "Paquete" },
        { id: 6, descripcion: "Rollo" },
        { id: 7, descripcion: "Ml" },
        { id: 8, descripcion: "M2" },
        { id: 9, descripcion: "Bolsa" },
        { id: 10, descripcion: "Un" },
        ]
    }

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

    /**
     * getUnities
     */
    public getUnities() {
        return this.unities;
    }
}
