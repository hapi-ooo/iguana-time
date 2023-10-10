export type UID = string;

export type EffectDurationMS = number;

export interface Effect {
  uid: UID;
  targetUid: UID;
  size: number;
};
