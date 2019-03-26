import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/cart';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
    public carts: Cart[];
    items = [];

    sliderConfig = {
        slidesPerView: 1.6,
        spaceBetween: 10,
        centeredSlides: true
    };

    constructor(private router: Router, private cartService: CartService) {
        this.cartService.getCart().subscribe(carts => {
            this.carts = carts;
        });
    }

    addToCart(cart) {
        this.cartService.addCartToList(cart);
    }
    removeFromCart(cart) {
        this.cartService.remove(cart);
    }

    openCart() {
        this.router.navigate(['cart']);
    }
    ngOnInit() {
        this.items = this.cartService.getProducts();
    }
}
