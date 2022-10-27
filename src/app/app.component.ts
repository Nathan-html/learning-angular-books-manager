import { Component } from '@angular/core';
import {BookService} from "./services/book.service";
import BookModel from "./models/book.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-books-manager';
  books: Array<BookModel>;

  constructor(private bookService: BookService) {
    this.books = this.bookService.books;
  }
}
