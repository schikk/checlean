import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/authorization/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'checlean';

  constructor(private auth: AuthService) {

  }

  ngOnInit() {

    const potentialToken = localStorage.getItem('auth-token');

    if (potentialToken !== null) {
      this.auth.setToken(potentialToken);
    }

  }

}
