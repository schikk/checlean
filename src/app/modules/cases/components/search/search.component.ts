import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  title = "search";
  input: string;

  search(input: string) {
    this.input = input;
    console.log(this.input);
  }
}
