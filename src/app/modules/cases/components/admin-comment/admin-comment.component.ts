import { Component, OnInit } from '@angular/core';
import { CasesService } from '../../api/cases.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Case, CaseStatus } from '../../interfaces/case';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-comment',
  templateUrl: './admin-comment.component.html',
  styleUrls: ['./admin-comment.component.scss']
})
export class AdminCommentComponent implements OnInit {

  form: FormGroup;
  caseComment: Case;
  isComment = false;
  isAdmin = false;
  deletedValue: any = { comment: '' };

  constructor(
    public casesService: CasesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.form = new FormGroup({
      comment: new FormControl(null, [Validators.required, Validators.minLength(2)])
    });

    this.getUpdateComment();
    this.checkAdmin();

  }

  onSubmit() {
    this.form.disable();
    let caseId = this.route.snapshot.paramMap.get("id");
    this.casesService.postComment(this.form.value, +caseId).subscribe(
      data => {
        this.caseComment = data[0];
        this.getUpdateComment();
        this.form.reset();
      },
      error => {
        this.form.enable();
        console.log('oops', error)
      }
    )
  }

  getUpdateComment() {
    let caseId = this.route.snapshot.paramMap.get("id");
    this.casesService.getCase(+caseId)
      .subscribe((data: Case) => {
        this.caseComment = data[0];
        if (this.caseComment.comment.length > 0) {
          this.isComment = true;
        }
      })
  }

  deleteComment() {
    let caseId = this.route.snapshot.paramMap.get("id");

    this.casesService.postComment(this.deletedValue, +caseId).subscribe(
      data => {
        this.caseComment = data[0];
        this.getUpdateComment();
        this.form.reset();
      },
      error => {
        console.log('oops', error)
      }
    )

  }

  checkAdmin() {
    const token = localStorage.getItem('auth-token');

    if (token !== null) {
      this.isAdmin = true;
    }
  }

}
