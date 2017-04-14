import { NavActions } from '../actions/nav.actions';

let initialState = {};

export function navReducer(state = initialState, action) {
  
  switch(action.type) {
    case NavActions.PUSH_PAGE:
      console.log(action.payload);
      return action.payload;
  
    default:
      return state;
  }
  
}