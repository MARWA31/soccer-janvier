import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
connectedUser= localStorage.getItem("connectedUser");
avatarUrl:string;

  constructor( private userService:UserService) {  
   
  }

  ngOnInit() {
this.userService.getUserById(this.connectedUser).subscribe((response)=>{
  console.log("here response from be",response);
this.avatarUrl=response.user.avatar;
console.log(this.avatarUrl);


  
});
  }

}
