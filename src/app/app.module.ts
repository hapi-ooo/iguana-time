import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsReducer } from './state/effects.reducers';

import { AppComponent } from './app.component';
import { Calendar } from './calendar/calendar.component';
import { GridDemo } from './test.component';
import { Menu } from './menu/menu.component';

import { TickService } from './service/tick.service';
import { CalendarService } from './service/calendar.service';

@NgModule({
  declarations: [
    AppComponent,
    Calendar,
    GridDemo,
    Menu,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot({
      effects: EffectsReducer,
    })
  ],
  providers: [
    TickService,
    CalendarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
