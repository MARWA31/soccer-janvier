import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
errorMsg;
connectedUser:any;
  constructor(
    private formBuilder:FormBuilder,
    private router:Router, 
    private userService:UserService)  { 

  }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      pwd:["",[Validators.required,Validators.minLength(6),Validators.maxLength(12)]]
    })
  }
  login(){
   
    return this.userService.Login(this.loginForm.value).subscribe((response=>{
      if (response.user) {
      console.log("here response frombe",response.user);

  localStorage.setItem('connectedUser',response.user.userId);
 
  this.router.navigate(["home"]);
}
return  this.errorMsg=response.msg;

    }));
    
// let users=JSON.parse(localStorage.getItem("users")||"[]");
// let user=this.loginForm.value;
// let findedUser;
// for (let i = 0; i < users.length; i++) {
//   if ((users[i].email==user.email)&&(users[i].pwd==user.pwd)) {
//     localStorage.setItem('connectedUser',users[i].id);
//     findedUser=users[i];
//     break;
// }
//   }
// if(findedUser){
//   if(findedUser.role=="admi,"){
//     this.router.navigate(["admin"]);
//   }
//   else{
//     this.router.navigate(['home']) ; 
//   }
// }else{
//   this.errorMsg=("please check Email/pwd");
// }
}
}

