import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books$? : Observable<Book[]>;

  constructor(private bookService : BookService) {}

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
  }
}
