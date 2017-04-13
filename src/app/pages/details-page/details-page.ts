import { Component } from '@angular/core';
import { NavParams, ViewController, ToastController } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { AppState } from '../../services/app-state';
import { BirthdaysActions } from '../../actions/birthdays.actions';

@Component({
  selector: 'details-page',
  templateUrl: 'details-page.html'
})
export class DetailsPage {
  
  birthday: any = {};
  isNew = true;
  action = 'Add';
  isoDate = '';
  
  constructor(private viewCtrl: ViewController,
              private navParams: NavParams,
              private store: Store<AppState>,
              private birthdaysActions: BirthdaysActions,
              private toastCtrl: ToastController) {}
  
  ionViewWillEnter() {
    let editBirthday = this.navParams.get('birthday');
    
    if (editBirthday) {
      this.birthday = editBirthday;
      this.isNew = false;
      this.action = 'Edit';
      this.isoDate = this.birthday.date.toISOString().slice(0, 10);
    }
  }
  
  save() {
    if(!this.birthday.name) {
      this.presentToast('Name required');
      return;
    }
    if(!this.isoDate) {
      this.presentToast('Birthday required');
      return;
    }
    this.birthday.date = new Date(this.isoDate);
    
    if(this.isNew) {
      this.store.dispatch(this.birthdaysActions.addBirthday(this.birthday));
    }
    else {
      this.store.dispatch(this.birthdaysActions.updateBirthday(this.birthday));
    }
    
    this.dismiss();
  }
  
  delete() {
    this.store.dispatch(this.birthdaysActions.deleteBirthday(this.birthday));
  }
  
  dismiss() {
    this.viewCtrl.dismiss(this.birthday);
  }
  
  presentToast(message) {
    let toast = this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
  
  goBack() {
    this.dismiss();
  }
  
}
