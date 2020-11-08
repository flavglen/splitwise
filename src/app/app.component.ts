declare var require: any;

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'splitwise';

  constructor() {

    // set config
    // const sws = sw({
    //   consumerKey: 'your key here',
    //   consumerSecret: 'your secret here'
    // });

    // console.log(sws);
  }
}
