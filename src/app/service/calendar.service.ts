import { Injectable } from "@angular/core";
import { CalendarDay, CalendarDayMax, CalendarDayMin, CalendarItem, CalendarSeason, Seasons, circularNext } from "../types";
import { Observable, Subject } from "rxjs";

@Injectable()
export class CalendarService {
  private season: CalendarSeason = "Spring";
  private dayMax: CalendarDayMax = 99;
  private dayMin: CalendarDayMin = 0;
  private day: CalendarDay = 0;
  private calendarItemSub: Subject<CalendarItem> = new Subject();

  init(tickObservable: Observable<number>): Observable<CalendarItem> {
    // Callback on observable update
    tickObservable.subscribe( _ => {
      this.calendarItemSub.next(
       this.incrementCalendarDay()
      );
    }
    );
    return this.calendarItemSub.asObservable();
  }

  private incrementCalendarDay(): CalendarItem {
    this.day += 1;
    if (this.day > this.dayMax) {
      this.day = this.dayMin;
      this.season = circularNext(Seasons, this.season);
    }
    return {
      season: this.season,
      day: this.day,
    };
  }
}
