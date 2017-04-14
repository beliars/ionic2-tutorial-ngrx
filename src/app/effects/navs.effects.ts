import { Injectable } from '@angular/core';
import { Effect, toPayload, Actions } from '@ngrx/effects';

import { NavActions } from '../actions/nav.actions';
import { Observable } from 'rxjs';

@Injectable()
export class NavsEffects {
  
  constructor(private actions$: Actions,
    private navActions: NavActions) {
  }
  
  @Effect()
  navPush$ = this.actions$
  .ofType(NavActions.PUSH_PAGE)
  .map(toPayload)
  .switchMap(page => {
    console.log('Need to change page ', page); // <---- here we call method to change page and then call success action or catch the error
    return Observable.of(true);
  });
  
}