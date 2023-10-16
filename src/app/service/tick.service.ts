import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable()
export class TickService {
  private tickCountSub: Subject<number> = new Subject();

  init(): Observable<number> {
    setInterval(() => {
      // Update the observable
      this.tickCountSub.next(Date.now());
    }, 100);
    return this.tickCountSub.asObservable();
  }

  onTick(): Observable<number> {
    return this.tickCountSub.asObservable();
  }
}
