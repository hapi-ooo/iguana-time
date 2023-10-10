import { Component, OnInit } from "@angular/core";
import { CalendarService } from "../service/calendar.service";
import { TickService } from '../service/tick.service';
import { CalendarItem } from "../types";
import { Observable } from "rxjs";

@Component({
  selector: 'calendar',
  template: `<p>{{(calendarItem$ | async)?.season || ''}} {{(calendarItem$ | async)?.day || ''}}</p>`,
  styleUrls: ['./calendar.component.css'],
})
export class Calendar implements OnInit {
  calendarItem$: Observable<CalendarItem> = new Observable();

  constructor(private calendarService: CalendarService, private tickService: TickService) {}

  ngOnInit(): void {
    this.calendarItem$ = this.calendarService.init(
      this.tickService.init()
    );
  }
}
