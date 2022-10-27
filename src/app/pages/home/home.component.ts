import {Component, Input, OnInit} from '@angular/core';
import BookModel from "../../models/book.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() books: Array<BookModel>;

  constructor() { }

  ngOnInit(): void {
  }

}
