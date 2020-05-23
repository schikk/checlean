import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { Case } from '../../interfaces/case';
import { CasesService } from '../../api/cases.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  cases$: Observable<Case[]>;

  private searchTerms = new Subject<string>();

  isHide = true;

  constructor(private casesService: CasesService) { }

  search(term: string): void {
    this.searchTerms.next(term);
    if (term.length > 2) {
      this.isHide = false;
    } else {
      this.isHide = true;
    }
  }

  ngOnInit(): void {

    this.cases$ = this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.casesService.searchCases(term)),
        map((data) => data['results'])
      );
  }

}
