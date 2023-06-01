import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { allstocks } from 'src/models/allstocks';
import Swal from 'sweetalert2';
import { nse } from '../models/Nse';
import { Portfolio } from '../models/Portfolio.model';
import { Security } from '../models/Securities.model';


import { AllStocksService } from '../services/all-stocks.service';
import { PortfolioheaderService } from '../services/portfolioheader.service';
import { SecurityService } from '../services/security.service';
import { SharedService } from '../services/shared.Service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  public securityArray: Security[];
  securityName:string;
  // investmentValue:any;
  // InvestmentValue:any;
  // stocksArr1:allstocks[];
  stocksArr1:nse;
  array:Security[];
  searchSecurityName: any;
  createPortForm: FormGroup;
  security:Security;
  stock:nse[];
  nse:any;
  selected:string;
  last:any;
  total:number;
  portfolioName:string;
  availableBalance:any;
  // totalTransaction:number[]=[];
  sum:number;
  portfolio:Portfolio;
  receivedName:any;
  receivedValue:any;
  numbers:number[]=[];
  securityDetails : Security[] = [];
  totalTransaction : number[] =[];
  totalVal : number = 0;
  availableAmount : number = 0;

  investmentValue : number;
  constructor(private allStocksService:AllStocksService,
    private securityService:SecurityService,
      public http:HttpClient,
      public formgroup:FormBuilder,
      private route:Router,private portfolioService:PortfolioheaderService,
      private sharedService:SharedService,
      private activatedRoute : ActivatedRoute
      ) { }


  ngOnInit(): void {

    this.portfolioName = this.activatedRoute.snapshot.params['portfolioName'];
    this.investmentValue = this.activatedRoute.snapshot.params['investmentValue']
    console.log(this.portfolioName+"  "+this.investmentValue);
    
    // this.totalTransaction.push(newValue);
    // this.getSecurity(this.portfolioName).subscribe(data =>{
    //   this.array=data;
    //   console.log(data)
    // })

    // this.sum=this.calculateSum(this.totalTransaction);
    // console.log(this.sum)

    // this.securityService.getSecurityDetails$.subscribe({
    //   next : (data) => {
    //     this.array = data;
    //     console.log(this.array);
        
    //   }
    // })

    this.securityService.getSecurityByPortfolioName(this.portfolioName).subscribe({
      next: (data)=>{
        this.array=data;
        console.log(this.array)
        this.array.map((total) => {
          console.log(total);
          this.totalTransaction.push(total.totalTransaction);
        })
        console.log(this.totalTransaction);
        this.totalTransaction.forEach((val) => {
          this.totalVal =this.totalVal + val;
        })
        console.log("TOTAL VALUE: "+this.totalVal)
        this.availableAmount = this.investmentValue - this.totalVal;
        console.log(this.availableAmount);
        // location.reload();
      }
    })



      
    

    // this.http.get<any>("http://localhost:8899/api/get").subscribe(
    //   res => { const user = res.find((a:any) => {
    //     console.log(this.themeForm.value.assetClass);
    //     if (a.assetClass == this.themeForm.value.assetClass){
    //       this.themeForm.value.assetClass=a.assetClass;
    //       console.log(this.themeForm.value.assetClass)
    //     }
    //   })
      
      err => { 
        return alert("There was an error" + err)
      }

    // this.securityService.getAllSecurities().subscribe(data =>{
    //   this.securityArray = data;
    // });
    this.receivedValue = this.sharedService.getValue();
    this.securityService.getAllstocks().subscribe(data=>{
      this.stock=data;
    })
      this.searchSecurityName = this.formgroup.group({ 
      securityName:'',
      units:'',
      price:'',
      totalTransaction:'',
      transactionDate:'',
      
    });
  }
  getSecurity(portfolioName:string): Observable<Security[]>{
    const url=`http//localhost:1250/api/composition/get/security/?portfolioName=${portfolioName}`;
     return this.http.get<Security[]>(url);
   }
  
  // handleTotalAmount(portfolioName:string):number{
  //   let all=0;
  //   this.searchSecurityName.forEach((data) => {
  //     if(data.portfolioName == portfolioName){
  //       all+=parseFloat(data.total);
  //     }else{
  //       console.log('Portfolio Not Found');
  //     }
      
  //   });
  //   const availableBalance = parseFloat(this.receivedValue)-all;
  //   localStorage.setItem('TotalAmount',this.availableBalance);
  //   return availableBalance;
  // }



  ngAfterContentInit(){
    // setThe Received value in local storage
    //else insufficient amount

    this.receivedValue = localStorage.getItem("iv")
    console.log(localStorage.getItem("name"))
    this.receivedName = localStorage.getItem("name")

  }

  getSecurities(){
    this.securityService.getAllSecurities().subscribe(data =>{
      this.securityArray = data;
      location.reload();
    })
  }
   
  deleteSecurity(securityName:string){
    this.getSecurities();
    this.securityService.deleteSecurity(securityName).subscribe(data =>{
    });
    // confirm('Deleted!!');
    let text;
if (confirm("Press a button!") == true) {
  text = "You pressed OK!";
} else {
  text = "You canceled!";
}
    location.reload();
}

  // searchSubmit(){
  //   this.allStocksService.getAllStocks();
  //   if(this.allStocksService.Stocks.securityName === ){
  //   // this.searchSecurityName.price = Object.assign({},this.allStocksService.Stocks.close);
  //   console.log(this.allStocksService.Stocks);
  //   console.log(this.searchSecurityName.value.price);
  // }
  // }

  onClick(selected): void{
    this.http.get<any>("http://localhost:1250/api/stocks/all/").subscribe(
      res => { const user = res.find((a:any) => {
        console.log(this.searchSecurityName.value.securityName);
        // console.log(a.securityName);
        
        if(a.symbol == this.searchSecurityName.value.securityName){
          localStorage.getItem("name")
          
          localStorage.setItem("price",a.price)
          this.searchSecurityName.value.price=a.last
          this.security.price=this.searchSecurityName.value.price
         // this.total=this.searchSecurityName.value.units * this.searchSecurityName.value.price;
          
          console.log(this.searchSecurityName.value.last);
        }
        let investmentValue= localStorage.getItem('InvestmentValue');
        //this.total=this.searchSecurityName.value.units * this.searchSecurityName.value.price;
        //localStorage.setItem("total",this.total);
        //localStorage.setItem("totalTrans",this.security.totalTransaction)
        // if (a.securityName == this.searchSecurityName.value.securityName){
        //   this.searchSecurityName.value.price=a.last;
        //   console.log(this.searchSecurityName.value.price)
        // }
        // else{
        //   localStorage.setItem("price",'Nothing');
        // } 
      })
      
      err => { 
        return alert("There was an error" + err)
      }
    }
    )
  
  }

  // onSelect(selected){

  //    // this.symbol=val;)
    
  //   this.http.get<any>("http://localhost:8899/api/stocks/all").subscribe(
    
  //    res => {
    
  //    const stock = res.find((a:any) => {
    
  //    if(a.securityName == this.searchSecurityName.value.securityName
  //     ){
    
  //   localStorage.setItem("Price",a.last)
    
  //   this.searchSecurityName.value.price = a.last
    
  //   this.security.price = this.searchSecurityName.value.price
    
  //   console.log(this.searchSecurityName.value.price);
    
  //   this.security.currentValue=this.searchSecurityName.value.price*this.searchSecurityName.value.units;
    
  //   this.availableBalance=this.portfolioService.investmentValue-this.security.currentValue;
    
  //   console.log(this.searchSecurityName.value.currentValue);
    
  //   console.log()
    
  //    }
    
  //    })
    
  //    }
    
  //   )
    
  //    }


 

  onSave(){
    this.security = {
      securityName: this.searchSecurityName.value.securityName,
      transactionDate: this.searchSecurityName.value.transactionDate,
      units: this.searchSecurityName.value.units,
      price: this.searchSecurityName.value.price,
      totalTransaction: this.searchSecurityName.value.units * this.searchSecurityName.value.price,
      // allocation:this.searchSecurityName.value.allocation
    };
    localStorage.setItem("totalTrans",this.security.totalTransaction);
    let investmentValue=localStorage.getItem("iv");

    localStorage.getItem("totalTrans")

    // this.availableBalance=this.portfolio.investmentValue-this.security.totalTransaction;
    localStorage.setItem("avbl",this.availableBalance);
    // confirm('Securities Saved')
    Swal.fire("Thank You...",'You added security successfully','success');
    // console.log(this.security);
    // document.write(investmentValue)
    this.securityService.postSecurity(this.security,localStorage.getItem("name")).subscribe({
      next: (data)=>{
        
        // this.route.navigate(['/securitylist'])
        // location.reload();
        
      },
      error:(err)=>{
      }
    });

  }
  // calculateSum(totalTransaction:any){
  //   let sum=0;
  //   for(const value of totalTransaction){
  //     sum+=value;
  //   }
  //   return sum;
  //   console.log(sum);
  // }
   }
