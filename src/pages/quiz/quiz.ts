import { Component, Injectable } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
  getData: any;
  public items: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public loadingCtrl: LoadingController) {
  }

  ionViewWillEnter()
  {
     this.load();
  }

  load(){
    this.presentLoading();
    this.getdata();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Tunggu sebentar...",
      duration: 4000
    });
    loader.present();
  }

  getdata(){
    this.http.get('http://gyroscopic-goods.000webhostapp.com/api/retrieve.php')
    .map(res => res.json())
    .subscribe(data =>{
      this.items = data;
    });
  }


  

}
