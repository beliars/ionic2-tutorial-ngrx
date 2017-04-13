import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Birthday } from '../models/birthday.model';

@Injectable()
export class BirthdaysActions {
  
  static ADD_BIRTHDAY = 'ADD_BIRTHDAY';
  addBirthday(birthday: Birthday): Action {
    return {
      type: BirthdaysActions.ADD_BIRTHDAY,
      payload: birthday
    }
  }
  
  static UPDATE_BIRTHDAY = 'UPDATE_BIRTHDAY';
  updateBirthday(birthday: Birthday): Action {
    return {
      type: BirthdaysActions.UPDATE_BIRTHDAY,
      payload: birthday
    }
  }
  
  static DELETE_BIRTHDAY = 'DELETE_BIRTHDAY';
  deleteBirthday(birthday: Birthday): Action {
    return {
      type: BirthdaysActions.DELETE_BIRTHDAY,
      payload: birthday
    }
  }
  
}