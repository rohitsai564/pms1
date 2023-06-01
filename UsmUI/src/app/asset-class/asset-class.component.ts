import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asset } from '../models/Asset.model';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-asset-class',
  templateUrl: './asset-class.component.html',
  styleUrls: ['./asset-class.component.css']
})
export class AssetClassComponent implements OnInit {
  themeName:string;
  asset:Asset[];

  constructor(private securityService:SecurityService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    // this.getAsset();
    // console.log(this.getAsset)

    this.themeName = this.activatedRoute.snapshot.params['themeName'];
    localStorage.getItem("tName");
    console.log(this.themeName);

    this.securityService.getAssetByThemeName(localStorage.getItem("tName")).subscribe({
      next:(data)=>{
        console.log(data);
        this.asset=data;
        console.log(this.asset);
      }
    })
    
}
}

