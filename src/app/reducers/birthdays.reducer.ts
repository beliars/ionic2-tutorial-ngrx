import { BirthdaysActions } from '../actions/birthdays.actions';

let nextId = 0;
let initialState = [];

export function birthdaysReducer(state = initialState, action) {
  switch(action.type) {
    
    case BirthdaysActions.ADD_BIRTHDAY:
      return [...state, Object.assign({}, action.payload, { id: nextId++ })];
    
    case BirthdaysActions.UPDATE_BIRTHDAY:
      return state.map(birthday => {
        return birthday.id === action.payload.id ? Object.assign({}, birthday, action.payload) : birthday;
      });
  
    case BirthdaysActions.DELETE_BIRTHDAY:
      return state.filter(birthday => birthday.id !== action.payload.id);
      
    default:
      return state;
  }
}