import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SummaryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {

  contentNumber;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contentNumber = navParams.get("contentNumber");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SummaryPage');
  }

}
