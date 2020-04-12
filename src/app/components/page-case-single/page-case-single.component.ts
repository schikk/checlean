import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-case-single',
  templateUrl: './page-case-single.component.html',
  styleUrls: ['./page-case-single.component.scss']
})
export class PageCaseSingleComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data => this.id = +data);
  }

}
