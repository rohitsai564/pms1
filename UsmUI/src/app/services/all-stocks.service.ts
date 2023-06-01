import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

import { allstocks } from 'src/models/allstocks';
import { nse } from '../models/Nse';

@Injectable({
  providedIn: 'root'
})
export class AllStocksService {

  Stocks: nse = new nse;
  constructor(private http:HttpClient) { }

  
  getAllStocks():Observable<nse[]>{
    return this.http.get<nse[]>(environment.serverUrl +'/api/stocks/all');
  }

  getIsin(isinNo:string){
    return this.http.get<nse>(environment.serverUrl +'/api/stocks/'+isinNo);
  }
  
  getIndustry(industry:string){
    return this.http.get<nse[]>(environment.serverUrl +'/api/stocks/industry/?industry='+industry);
  }

  getSymbol(symbol:string){
    return this.http.get<nse[]>(environment.serverUrl +'/api/stocks/symbol/?symbol='+symbol);
  }

  // getSector(sector:string){
  //   return this.http.get<nse[]>(environment.serverUrl +'/api/stocks/sector/?sector='+sector);
  // }

  getSecurityName(securityName:string){
    return this.http.get<nse[]>(environment.serverUrl +'/api/stocks/security/?securityName='+securityName);
  }

  updateByIsinNO(isinNo:string,Nse:nse){
    return this.http.put<nse>(environment.serverUrl +'/api/admin/update/{isinNo}',nse);
  }

  updateBySymbol(sym:string,Nse:nse){
    return this.http.put<nse>(environment.serverUrl + '/api/admin/update/{symbol}',nse);
  }
  // updateStocks(isinNo:string) {
  //   return this.http.put<allstocks[]>(environment.serverUrl +'/api/admin/update/{isinNo}');
  // }
  




// updatePrice(book: Books): Observable<any> {

//  return this.http.put(`${this.baseUrl}/price/${book.price}/${book.bookId}`, book,

//  {headers: {'content-type': 'application/json'}, observe: 'response', responseType: 'text'})

//  .pipe(map(data => {

//  console.log(data.body);
//  return data.body;

// }));

// }




}
