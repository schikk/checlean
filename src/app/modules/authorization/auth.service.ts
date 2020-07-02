import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './interfaces/auth'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })

export class AuthService {

  private api = environment.apiUrl;
  private token = null;

  constructor(private http: HttpClient) { }

  login(user: User): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.api}/login`, user)
      .pipe(
        tap(
          ({ token }) => {
            localStorage.setItem('auth-token', 'Bearer ' + token);
            this.setToken(token);
          }
        )
      )
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout() {
    this.setToken(null);
    localStorage.clear();
  }

}
