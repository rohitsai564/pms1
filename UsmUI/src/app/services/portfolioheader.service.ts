import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from '../models/Asset.model';
import { Portfolio } from '../models/Portfolio.model';
import { Theme } from '../models/Theme.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioheaderService {
  iv:number;
  private baseUrl = "http://localhost:1250/api/portfolio/new";
  private baseurl1= "http://localhost:1250/api/portfolio/get";
  private baseurl2="http://localhost:1250/api/portfolio";
  // /delete/portfolioName
  constructor(private http:HttpClient) { }
  postPortfolio(portfolio:Portfolio): Observable<any>{
    this.iv=portfolio.investmentValue;
    return this.http.post("http://localhost:1250/api/portfolio/new",portfolio);
  }
  // getPortfolio(portfolioName:string): Observable<any>{
  //   return this.http.get("http://localhost:1250/api/portfolio/name/"+portfolioName);
  // }
  getTheme():Observable<any>{
    return this.http.get<Theme[]>('http://localhost:1250/api/theme/getAll');
  }

  getAllPortfolios(): Observable<Portfolio[]>{
    return this.http.get<Portfolio[]>(`${this.baseurl1}`);
  }

  deletePortfolio(portfolioName:string): Observable<Object>{
    return this.http.delete(`http://localhost:1250/api/portfolio/delete/${portfolioName}`);
  }

  // getTheme():Observable<object>{
  //   return this.http.get(`${this.baseUrl}/${themeName}`);
  // }
  getAsset():Observable<any>{
    return this.http.get<Asset>("http://localhost:1250/api/get");
  }
}
