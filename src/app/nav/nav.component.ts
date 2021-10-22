import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private router:Router, private toastr:ToastrService) {}

  ngOnInit(): void {

    
  }

  login() {
    this.accountService.login(this.model).subscribe((response) => 
    {
     
      this.router.navigateByUrl('/members')
   
    }),
      error => {
        console.log(error.error);
        this.toastr.error(error.error );
       
      };
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
   
  }
 
    
  
}