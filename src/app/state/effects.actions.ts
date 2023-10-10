import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Effect } from '../types';

export const EffectsActions = createActionGroup({
  source: 'Effects',
  events: {
    'Add Effect': props<{ effect: Effect }>(),
    'Remove Effect': props<{ effect: Effect }>(),
    'Tick Effects': emptyProps(),
  }
});
