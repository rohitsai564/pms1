import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { allstocks } from 'src/models/allstocks';
import { nse } from '../models/Nse';
import { Portfolio } from '../models/Portfolio.model';
import { AllStocksService } from '../services/all-stocks.service';
import { PortfolioheaderService } from '../services/portfolioheader.service';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

public portfolioArray: Portfolio[];


  constructor(private portfolioService:PortfolioheaderService,
    private router :Router) { }

  ngOnInit(): void {
    this.getPortfolio();
  }

  private getPortfolio(){
    this.portfolioService.getAllPortfolios().subscribe(data =>{
      this.portfolioArray = data;
    })
  }

  deletePortfolio(portfolioName:string){
    this.getPortfolio();
    this.portfolioService.deletePortfolio(portfolioName).subscribe(data =>{
    });
    confirm('Deleted!!')
    location.reload();
  }
  click(themeName:string){
    localStorage.setItem("tName",themeName);
    this.router.navigateByUrl('/assetlist');
  }

  // getPortFolioDetails(portfolioName, investmentValue) {

  // }
}