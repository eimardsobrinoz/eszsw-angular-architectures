import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ApiMethod, AuthEndPoints } from '../consts';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  methods: ApiMethod;
  constructor(
    private http: HttpClient,
    private _error: ErrorService
  ) { }

   /**
   * This function is used to handle how to make api calls providing the method, the api and data is needed (put/post).
   * @params method
   * @params api
   * @params data
   */

  requestCall(api: AuthEndPoints, method: ApiMethod, data?:any) {
    let response;
    switch(method) {
      case ApiMethod.GET:
        response= this.http.get(`${environment.apiUrl}${api}`)
          .pipe(cathError ( error => this.handleError(err,this)));
      break;
      case ApiMethod.POST:
        response= this.http.post(`${environment.apiUrl}${api}`)
          .pipe(cathError ( error => this.handleError(err,this)));
      break;
      case ApiMethod.PUT:
        response= this.http.put(`${environment.apiUrl}${api}`)
          .pipe(cathError ( error => this.handleError(err,this)));
      break;
      case ApiMethod.DELETE:
        response= this.http.delete(`${environment.apiUrl}${api}`)
          .pipe(cathError ( error => this.handleError(err,this)));
      break;
      default:
          break;
    }
    return response;
  }

  /**
   * This function is used to handle the received error when calling any api 
   * @params error
   */
  handleError(error: HttpErrorResponse, self) {
    if(error.error instanceof ErrorEvent) {
      console.log('An error occurred: ',error.error.message);
    } else {
      this._error.whichError(error.status, error.error.message);
      return throwError( {error: error.message, status: error.status});
    }
  }
}
