import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cases } from '../../interfaces/cases';
import { CasesService } from '../../api/cases.service';

@Component({
  selector: 'app-page-case-single',
  templateUrl: './page-case-single.component.html',
  styleUrls: ['./page-case-single.component.scss']
})
export class PageCaseSingleComponent implements OnInit {

  public case: Cases;
  public loading = true;

  constructor(
    private route: ActivatedRoute,
    public casesService: CasesService
  ) { }

  ngOnInit() {

    let caseId = this.route.snapshot.paramMap.get("id");
    this.casesService.getCase(+caseId)
      .subscribe((data: any) => {
        this.case = data;
        this.loading = false;
      })
  }

}
