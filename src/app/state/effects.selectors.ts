import { createFeatureSelector } from "@ngrx/store";
import { Effect } from "../types";

export const selectEffects = createFeatureSelector<ReadonlyArray<Effect>>('effects');
