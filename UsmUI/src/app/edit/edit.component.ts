import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { nse } from '../models/Nse';

import { AllStocksService } from '../services/all-stocks.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  isinNo:string;
  Nse:nse;
  constructor(private allStocksService:AllStocksService) { }

  ngOnInit(): void {
  }
  searchSubmit(searchIsin: NgForm){
    this.isinNo=searchIsin.value.isinNo;
    this.allStocksService.getIsin(this.isinNo).subscribe(data=>{
    this.Nse=data;
    });

}

onEdit(item: any){

  item.isEdit=true;
}

onUpdate(Nse:nse){
  this.allStocksService.updateByIsinNO(this.isinNo,Nse).subscribe(data=>{
    this.Nse=data;
    console.log(data);
  })

}}