import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { user } from 'src/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  ImagePath: string;
  msg: string;
  loginForm: FormGroup;
  user :user;
  constructor(private authservice:AuthService, private router: Router) {
    this.ImagePath = '/assets/images/home.png'
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });

    this.authservice.msg$.subscribe({
      next: (data)=>{
        this.msg = data;
      }
    });
  }

  onLogin(){
    //Call Login API
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    let token = window.btoa(username + ':' + password);
    this.authservice.login(token).subscribe({
      next: (data)=>{


       this.user=data;  



         /*
          Save user details for login check
          1. Cache Memory
          2. Subjects
         */

         //Cache Memory


         localStorage.setItem("username",this.user.username);
         localStorage.setItem("role", this.user.role);
         localStorage.setItem("token", token);


         //Subject
        //this.authservice.user$.next(this.user);

         /* Check the role */
         if(this.user.role == 'Admin'){
            this.router.navigateByUrl('/edit');
          }
         else
          if(this.user.role == 'MEMBER'){
             this.router.navigateByUrl('/member');
         }
      },
      error: (err)=>{
         this.msg = 'Invalid Credentials';
      }
    });
  }


}
