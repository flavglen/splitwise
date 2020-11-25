declare function require(name: string);

import { Component } from '@angular/core';
import { AuthService } from './auth.service';

var AuthApi = require('splitwise-node');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'splitwise';
  autUrl = '';
  constructor(private auth: AuthService) {

    // let userOAuthToken, userOAuthTokenSecret;
    // let authApi = new AuthApi('nuB8amtMzpnltAB0Py0oFDM4Q8kaLYUnjJGBGG49', 'dLHH1fW0kia2bueofjQYkJZhamuVXJxsNiDNeXQg');
    // let userAuthUrl = authApi.getOAuthRequestToken()
    //     .then(({ token, secret }) => {
    //         [userOAuthToken, userOAuthTokenSecret] = [token, secret];
    //         return authApi.getUserAuthorisationUrl(token);
    //     });








  }
}
