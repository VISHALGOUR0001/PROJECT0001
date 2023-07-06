import { Component } from '@angular/core';
import { APIService } from 'src/app/api.service';

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
  public products:any;

  constructor(public apiservice:APIService){
    this.apiservice.getProducts().subscribe((productsResponse)=>{
      this.products =productsResponse.data;
      console.log(productsResponse);
    }
    )
  } 
}


