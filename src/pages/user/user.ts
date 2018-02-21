import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  public thumbnail: String = "/assets/imgs/user.png";
  public name: String = "Marty McFly";
  public dob: String = "November 5, 1955";

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    var self = this;

    var data = this.httpClient.get("https://randomuser.me/api/");
    data.subscribe(response => {
      var result = JSON.parse(JSON.stringify(response)).results[0];
      console.log(result);
      self.name = result.name.first + " " + result.name.last;
      self.dob = result.dob;
      self.thumbnail = result.picture.thumbnail;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
