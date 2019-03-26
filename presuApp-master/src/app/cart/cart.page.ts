import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from './../cart.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { Cart } from '../models/cart';
import { element } from 'protractor';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.page.html',
    styleUrls: ['./cart.page.scss']
})
export class CartPage implements OnInit, OnDestroy {
    selectedItems = [];
    total = 0;
    carts: Cart[];
    public carts$: Subject<any>;

    constructor(private cartService: CartService) {
        this.cartService.getCart().subscribe(carts => {
            this.carts = carts;
            this.getCarts();
        });
    }

    getCarts() {
        const selected = {};
        for (let obj of this.carts) {
            if (selected[obj.id]) {
                selected[obj.id].count++;
            } else {
                selected[obj.id] = { ...obj, count: 1 };
            }
        }
        this.selectedItems = Object.keys(selected).map(key => selected[key]);
        this.total = this.selectedItems.reduce((a, b) => a + b.count, 0);
    }

    public addToCart(id) {
        const cartFound = this.carts.find(cart => cart.id === id);
        this.cartService.addCartToList(cartFound);
    }

    restar(id) {
        const cartIdx = this.carts.findIndex(cart => cart.id === id);
        this.carts.splice(cartIdx, 1);
        this.cartService.restar(this.carts);
    }
    public removeCart(id) {
        const carts = this.carts.filter(cart => cart.id !== id);
        this.cartService.restar(carts);
    }

    public presupuesto() {
        const selected = {};
        for (let obj of this.carts) {
            if (selected[obj.id]) {
                selected[obj.id].count++;
            } else {
                selected[obj.id] = { ...obj, count: 1 };
            }
        }
        const elements = Object.keys(selected).map(key => selected[key]);
        const result = elements.map(e => (e.name = e.count + ': ' + e.name));
        return result.reduce((a, b) => {
            return (a += ', ' + b);
        });
    }
    ngOnInit() {}

    ngOnDestroy(): void {}
}
