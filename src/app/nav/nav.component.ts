import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private router:Router, private toastr:ToastrService,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {

    
  }

  login() {
    this.accountService.login(this.model).subscribe((response) => 
    {
     
      this.router.navigateByUrl('/members')
   
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
   
  }

  public getSanitizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
 
    
  }
}
