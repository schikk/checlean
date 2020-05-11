import { Component, OnInit } from '@angular/core';
import { Case } from '../../interfaces/case';
import { CasesService } from '../../api/cases.service';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.scss']
})
export class CasesListComponent implements OnInit {

  public loading = true;
  private page = 1;
  public isLoadMore = true;

  public strSeparator = (str: string, length: number) => str.trim().length > length ? `${str.substr(0, length)}...` : str;

  cases: Case[] = [];

  constructor(public casesService: CasesService) { }

  loadCases() {

    this.casesService.getCases(this.page).subscribe((data: Case[]) => {
      this.cases = this.cases.concat(data);
      this.loading = false;
      if (data.length < 6) {
        this.isLoadMore = false;
      }
    })
  }

  onClick() {
    this.page++
    this.loadCases();
  }

  ngOnInit() {
    this.loadCases();
  }

}
