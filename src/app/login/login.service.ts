import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _isLoggedIn: boolean = false;

  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  public constructor() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn == 'true') {
      this._isLoggedIn = true;
    }
  }

  public setIsLoggedIn(isLoggedIn: boolean): void {
    this._isLoggedIn = isLoggedIn;
    localStorage.setItem('isLoggedIn', `${this._isLoggedIn}`);
  }
}
