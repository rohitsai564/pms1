import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class SharedService {
      private sharedValue:any;

      setValue(portfolioName:any){
          this.sharedValue=portfolioName;
      }
      getValue():any{
        return this.sharedValue;
    }
  }