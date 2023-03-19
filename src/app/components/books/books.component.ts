import { Component } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books$? : Observable<Book[]>;
  counter : number = -1;

  constructor(private bookService : BookService, private counterService : CounterService) {
  }

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
    this.counterService.getCounter().subscribe();
  }
}
