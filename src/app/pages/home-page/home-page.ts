import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ModalController, NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/rx';

import { AppState } from '../../services/app-state';
import { Birthday } from '../../models/birthday.model';
import { DetailsPage } from '../details-page/details-page';

@Component({
  selector: 'home-page',
  templateUrl: 'home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  
  birthdays$: Observable<Birthday[]>;
  
  constructor(private nav: NavController,
    private store: Store<AppState>,
    private modalCtrl: ModalController) {
    
    this.birthdays$ = this.store.select(state => state.birthdays);
  }
  
  showDetail(birthday) {
    let modal = this.modalCtrl.create(DetailsPage, { birthday: birthday });
    modal.present();
  }
  
}
