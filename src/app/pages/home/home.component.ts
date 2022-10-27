import {Component, Input, OnInit} from '@angular/core';
import BookModel, {Book} from "../../models/book.model";
import {Observable} from "rxjs";
import { BookService } from '../../services/book.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() books$: Observable<BookModel[]>
  statusAvailable = Book.StatusType.available
  statusUnavailable = Book.StatusType.unavailable

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books$ = this.bookService.books$
  }

  onClickSetAllBooksStatus (status: Book.StatusType) {
    this.bookService.setAllStatus(status);
  }
}
