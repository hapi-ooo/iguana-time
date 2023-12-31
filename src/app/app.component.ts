import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEffects } from './state/effects.selectors';
import { Effect } from './types';
import { Observable } from 'rxjs';
import { EffectsActions } from './state/effects.actions';
import { TickService } from './service/tick.service';
import { loremipsum } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  lmim = loremipsum;
  resourceTemp = { name: 'Name', quantity: 'Quantity', capacity: 'Capacity' };
  displayTab = false;
  flipDisplayTab() { this.displayTab = !this.displayTab; console.log(this.displayTab); }

  title = 'Iguana Time';
  guid: number = 0;
  item = { uid: 1, amount: 0 };
  effects$: Observable<ReadonlyArray<Effect>> =
    this.store.select(selectEffects);

  constructor(private store: Store, private tickService: TickService) {}

  ngOnInit(): void {
    this.tickService.init().subscribe( _ => {
//      console.log(`hi ${d}`);
    });

    this.effects$.subscribe(effects => {
      if( effects.length != 0 ) {
        this.item.amount += effects[0].size;
      }
    });
  }

  add() {
    this.store.dispatch(EffectsActions.addEffect({effect: {
      uid: String(this.guid++),
      targetUid: String(this.guid++),
      size: 5
    }
    }));
  }
}
