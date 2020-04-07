import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, App } from "ionic-angular";
import { ChatInterPage } from "../chat-inter/chat-inter";

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-chat",
  templateUrl: "chat.html"
})
export class ChatPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ChatPage");
  }

  goChat() {
    this.app.getRootNav().push(ChatInterPage);
    // this.navCtrl.push(ChatInterPage);
  }
}
