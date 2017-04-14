import { combineReducers } from '@ngrx/store';

import { birthdaysReducer } from './birthdays.reducer';
import { navReducer } from './nav.reducer';

const reducers = {
  birthdays: birthdaysReducer,
  nav: navReducer
};

const mainReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return mainReducer(state, action);
}

