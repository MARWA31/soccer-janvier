import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
teamForm:FormGroup;
team:any={};
id:any;
teams:any=[];
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
this.id=this.activatedRoute.snapshot.paramMap.get("id");
  this.teams=JSON.parse(localStorage.getItem("teams")||"[]");
  this.team=this.teams.find((elt)=>
    {return elt.id==this.id});
  
}
  editTeam(){
for (let i = 0; i < this.teams.length; i++) {
 if (this.teams[i].id==this.id) {
  this.teams[i]=this.team;
  break;
 }
  
}
localStorage.setItem("teams",JSON.stringify(this.teams));
this.router.navigate(['admin']);
  }
}
