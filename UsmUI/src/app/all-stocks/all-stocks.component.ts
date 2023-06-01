import { Component, OnInit } from '@angular/core';
import { nse } from '../models/Nse';
import { AllStocksService } from '../services/all-stocks.service';

@Component({
  selector: 'app-all-stocks',
  templateUrl: './all-stocks.component.html',
  styleUrls: ['./all-stocks.component.css']
})
export class AllStocksComponent implements OnInit {
allstocks:nse[];
p:number=1;
  constructor(private allStocksService:AllStocksService) { }

  ngOnInit(): void {
    this.allStocksService.getAllStocks().subscribe(data=>{
      this.allstocks=data;
    })

      
  }

}
