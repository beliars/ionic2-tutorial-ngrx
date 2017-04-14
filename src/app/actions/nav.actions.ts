import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';


@Injectable()
export class NavActions {
  
  static PUSH_PAGE = 'PUSH_PAGE';
  pushPage(page): Action {
    return {
      type: NavActions.PUSH_PAGE,
      payload: page
    }
  }
  
}