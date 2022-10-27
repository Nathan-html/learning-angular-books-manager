import { Component } from '@angular/core';
import {BookService} from "./services/book.service";
import BookModel from "./models/book.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-books-manager';
  books$: Observable<BookModel[]>

  constructor(private bookService: BookService) {
    this.books$ = this.bookService.books$
  }
}
