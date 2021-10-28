import { MembersService } from './../../_services/members.service';
import { AccountService } from './../../_services/account.service';
import { environment } from './../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Member } from 'src/app/models/member';
import { User } from 'src/app/models/user';
import { take } from 'rxjs/operators';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
@Input() member:Member;
uploader: FileUploader;
hasBaseDropZoneOver =false;
baseUrl = environment.apiUrl;
user: User;
  constructor( private accountService : AccountService, private memberService:MembersService) {
    this.accountService.currentUsers$.pipe(take(1)).subscribe(user=> {

      this.user= user;
    }  )
   }

  ngOnInit(): void {
    this.initiliazaeUploader();
  }

  fileOverBase(e:any){

    this.hasBaseDropZoneOver=e;


  }

  setMainPhoto(photo:Photo){
    this.memberService.setMainPhoto(photo.id).subscribe(()=>{
      this.user.photoUrl = photo.url;
      this.accountService.setcurrentUser(this.user);
      this.member.photoUrl=photo.url;
      this.member.photos.forEach(p=> {

        if (p.isMain) p.isMain= false;
        if(p.id=== photo.id) p.isMain= true;
      }
         
      
    )})
  }

  deletePhoto(photoId:number){

this.memberService.deletePhoto(photoId).subscribe(()=>{

  this.member.photos=this.member.photos.filter(x=>x.id !==photoId)
})
  }

  initiliazaeUploader(){
    this.uploader= new FileUploader ({
      url: this.baseUrl + "users/add-photo",
      authToken:"Bearer "+ this.user.token,
      isHTML5: true,
      allowedFileType: ["image"],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10*1024*1024


    });
    this.uploader.onAfterAddingFile = (file)=>{

      file.withCredentials=false;
    }

    this.uploader.onSuccessItem = (item, response, status, headers)=>{

      if(response){
        const photo = JSON.parse(response);
        this.member.photos.push(photo);
      }


    }
  }
}
