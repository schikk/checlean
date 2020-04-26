import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cases } from '../../interfaces/cases';
import { CasesService } from '../../api/cases.service';

@Component({
  selector: 'app-page-case-single',
  templateUrl: './case-single.component.html',
  styleUrls: ['./case-single.component.scss']
})
export class CaseSingleComponent implements OnInit {

  public case: Cases;
  public loading = true;

  constructor(
    private route: ActivatedRoute,
    public casesService: CasesService
  ) { }

  ngOnInit() {

    let caseId = this.route.snapshot.paramMap.get("id");
    this.casesService.getCase(+caseId)
      .subscribe((data: Cases) => {
        this.case = data;
        this.loading = false;
      })
  }

}
