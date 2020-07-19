import { LoginPayload } from './../../interfaces/auth.interface';
import { ErrorService } from './../../../../core/services/error/error.service';
import { StorageService } from './../../../../core/services/storage/storage.service';
import { HttpService } from './../../../../core/services/http/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthEndPoints, ApiMethod } from 'projects/eszsw-angular-arch2/src/app/core/services/consts';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $activeUser: Observable<boolean>;

  constructor( 
    private _http: HttpService,
    private _storage:StorageService,
    private _router:Router,
    private _error:ErrorService
  ) { }

  checkServer():void {
    this._http.requestCall(AuthEndPoints.CHECK_SERVER, ApiMethod.GET).subscribe( 
      res => res, 
      error => console.log(error));
  }

  login(loginPayload: LoginPayload):void {
    this._http.requestCall(AuthEndPoints.LOGIN, ApiMethod.POST,loginPayload).subscribe( res = {
        this._storage.saveToken(res.auth_token);
        this._error.userNotification(200, 'You successfully logged');
        this._storage.saveToken(res.auth_token);
      }, 
      error => console.log(error));
  }

}
