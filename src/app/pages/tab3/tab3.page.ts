import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  colum=[
    '公式サイト',
    '著作権について',
  ]

  constructor(private iab: InAppBrowser, private alertCtrl: AlertController){
    
  }

  onClickItem(i){
    switch(i){
      case 0:
      const browser = this.iab.create('http://persona5.jp/');
      browser.show();
      break;
      case 1:
      this.author();
      break;
    }
  }
  async author(){
    let alert = await this.alertCtrl.create({
      message: '©ATLUS ©SEGA All rights reserved. <br>※当アプリ上で使用しているゲーム画像の著作権および商標権、その他知的財産権は、当該コンテンツの提供元に帰属します。',
      buttons: [
        {
          text: 'OK',
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }
}
