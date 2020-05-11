import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Case } from '../../interfaces/case';
import { CasesService } from '../../api/cases.service';

@Component({
  selector: 'app-page-case-single',
  templateUrl: './case-single.component.html',
  styleUrls: ['./case-single.component.scss']
})
export class CaseSingleComponent implements OnInit {

  public case: Case;
  public loading = true;

  constructor(
    private route: ActivatedRoute,
    public casesService: CasesService
  ) { }

  ngOnInit() {

    let caseId = this.route.snapshot.paramMap.get("id");
    this.casesService.getCase(+caseId)
      .subscribe((data: Case) => {
        this.case = data;
        this.loading = false;
      })
  }

}
