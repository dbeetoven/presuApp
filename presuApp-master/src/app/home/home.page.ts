import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../models/cart';
import { Unity } from '../models/unity';
import { Observable, of } from 'rxjs';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
    public carts: Cart[];
    public unities: Unity[];
    public count: number;
    items = [];

    sliderConfig = {
        slidesPerView: 1.6,
        spaceBetween: 10,
        centeredSlides: true
    };

    constructor(private router: Router, public cartService: CartService) {
        this.cartService.getCart().subscribe(carts => {
            this.carts = carts;
        });
    }
    getCount(el):Observable<number>{
        const elems: Cart[]= Object(this.carts);
        return of(elems.filter(x=>x.id=== el.id).length);
    }
    addToCart(cart) {
        cart.count += 1;
        this.cartService.addCartToList(cart);
    }
    removeFromCart(cart) {
        
        this.cartService.remove(cart);
    }

    openCart() {
        if (this.cartService.getCart().getValue().length)
            this.router.navigate(['cart']);
    }
    expanded(item) {
        if (item.expanded) {
            item.expanded = false;
        } else {
            this.items.map(listItem => {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                } else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    }
    ngOnInit() {
        this.items = this.cartService.getProducts();
        this.unities = this.cartService.getUnities();
    }
}
