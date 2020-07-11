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
        return this.statusCase(caseId, caseStatus);
      case CaseStatus.RESOLVED:
        return this.statusCase(caseId, caseStatus);
      case CaseStatus.INWORK:
        return this.statusCase(caseId, caseStatus);
      default:
        return throwError(new Error('Unknown status: ' + caseStatus));
    }
  }

  private statusCase(caseId: number, caseStatus: number): Observable<void> {
    const body = { status: caseStatus };
    const url = `${this.api}/cases/${caseId}/status`;
    return this.httpClient.patch<void>(url, body);
  }


  // Get new cases

  public getNewCases(page: number = 0) {
    return this.httpClient.get(`${this.api}/cases?offset=${page}&limit=15&status=0`);
  }

  // Get finished cases

  public getFinishedCases(page: number = 0) {
    return this.httpClient.get(`${this.api}/cases?offset=${page}&limit=15&status=1`);
  }

  // Get in work cases

  public getInWorkCases(page: number = 0) {
    return this.httpClient.get(`${this.api}/cases?offset=${page}&limit=15&status=2`);
  }

  // Delete case

  public deleteCase(caseId: number) {
    return this.httpClient.delete(`${this.api}/cases/${caseId}`);
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

  /* Get all cases for map */

  public getMapCases() {
    return this.httpClient.get(`${this.api}/cases?limit=1000`);
  }

  // Post admin comment

  public postComment(comment: Case, caseId: number) {
    const url = `${this.api}/cases/${caseId}/comment`;
    return this.httpClient.patch<void>(url, comment);
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
