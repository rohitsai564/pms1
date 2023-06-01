import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllStocksService } from 'src/app/services/all-stocks.service';
import { allstocks } from 'src/models/allstocks';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  // isinNo:string;
  // stocksArr:allstocks[];
  constructor(private allStocksService:AllStocksService) { }

  ngOnInit(): void {
  }
  // searchSubmit(searchIsin: NgForm){
  //   this.isinNo=searchIsin.value.isinNo;
  //   this.allStocksService.getIsin(this.isinNo).subscribe(data=>{
  //   this.stocksArr= data;
  //   });
  // }

}
