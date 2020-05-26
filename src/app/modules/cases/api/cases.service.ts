import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Case, CaseStatus } from '../interfaces/case';
import { MessageService } from '../message.service';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })

export class CasesService {

  private api = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService) { }

  /* Get cases */

  public getCases(page: number = 0) {
    return this.httpClient.get(`${this.api}/cases?offset=${page}&limit=15`);
  }

  /* Get case by id */

  public getCase(caseId: number) {
    const url = `${this.api}/cases/${caseId}`;
    return this.httpClient.get<Case>(url);
  }

  /* Change case status */

  public changeCaseStatus(caseId: number, caseStatus: CaseStatus): Observable<void> {
    switch (caseStatus) {
      case CaseStatus.ACTIVE:
        return this.unresolveCase(caseId);
      case CaseStatus.RESOLVED:
        return this.resolveCase(caseId);
      default:
        return throwError(new Error('Unknown status: ' + caseStatus));
    }
  }

  private resolveCase(caseId: number): Observable<void> {
    const url = `${this.api}/cases/${caseId}/resolve`;
    return this.httpClient.patch<void>(url, null);
  }

  private unresolveCase(caseId: number): Observable<void> {
    const url = `${this.api}/cases/${caseId}/unresolve`;
    return this.httpClient.patch<void>(url, null);
  }

  // Get new cases

  public getNewCases(page: number = 0) {
    return this.httpClient.get(`${this.api}/cases?offset=${page}&limit=15&status=0`);
  }

  // Get finished cases

  public getFinishedCases(page: number = 0) {
    return this.httpClient.get(`${this.api}/cases?offset=${page}&limit=15&status=1`);
  }

  /* Search cases */

  public searchCases(term: string): Observable<Case[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.httpClient.get<Case[]>(`${this.api}/cases?details=${term}`).pipe(
      tap(_ => this.log(`found cases matching "${term}"`)),
      catchError(this.handleError<Case[]>('searchCases', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CasesService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CasesService: ${message}`);
  }

}
