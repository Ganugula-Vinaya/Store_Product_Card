import { Component } from '@angular/core';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css'
})
export class BookCard {

  bookName:string = "Flowers";
  bookPrice:number = 50;
  isAddedToCart:boolean = false;

  addToCart(){
    this.isAddedToCart = true;
    console.log(`${this.bookName} added to cart!`);
  }

}
