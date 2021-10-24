import { MemberEditComponent } from './../members/member-edit/member-edit.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: MemberEditComponent
  ): boolean {

    if(component.editForm.dirty){

      return confirm("Devam etmek istediğiniz eminmisiniz? Henüz kaydedilmemiş değişikleri kaybedeceksiniz")
    }
    return true;
  }
  
}
