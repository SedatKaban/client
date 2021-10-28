import { environment } from './../../environments/environment';

import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  private currentUserSource = new ReplaySubject<User>(1);
  currentUsers$ = this.currentUserSource.asObservable();


  register(model:any){

   return this.http.post(this.baseUrl + 'account/register',model).pipe(map((user:User)=>{

      if(user){

        this.setcurrentUser(user);
      }
      
    }))
  }
  
  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          this.setcurrentUser(user);
        }
      })
    );
  }
  setcurrentUser(user:User)
  {
    this.currentUserSource.next(user);

  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
