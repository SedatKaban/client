import { AccountService } from './_services/account.service';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { User } from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
title = 'The Dating App';
  users: any;
  constructor ( private accountService:AccountService){}

  ngOnInit(): void {

    
    this.setcurrentUsers();
    }
    

    setcurrentUsers()
    {
      const user:User = JSON.parse(localStorage.getItem ('user'));
      this.accountService.setcurrentUser(user);
    }


    
  

  }

 
  

  
  


