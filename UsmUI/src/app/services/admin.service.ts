import { HttpClient } from '@angular/common/http';
import { Token, tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from 'src/models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAdminInfo(token: string): Observable<Admin> {
    let header = {
      'Authorization' : 'Basic ' + token
    }
    return this.http.get<Admin>(environment.serverUrl + '/api/admin/details', {headers: header});
  }
  deleteStock(): Observable<any>{
    let header = {
      'Authorization' : 'Basic' + Token
    }
      return this.http.delete<Admin>(environment.serverUrl + '/delete/{isinNo}',);
  
    }
    
}
