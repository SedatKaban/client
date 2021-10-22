import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = 'https://localhost:44366/api/';
  constructor(private http: HttpClient) {}
  private currentUserSource = new ReplaySubject<User>(1);
  currentUsers$ = this.currentUserSource.asObservable();


  register(model:any){

   return this.http.post(this.baseUrl + 'account/register',model).pipe(map((user:User)=>{

      if(user){

        localStorage.setItem("user",JSON.stringify(user));
        this.currentUserSource.next(user);
      }
      
    }))
  }
  
  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
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
