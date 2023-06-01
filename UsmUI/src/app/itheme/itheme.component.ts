import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Theme } from '../models/Theme.model';
import { PortfolioheaderService } from '../services/portfolioheader.service';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-itheme',
  templateUrl: './itheme.component.html',
  styleUrls: ['./itheme.component.css']
})
export class IthemeComponent implements OnInit {
  themeForm: any;
  theme:Theme;
  iTheme:any;
  // assetClass:any[];
  assetClass:any;
  constructor(public formgroup:FormBuilder,
    private securityService:SecurityService,
    public http:HttpClient,
    private portfolioService:PortfolioheaderService,
    private route:Router) { }

  ngOnInit(): void {
    // this.assetClass  = [''];
    // this.portfolioService.getAsset().subscribe((data:any)=>{
    //   this.assetClass=data;
    //   console.log(this.assetClass);
    // })
    this.themeForm = this.formgroup.group({ 
      themeName:'',
      // assetClass:'',
      risk:'',
      investmentHorizon:''
  });

  }
  onSave(){
    this.theme = {
      themeName: this.themeForm.value.themeName,
      // assetClass: this.themeForm.value.assetClass,
      risk: this.themeForm.value.risk,
      investmentHorizon:this.themeForm.value.investmentHorizon
      // : this.searchSecurityName.value.units * this.searchSecurityName.value.price,
      // allocation:this.searchSecurityName.value.allocation
    };
    // confirm('Theme Saved')
    Swal.fire("Thank You...",'Theme added successfully','success');
    console.log(this.theme);
    // this.route.navigate(['/header'])

    this.securityService.postTheme(this.theme).subscribe({
      next: (data)=>{
        // this.route.navigate(['/securitylist'])
        this.route.navigate(['/asset'])
        console.log(data);
        this.securityService.getTheme$.next(data);
        localStorage.setItem("iTheme",this.theme.themeName);
        // myres=Response.th
        // alert(data.response.themeId);
        // console.log(alert(data.response.themeId))
        
      },
      error:(err)=>{
      }
    });
}
// onClick(): void{
//   this.http.get<any>("http://localhost:8899/api/get").subscribe(
//     res => { const user = res.find((a:any) => {
//       console.log(this.themeForm.value.assetClass);
//       if (a.assetClass == this.themeForm.value.assetClass){
//         this.themeForm.value.assetClass=a.assetClass;
//         console.log(this.themeForm.value.assetClass)
//       }
//     })
    
//     err => { 
//       return alert("There was an error" + err)
//     }
//   }
//   )

// }
}