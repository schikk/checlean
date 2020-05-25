import { Component, OnInit } from '@angular/core';
import { Case } from '../../interfaces/case';
import { CasesService } from '../../api/cases.service';

@Component({
  selector: 'app-new-cases',
  templateUrl: './new-cases.component.html',
  styleUrls: ['./new-cases.component.scss']
})
export class NewCasesComponent implements OnInit {

  public loading = true;
  private page = 0;
  private caseLoad = 15;
  public isLoadMore = true;

  public strSeparator = (str: string, length: number) => str.trim().length > length ? `${str.substr(0, length)}...` : str;

  cases: Case[] = [];

  constructor(public casesService: CasesService) { }

  loadCases() {

    this.casesService.getNewCases(this.page).subscribe((data: Case[]) => {
      this.cases = this.cases.concat(data['results']);
      this.loading = false;
      if (data['results'].length < this.caseLoad) {
        this.isLoadMore = false;
      }
    })
  }

  onClick() {
    this.page = this.page + this.caseLoad;
    this.loadCases();
  }

  ngOnInit() {
    this.loadCases();
  }

}
