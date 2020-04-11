import { Component, OnInit } from '@angular/core';
import { CasesService } from '../../shared/cases.service';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.scss']
})
export class CasesListComponent implements OnInit {

  public loading: boolean = true;

  constructor(public casesService: CasesService) { }

  ngOnInit() {
    this.casesService.fetchCases().subscribe(() => {
      this.loading = false;
    })
  }

}
