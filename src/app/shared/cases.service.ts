import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Cases {
  id: number,
  title: string,
  description: string,
  location: string,
  photo: string,
  status: any
}

@Injectable({ providedIn: 'root' })
export class CasesService {

  public cases: Cases[] = []

  constructor(private http: HttpClient) { }

  fetchCases(): Observable<Cases[]> {
    return this.http.get<Cases[]>('http://localhost:3000/cases')
      .pipe(tap(cases => this.cases = cases))
  }

}
