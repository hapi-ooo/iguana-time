import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsReducer } from './state/effects.reducers';

import { AppComponent } from './app.component';
import { Calendar } from './calendar/calendar.component';
import { GridDemo } from './test.component';
import { Menu } from './menu/menu.component';
import { Resource } from './resource/resource.component';

import { TickService } from './service/tick.service';
import { CalendarService } from './service/calendar.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    Calendar,
    GridDemo,
    Menu,
    Resource,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot({
      effects: EffectsReducer,
    }),
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatTabsModule,
    MatButtonModule,
  ],
  providers: [
    TickService,
    CalendarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
