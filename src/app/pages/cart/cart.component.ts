import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public products : any;
public constructor(){
  let getProduct = JSON.parse(localStorage.getItem('cartProducts'));
    console.log(getProduct);
    this.products = getProduct
}
}

