import { Component, OnInit } from '@angular/core';
import { PortfolioheaderService } from '../services/portfolioheader.service';

@Component({
  selector: 'app-viewtheme',
  templateUrl: './viewtheme.component.html',
  styleUrls: ['./viewtheme.component.css']
})
export class ViewthemeComponent implements OnInit {
  themeArray: any[];
  // getTheme():;
  
  

  constructor(private portfolioheaderService: PortfolioheaderService) { }

  ngOnInit(): void {
    // this.getTheme();
   
  
  
    this.portfolioheaderService.getTheme().subscribe(data =>{
      this.themeArray = data;
  })
  }
  
  }

