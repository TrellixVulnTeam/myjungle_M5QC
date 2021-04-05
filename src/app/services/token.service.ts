import { Injectable } from '@angular/core';

const TOKEN_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbXlqdW5nbGUuZWMiLCJpYXQiOjE2MTcyMzk5ODIsIm5iZiI6MTYxNzIzOTk4MiwiZXhwIjoxNjE3ODQ0NzgyLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.wX3Uzfsewltypt3sX-0OnEZyRBhQSJjS6oGwXDiO-oU';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }


  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public setUsername(username: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }
  public getUsername(): string {
    return window.sessionStorage.getItem(USERNAME_KEY);
  }
  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY,JSON.stringify(authorities));
  }
  public getAuthorities(): string[] {
    const roles: string[] = [];
    if(sessionStorage.getItem(USERNAME_KEY)){
      JSON.parse(sessionStorage.getItem(USERNAME_KEY)).foreach (rol => {
        roles.push(rol);
      })
    }
    return roles;

  }
  public logOut(): void {
    window.sessionStorage.clear();
  }



}
