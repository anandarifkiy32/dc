import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PendahuluanPage } from '../pendahuluan/pendahuluan';
import { MuatanlistrikPage } from '../muatanlistrik/muatanlistrik';
import { KuatarusPage } from '../kuatarus/kuatarus';
import { MuatantotalPage } from '../muatantotal/muatantotal';
import { HukumohmPage } from '../hukumohm/hukumohm';
import { HambatanPage } from '../hambatan/hambatan';
import { HambatanseriPage } from '../hambatanseri/hambatanseri';
import { HambatanparalelPage } from '../hambatanparalel/hambatanparalel';
import { HambatangabunganPage } from '../hambatangabungan/hambatangabungan';
import { HukumkirchoffPage } from '../hukumkirchoff/hukumkirchoff';
import { JembatanwsPage } from '../jembatanws/jembatanws';

/**
 * Generated class for the MateriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materi',
  templateUrl: 'materi.html',
})
export class MateriPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriPage');
  }

  bukaPendahuluan(){
    this.navCtrl.push(PendahuluanPage)
  }

  bukaMuatanListrik(){
    this.navCtrl.push(MuatanlistrikPage)
  }

  bukaKuatArus(){
    this.navCtrl.push(KuatarusPage)
  }

  bukaMuatanTotal(){
    this.navCtrl.push(MuatantotalPage)
  }

  bukaHukumOhm(){
    this.navCtrl.push(HukumohmPage)
  }

  bukaHambatan(){
    this.navCtrl.push(HambatanPage)
  }

  bukaHambatanSeri(){
    this.navCtrl.push(HambatanseriPage)
  }

  bukaHambatanParalel(){
    this.navCtrl.push(HambatanparalelPage)
  }

  bukaHambatanGabungan(){
    this.navCtrl.push(HambatangabunganPage)
  }

  bukaHukumKirchoff(){
    this.navCtrl.push(HukumkirchoffPage)
  }

  bukaJembatan(){
    this.navCtrl.push(JembatanwsPage)
  }
}
