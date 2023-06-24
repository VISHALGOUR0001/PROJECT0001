import { Component } from '@angular/core';
import { identity } from 'rxjs';
import { OwlOptions, } from 'ngx-owl-carousel-o';
import { APIService } from 'src/app/api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
public productDetail;
public productDetails;
public getProductDetail(product: any) {
  console.log(product);
  this.productDetails = product;
}
public products: any;
constructor(public apiService: APIService) {
  this.apiService.getProducts().subscribe((productResponse) => {
    this.products = productResponse.data;
    console.log(productResponse);
  })
}

public cartproducts=[];
public cartItems;

public color="text-primary";
public con=true;
public data1 = true;
public data2 = [
  {name: 'nnnn',
id:1},{name: 'product1',price:100,
id:2},{name: 'product2',price:200,
id:3},{name:'product3',price:300}
]
slidesStore: any;


public constructer() {
  this.fun1();
}

public fun1() {
  alert ('fun1');
}
public  fun2() {
  alert('fun2');
}


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
   
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


public addToCart(cartProduct) {
  this.cartproducts.push(cartProduct);
  localStorage.setItem('cartProducts', JSON.stringify(this.cartproducts));
  let getProducts = JSON.parse(localStorage.getItem('cartProducts'));
  console.log(getProducts);
  this.cartItems = getProducts;
}
}