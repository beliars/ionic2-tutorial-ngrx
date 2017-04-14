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
  
  static LOAD_BIRTHDAYS_SUCCESS = 'LOAD_BIRTHDAYS_SUCCESS';
  loadBirthdaysSuccess(birthdays: Birthday[]): Action {
    return {
      type: BirthdaysActions.LOAD_BIRTHDAYS_SUCCESS,
      payload: birthdays
    }
  }
  
  static ADD_UPDATE_BIRTHDAY_SUCCESS = 'ADD_UPDATE_BIRTHDAY_SUCCESS';
  addUpdateBirthdaySuccess(birthday: Birthday): Action {
    return {
      type: BirthdaysActions.ADD_UPDATE_BIRTHDAY_SUCCESS,
      payload: birthday
    }
  }
  
  static DELETE_BIRTHDAY_SUCCESS = 'DELETE_BIRTHDAY_SUCCESS';
  deleteBirthdaySuccess(id: string): Action {
    return {
      type: BirthdaysActions.DELETE_BIRTHDAY_SUCCESS,
      payload: id
    }
  }
  
}