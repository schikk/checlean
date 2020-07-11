import { Component, OnInit } from '@angular/core';
import { Case } from '../../interfaces/case';
import { CasesService } from '../../api/cases.service';

@Component({
  selector: 'app-inwork-cases',
  templateUrl: './inwork-cases.component.html',
  styleUrls: ['./inwork-cases.component.scss']
})
export class InworkCasesComponent implements OnInit {

  public loading = true;
  private page = 0;
  private caseLoad = 15;
  public isLoadMore = true;
  totalCases = 0;

  public strSeparator = (str: string, length: number) => str.trim().length > length ? `${str.substr(0, length)}...` : str;

  cases: Case[] = [];

  constructor(public casesService: CasesService) { }

  loadCases() {

    this.casesService.getInWorkCases(this.page).subscribe((data: Case[]) => {
      this.totalCases = data['total_count'];
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
