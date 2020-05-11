import { Component, OnInit } from '@angular/core';
import { Case } from '../../interfaces/case';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CasesService } from '../../api/cases.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  cases$: Observable<Case[]>;

  private searchTerms = new Subject<string>();

  constructor(private casesService: CasesService) { }

  public search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.cases$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.casesService.searchCases(term)),
    );
  }

  // Hide/Show search list

  isHide = true;

  toggleDisplay() {
    this.isHide = !this.isHide;
  }

}
