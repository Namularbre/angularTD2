import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter : number = 0;

  constructor() { }

  getCounter() : Observable<number> {
    return interval(3000).pipe(
      map(() => ++this.counter),
      tap(() => console.log(this.counter))
    );
  }
}
