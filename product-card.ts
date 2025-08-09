import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard { //property binding
  productName:string = 'Redmi Phone';
  productPrice:number = 20000;

  isAddedToCart: boolean = false;
  likes:number = 0;

  likeProduct(){
    this.likes++;
  }
  
  addToCart() { //event binding
    this.isAddedToCart = true;
    console.log(`${this.productName} added to cart!`);
  }

  
}
