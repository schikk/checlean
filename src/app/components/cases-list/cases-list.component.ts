import { Component, OnInit } from '@angular/core';
import { Cases } from '../../interfaces/cases';
import { CasesService } from '../../api/cases.service';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.scss']
})
export class CasesListComponent implements OnInit {

  public loading = true;

  cases: Cases[] = [];

  constructor(public casesService: CasesService) { }

  ngOnInit() {

    this.casesService.getCases().subscribe((data: Cases[]) => {
      this.cases = data;
      this.loading = false;
    })

  }

}
