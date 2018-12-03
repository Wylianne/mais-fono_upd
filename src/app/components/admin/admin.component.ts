import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Menu } from '../../role-menu/menu';
import { MENU } from '../../models/menus';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AuthService]
})
export class AdminComponent implements OnInit, OnDestroy {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  //Menu
  img: String;
  name: String;

  public auth2: any;

  menus: Menu[];

  constructor(public auth: AuthService) { }

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
    
    this.auth.user.subscribe( user =>{
          this.img = user.photoURL;
          this.name = user.displayName;
          this.menus = MENU;
    })
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }
}
