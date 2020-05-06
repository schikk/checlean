import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cases } from '../interfaces/cases';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class CasesService {

  private api = 'http://localhost:3000';

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService) { }

  /* Get cases */

  public getCases() {
    return this.httpClient.get(`${this.api}/cases`);
  }

  /* Get case by id */

  public getCase(caseId: number) {
    const url = `${this.api}/cases/${caseId}`;
    return this.httpClient.get<Cases>(url);
  }

  /* Search cases */

  searchCases(term: string): Observable<Cases[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.httpClient.get<Cases[]>(`${this.api}/cases/?q=${term}`).pipe(
      tap(_ => this.log(`found cases matching "${term}"`)),
      catchError(this.handleError<Cases[]>('searchHeroes', []))
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
