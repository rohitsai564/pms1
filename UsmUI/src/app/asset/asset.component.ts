import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import { Asset } from '../models/Asset.model';
import { Theme } from '../models/Theme.model';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {

  asset:Asset;
  investmentTheme:string;
  themeDetails : Theme
  themeID : number;
  themeName: string;
  asset1:Asset[];
  

  assetForm = new FormGroup({
    assetClass: new FormControl(''),
    subAssetClass: new FormControl(''),
    allocation: new FormControl(''),   
    assetDesc: new FormControl('')
  })
  constructor(private securityService:SecurityService,  private route:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.assetForm = new FormGroup({
      themeId: new FormControl(''),
      assetClass: new FormControl('', [Validators.required]),
      subAssetClass: new FormControl('', [Validators.required]),
      allocation: new FormControl('', [Validators.required]),
      assetDesc: new FormControl('', [Validators.required]),
    });

    this.securityService.getAssetByThemeName(this.themeName).subscribe({
      next:(data)=>{
        console.log(this.themeName)
        console.log(data);
        this.asset1=data;
        console.log(this.asset);
      }
    })

    this.securityService.getTheme$.subscribe({
      next : (data) => {
        console.log("INSIDE ASSET")
        this.themeDetails = data;
        this.themeID = this.themeDetails.themeId;
        console.log(this.themeID)
      }
    })
  }
  
  // ngAfterContentInit(){
  //   // investmentTheme:any[];
  //   this.investmentTheme = localStorage.getItem("iTheme");
  //   console.log(localStorage.getItem("investmentTheme"))
  // }

  onSubmit(){

    this.asset = {
      assetClass: this.assetForm.value.assetClass,
      subAssetClass: this.assetForm.value.subAssetClass,
      allocation: this.assetForm.value.allocation,
      assetDesc: this.assetForm.value.assetDesc,
    };
    // confirm('Header Submitted')
    Swal.fire("Thank You...",'Asset added successfully','success');
    console.log(this.asset);

    this.securityService.postAsset(this.asset,this.themeID).subscribe({
      next: (data)=>{
        this.route.navigate(["/header"],{ relativeTo: this.activatedRoute });
        this.route.navigate(['/header']);
        console.log(data);
        // console.log(this.route.navigate(['/header']));
        // localStorage.setItem();
        // localStorage.getItem("tName");
      },
      error:(err)=>{
      }
    });
}

}