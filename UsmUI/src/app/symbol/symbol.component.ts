import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { allstocks } from 'src/models/allstocks';
import { AllStocksService } from '../services/all-stocks.service';

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.css']
})
export class SymbolComponent implements OnInit {
  symbol:string;
  stocks:allstocks[];
  constructor(private allStocksService:AllStocksService) { }

  ngOnInit(): void {
  }
  searchSubmit(searchSymbol: NgForm){
    this.symbol=searchSymbol.value.symbol;
    this.allStocksService.getSymbol(this.symbol).subscribe(data=>{
    this.stocks= data;
    });

}
}
