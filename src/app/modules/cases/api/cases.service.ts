import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CasesService {

  private api = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getCases() {
    return this.httpClient.get(`${this.api}/cases`);
  }

  public getCase(userId: number) {
    return this.httpClient.get(`${this.api}/cases/${userId}`);
  }

}
