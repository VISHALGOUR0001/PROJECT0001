import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public productsdetails: any;
  public getproductdetail(product: any) {
    console.log(product)
    this.productsdetails = product;

  }
  public products = [
    {
      id: 1,
      Name: "product1",
      price: 100,
      description: "dnsmk"
    },
    {
      id: 2,
      Name: 'product2',
      price: 200,
      description: "dnsmk"
    },
    {
      id: 3,
      Name: 'product3',
      price: 300,
      description: "dnsmk"
    },
    {
      id: 5,
      Name: 'product5',
      price: 500,
      description: "dnsmk"
    },
    {
      id: 6,
      Name: 'product6',
      price: 600,
      description: "dnsmk"
    }
  ]
}
