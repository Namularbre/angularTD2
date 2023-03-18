import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly books = [
    new Book("1984", "George Orwell", 1949),
    new Book("Le Meilleur des Mondes", "Aldous Huxley", 1932),
    new Book("Knock", "Jules Romains", 1923),
  ];

  private static readonly DELAY = 3000;

  constructor() { }

  getBooks(): Observable<Book[]> {
    return of(this.books)
    .pipe(
      delay(BookService.DELAY)
    );
  }
}
