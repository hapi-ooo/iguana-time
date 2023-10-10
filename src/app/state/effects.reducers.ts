import { Effect } from '../types';
import { createReducer, on } from '@ngrx/store';
import { EffectsActions } from './effects.actions';

export const initialEffectsStack: ReadonlyArray<Effect> = [];

export const EffectsReducer = createReducer(
  initialEffectsStack,
  on( EffectsActions.addEffect, (state, { effect }) => {
    if( state.find(storedEffect => storedEffect.uid == effect.uid) === undefined)
      return [...state, effect];
    throw new Error(`Duplicated Effect uid: ${effect.uid}`);
    // return state;
   }),
  on( EffectsActions.removeEffect, (state, { effect }) =>
    state.filter(storedEffect => storedEffect.uid === effect.uid)
   ),
);
