import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, /* of*/ } from 'rxjs/operators';

@Injectable()
export class AuthService {
  public url;
  currentUser;

  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    this.url = "http://compassservicesqa-blue.ual.com/ShoppingServices/Api/AuthService/GetLoginStatus/";
    let loginInfo = { "username": username, "password": password };
    let options = {headers: new HttpHeaders({"Content-Type": "application/json"})}
    return this.http.post(
      this.url,
      loginInfo,
      options
    )
    .pipe(tap(data => {
      this.currentUser = data['user']
    }))
    // .pipe(catchError(err => {
      // return of(false);
    // }))

  }

}
