import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  msg$ = new BehaviorSubject('');
  //user$ = new BehaviorSubject<user>({});

  constructor(private http: HttpClient) { }

  signup( ):Observable<any> {
    return  this.http.post( environment.serverUrl + '/member/add',user);
  }

  login(token: string): Observable<user> {
    let header = {
      'Authorization' : 'Basic ' + token
    }
     return this.http.get<user>( environment.serverUrl +'/api/user/login', {headers: header});
  }
}
