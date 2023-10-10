import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
@Injectable()
export class TickService {
  private tickCountSub: Subject<number> = new Subject();

  init(): Observable<number> {
    setInterval(() => {
      this.tickCountSub.next(Date.now());
    }, 100);
    return this.tickCountSub.asObservable();
  }

  onTick(): Observable<number> {
    return this.tickCountSub.asObservable();
  }
}
