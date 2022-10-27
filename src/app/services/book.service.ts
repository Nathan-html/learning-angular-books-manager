import { Injectable } from '@angular/core';
import BookModel, {Book} from "../models/book.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Array<BookModel>

  constructor() {
    this.books = []
    for (let i = 1; i < 10; i++) {
      this.books.push(new BookModel('Livre ' + i, 'Nathan', Book.StatusType.available, i, new Date()));
    }
    console.log(this.books)
  }
}
