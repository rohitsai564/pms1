import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { allstocks } from 'src/models/allstocks';
import { AllStocksService } from '../services/all-stocks.service';

@Component({
  selector: 'app-isin-no',
  templateUrl: './isin-no.component.html',
  styleUrls: ['./isin-no.component.css']
})
export class IsinNoComponent implements OnInit {

  isinNo:string;
stocksArr:allstocks[];

  constructor(private allStocksService:AllStocksService) { }

  ngOnInit(): void {
  }
  // searchSubmit(searchIsin: NgForm){
  //   this.isinNo=searchIsin.value.isinNo;
  //   this.allStocksService.getIsin(this.isinNo).subscribe(data=>{
  //   this.stocksArr= data;
  //   });


    // getIsin(isinNo:string){
    //   return this.http.get<allstocks[]>(environment.serverUrl +'/api/stocks/'+isinNo);
    // }



    // public getClaimById(claimId:number){
    //   return this.http.get<Claim>(environment.serverUrl + '/claim/getById/'+claimId)
  
    // }
  }

// component.ts=
// searchSubmit(searchClaim: NgForm){
//   this.claimId= searchClaim.value.claimId;
//   this.adminService.getClaimById(this.claimId).subscribe(data=>{
//   this.claim = data;
//   });
// }

 // <div class="card text-center">
  // <div class="card-header">
  //   <form #searchClaim="ngForm" (submit)="searchSubmit(searchClaim)">
  //   <div class="input-group mb-3">
  //     <input type="number" class="form-control" placeholder="Enter Claim Id" aria-label="Recipient's username" aria-describedby="button-addon2" name="claimId" ngModel #claimId="ngModel">
  //     <button class="btn btn-outline-secondary" type="submit" id="button-addon2" value="Get Details">Submit</button>
  //   </div>
  //   </form>
  // </div>

// OUR
// <div class="card text-center">
//     <div class="card-header">
//       <form #searchIsin="ngForm" (submit)="searchSubmit(searchIsin)">
//       <div class="input-group mb-3">
//         <input type="text" class="form-control" placeholder="Search by ISIN NO" aria-label="Recipient's username" aria-describedby="button-addon2" name="isinNo" ngModel #claimId="ngModel">
//         <button class="btn btn-outline-secondary" type="submit" id="button-addon2" value="Get Details">Submit</button>
//       </div>
//       </form>
//     </div>


 

