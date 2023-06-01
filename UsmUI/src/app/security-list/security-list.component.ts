import { Component, OnInit } from '@angular/core';
import { Security } from '../models/Securities.model';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-security-list',
  templateUrl: './security-list.component.html',
  styleUrls: ['./security-list.component.css']
})
export class SecurityListComponent implements OnInit {

  public securityArray: Security[];

  constructor(private securityService:SecurityService) { }

  ngOnInit(): void {
    this.getSecurities();
  }

  private getSecurities(){
    this.securityService.getAllSecurities().subscribe(data =>{
      this.securityArray = data;
    })
  }

  deleteSecurity(securityName:string){
    this.getSecurities();
    this.securityService.deleteSecurity(securityName).subscribe(data =>{
    });
    // confirm('Deleted!!');
    // Swal.fire(
    //   'Good job!',
    //   'You clicked the button!',
    //   'success'
    // )
    location.reload();
  }

}
