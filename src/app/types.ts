/**
  * Global Types file for Iguana Time
*/

/** ID type for stateful data such as resources,
  * items, and effects */
export type UID = string;

export function circularNext<T>(arr: T[], value: T): T {
  let idx = arr.indexOf(value);
  return (idx === arr.length - 1)
  ? arr[0]
  : arr[idx + 1];
}

export type CalendarDayMin = 0;
export type CalendarDayMax = 99;
export type CalendarDay = CalendarDayMin | CalendarDayMax | number;

export type CalendarSeason =
  "Spring" | "Summer" | "Autumn" | "Winter";

export const Seasons: CalendarSeason[] = ["Spring", "Summer", "Autumn", "Winter"];

export interface CalendarItem {
  season: CalendarSeason;
  day: CalendarDay;
};

export type EffectDurationMS = number;

export interface Effect {
  uid: UID;
  targetUid: UID;
  size: number;
};
