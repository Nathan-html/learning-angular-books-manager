import { Injectable } from '@angular/core';
import BookModel, {Book} from "../models/book.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: BehaviorSubject<BookModel[]> // Mode écriture
  books$: Observable<BookModel[]> // Mode lecture

  constructor() {
    this.books = new BehaviorSubject([] as BookModel[])
    this.books$ = this.books.asObservable() // Mode lecture

    let booksTemp: Array<BookModel> = [];
    for (let i = 1; i < 10; i++) {
      booksTemp.push(new BookModel('Livre ' + i, 'Nathan', Book.StatusType.available, i, new Date()));
    }

    this.books.next(booksTemp);
  }

  setAllStatus(status: Book.StatusType) {
    const books = this.books.getValue()
    books.map(book => {
      book.status = status
    })
    this.books.next(books)
  }

}
