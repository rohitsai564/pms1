import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { allstocks } from 'src/models/allstocks';
import { AllStocksService } from '../services/all-stocks.service';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent implements OnInit {

industry:string;
  stocks:allstocks[];
  
  constructor(private allStocksService:AllStocksService) { }

  ngOnInit(): void {

    
  }


  searchSubmit(searchIndustry: NgForm){
    
    this.industry=searchIndustry.value.industry;
    this.allStocksService.getIndustry(this.industry).subscribe(data=>{
    this.stocks= data;
    });
}
}
