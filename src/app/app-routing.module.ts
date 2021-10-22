import { AuthGuard } from './_guards/auth.guard';
import { ListsComponent } from './lists/lists.component';
import { MessageComponent } from './message/message.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {
    path: "", 
    runGuardsAndResolvers: "always",
    canActivate:[AuthGuard],
    children:[
      {path:"members", component:MemberListComponent, canActivate : [AuthGuard]},
      {path:"members/:id", component:MemberDetailsComponent},
      {path:"lists", component:ListsComponent},
      {path:"messages", component:MessageComponent}

    ]

  },
  
  {path:"**", component:HomeComponent, pathMatch: "full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
