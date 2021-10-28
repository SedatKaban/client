import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { SharedModule } from './shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MessageComponent } from './message/message.component';
import { ListsComponent } from './lists/lists.component';
import { NgxSpinner } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailsComponent,
    MessageComponent,
    ListsComponent,
    NotfoundComponent,
    ServerErrorComponent,
    MemberCardComponent,
    MemberEditComponent,
    PhotoEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    

    
  ],
  providers: [

    
  {provide:HTTP_INTERCEPTORS , useClass:ErrorInterceptor , multi:true},
  {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true}
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
