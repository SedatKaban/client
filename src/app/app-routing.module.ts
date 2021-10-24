import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';
import { ServerErrorComponent } from './server-error/server-error.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './_guards/auth.guard';
import { ListsComponent } from './lists/lists.component';
import { MessageComponent } from './message/message.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanDeactivate } from '@angular/router';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {
    path: "", 
    runGuardsAndResolvers: "always",
    canActivate:[AuthGuard],
    children:[
      {path:"members", component:MemberListComponent, canActivate : [AuthGuard]},
      {path:"members/:username", component:MemberDetailsComponent},
      {path:"member/edit", component:MemberEditComponent, canDeactivate:[PreventUnsavedChangesGuard]},
      {path:"lists", component:ListsComponent},
      {path:"messages", component:MessageComponent}

    ]

  },
  
  {path:"**", component:NotfoundComponent, pathMatch: "full"},
  {path:"not-found",component:NotfoundComponent},
  {path:"server-error",component:ServerErrorComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
