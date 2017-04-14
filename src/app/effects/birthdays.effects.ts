import { Injectable } from '@angular/core';
import { Effect, toPayload, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/rx';

import { BirthdayService } from '../services/birthday.service';
import { Birthday } from '../models/birthday';
import { BirthdaysActions } from '../actions/birthdays.actions';

@Injectable()
export class BirthdayEffects {
  
  constructor(
    private actions$: Actions,
    private db: BirthdayService,
    private birthdayActions: BirthdaysActions
  ) { }
  
  @Effect()
  addBirthday$ = this.actions$
  .ofType(BirthdaysActions.ADD_BIRTHDAY)
  .map(toPayload)
  .mergeMap(birthday => this.db.add(birthday));
  
  @Effect()
  updateBirthday$ = this.actions$
  .ofType(BirthdaysActions.UPDATE_BIRTHDAY)
  .map(toPayload)
  .mergeMap(birthday => this.db.update(birthday));
  
  @Effect()
  deleteBirthday$ = this.actions$
  .ofType(BirthdaysActions.DELETE_BIRTHDAY)
  .map(toPayload)
  .mergeMap(birthday => this.db.delete(birthday));allBirthdays$ = this.db.getAll()
.map(birthdays => this.birthdayActions.loadBirthdaysSuccess(birthdays));
  
  changedBirthdays$ = this.db.getChanges()
  .map(change => {
    if (change._deleted) {
      return this.birthdayActions.deleteBirthdaySuccess(change._id);
    }
    else {
      return this.birthdayActions.addUpdateBirthdaySuccess(change);
    }
  });
  
  @Effect() getBirthdays$ = Observable.concat(this.allBirthdays$, this.changedBirthdays$);
  
}