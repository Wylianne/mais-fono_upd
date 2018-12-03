import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from '../../core/auth.service';


@Component({
  selector: 'onepage',
  templateUrl: './onepage.component.html',
  styleUrls: ['./onepage.component.css']
  providers: [AuthService]
})
export class OnepageComponent implements OnInit {
  
  constructor(public auth: AuthService, private router: Router){ 

  }

  login(){
    this.auth.googleLogin().then(
      () => {
        console.log("Login")
        this.router.navigate(['/sistema/dash'])
      } 
    ).catch(error =>{
        console.log(error)
      } )
  }
  

  ngOnInit() {
    
  }



}
