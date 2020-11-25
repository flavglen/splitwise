import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private auth: AuthService) { alert(); }

  ngOnInit() {
    const code = location.href.split('code=')[1].split('&state')[0];

    if(!localStorage.getItem('token')){
  
            this.auth.getToken({token: code}).subscribe((data: any) => {
              if (data) {
                localStorage.setItem('token', data.accessToken ? data.accessToken : '');
              }
            }, error => {
              console.log(error);
            });
      }

    // groups

    this.auth.getGroups().subscribe(d => {
        console.log(d);
    });

    this.auth.getExpensesByGroupId().subscribe(d => {
      console.log(d);
  });


  }

}
