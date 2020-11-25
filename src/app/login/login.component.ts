import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  autUrl = '';
  constructor(private auth: AuthService) { }

  ngOnInit() {

    this.auth.getAuthURL().subscribe((data: any) => {
       this.autUrl = data.url;
    });
  }

}
