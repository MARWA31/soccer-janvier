import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators}from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editForm:FormGroup;
  id:any;
  user:any;
  imagePreview: string;
  connectedUSer:any;
  constructor( private formBuilder:FormBuilder,
    private userService:UserService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit() {
    this.editForm=this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      img: [""]
    });
     this.id = this.activatedRoute.snapshot.paramMap.get("id");
     this.connectedUSer=localStorage.getItem("connectedUser")
    return this.userService.getUserById(this.connectedUSer).subscribe((response)=>{
   
      this.user=response.user;
      console.log(this.user);
      
    });
   
  }
edit(){
  console.log("here result from be",this.editForm.value);
  
return this.userService.edit(this.editForm.value,this.editForm.value.img).subscribe();
}
onImageSelected(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.editForm.patchValue({ img: file });
  this.editForm.updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result as string
  };
  reader.readAsDataURL(file);
}
}
