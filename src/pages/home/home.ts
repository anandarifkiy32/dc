import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { MateriPage } from '../materi/materi';
import { QuizPage } from '../quiz/quiz';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  bukaMateri(){
    this.navCtrl.push(MateriPage)
  }

  bukaLogin(){
    this.navCtrl.push(LoginPage)
  }

  bukaQuiz(){
    this.navCtrl.push(QuizPage)
  }

}
