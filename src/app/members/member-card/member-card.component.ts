import { Member } from './../../models/member';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {

 
  @Input () member: Member
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  public getSanitizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
}
