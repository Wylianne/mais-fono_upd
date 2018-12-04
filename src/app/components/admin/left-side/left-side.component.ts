import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { Menu } from '../../../role-menu/menu';
import { MENU } from '../../../models/menus';

declare const gapi: any;

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css'],
  providers: [AuthService]
})
export class LeftSideComponent implements OnInit {
  img: String;
  name: String;

  public auth2: any;

  @Input()
  menus: Menu[];

  constructor(public auth: AuthService) { }

  ngOnInit() {
      console.log('entrou'); 
      this.auth.user.subscribe( user =>{
          this.img = user.photoURL;
          this.name = user.displayName;
          this.menus = MENU;
      })
  }

}
