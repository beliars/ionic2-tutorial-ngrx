import { BirthdaysActions } from '../actions/birthdays.actions';

let nextId = 0;
let initialState = [];

export function birthdaysReducer(state = initialState, action) {
  
  switch(action.type) {
    case BirthdaysActions.LOAD_BIRTHDAYS_SUCCESS:
      return action.payload;
    case BirthdaysActions.ADD_UPDATE_BIRTHDAY_SUCCESS:
      var exists = state.find(birthday => birthday._id === action.payload._id);
      
      if (exists) {
        // UPDATE
        return state.map(birthday => {
          return birthday._id === action.payload._id ? Object.assign({}, birthday, action.payload) : birthday;
        });
      }
      else {
        // ADD
        return [...state, Object.assign({}, action.payload)];
      }
    case BirthdaysActions.DELETE_BIRTHDAY_SUCCESS:
      return state.filter(birthday => birthday._id !== action.payload);
    default:
      return state;
  };
}