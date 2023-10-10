import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { TickService } from './service/tick.service';
import { EffectsReducer } from './state/effects.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      effects: EffectsReducer,
    })
  ],
  providers: [
    TickService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
