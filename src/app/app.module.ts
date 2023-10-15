import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsReducer } from './state/effects.reducers';

import { AppComponent } from './app.component';
import { Calendar } from './calendar/calendar.component';
import { ResourceList } from './resource/resource-list.component';
import { Header } from './header/header.component';
import { GameMenu } from './game-menu/game-menu.component';
import { Shop } from './shop/shop.component';

import { TickService } from './service/tick.service';
import { CalendarService } from './service/calendar.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    Calendar,
    ResourceList,
    Header,
    GameMenu,
    Shop,
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
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [
    TickService,
    CalendarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
