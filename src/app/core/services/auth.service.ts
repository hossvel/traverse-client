import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    URL_API: string = environment.URL_API;

  private tokenKey = 'authToken';
  constructor(private httpClient: HttpClient, private router: Router) { }

  
  login(username: string, password: string): Observable<any>{
    console.log(username,password);
    return this.httpClient.post<any>(this.URL_API + '/login', {username, password}).pipe(
      tap(response => {
        if(response.token){
          console.log("response: ",response);
          console.log(response.token);
          this.setToken(response.token);
         
        }
      })
    )
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  } 

  private getToken(): string | null {
    if(typeof window !== 'undefined'){
      return localStorage.getItem(this.tokenKey);
    }else {
      return null;
    }
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if(!token){
      return false;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  }

  logout(): void{
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

}
