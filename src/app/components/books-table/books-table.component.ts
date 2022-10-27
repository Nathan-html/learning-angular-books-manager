import {Component, Input, OnInit} from '@angular/core';
import BookModel from "../../models/book.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})
export class BooksTableComponent implements OnInit {

  @Input() books: BookModel[] | null;

  constructor() { }

  ngOnInit(): void {
  }

}
