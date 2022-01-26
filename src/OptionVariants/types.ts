import { Dispatch } from 'react';

export interface OptionType {
  name: string;
  variants: string[];
}

export interface Action {
  type: string;
  payload?: any;
}

export interface VariantType {
  selectedOptions: string[];
  deleted?: boolean;
}

export interface AppState {
  options: OptionType[];
  variants: VariantType[];
}

export type AppReducer = (state: AppState, action: Action) => AppState;

export interface OptionProps {
  index: number;
  option: OptionType;
  dispatch: Dispatch<Action>;
}
