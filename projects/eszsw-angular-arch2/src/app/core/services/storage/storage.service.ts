import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private cookies: CookieService,
    private _util: UtilService,
    private _router:Router
  ) {}

  saveToken(token: string):void {
    localStorage.setItem('$esz-token', token);
  }
  getToken() {
    return localStorage.getItem('$esz-token');
  }
  removeToken() {
    localStorage.removeItem('$esz-token');
  }
  setLocalObject(key: string, value:any) {
    localStorage.setItem(key, this._util.encrypt(JSON.stringify(value)));
  }
  getLocalObject(key: string):string {
    return JSON.parse(this._util.decrypt(localStorage.getItem(key)));
  }
  getEszToken() {
    return this.cookies.get('esztoken');
  }
}
