import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCard } from './product-card/product-card';
import {BookCard} from './book-card/book-card'


@Component({
  selector: 'app-root',
  imports: [ProductCard,BookCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('product-card-app');
}
