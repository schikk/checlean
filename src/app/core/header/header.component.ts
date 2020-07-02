import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAdmin = false;

  constructor() { }

  ngOnInit() {
    this.checkAdmin();
  }

  checkAdmin() {
    const token = localStorage.getItem('auth-token');

    if (token !== null) {
      this.isAdmin = true;
    }
  }

}
