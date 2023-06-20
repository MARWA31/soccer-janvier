import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
teamTable:any=[];
  constructor(private router:Router) { }

  ngOnInit() {
    this.teamTable=JSON.parse(localStorage.getItem("teams"));
  }
  goToInfo(x){
localStorage.setItem("id",x);
this.router.navigate(["teamInfo"]);
  }
  goToEdit(y){
this.router.navigate([`editTeam/${y}`]);
  }
  deletTeam(id){
    for (let i = 0; i < this.teamTable.length; i++) {
     if (this.teamTable[i].id==id) {
     this.teamTable.splice(i,1);
     break;
     }
      
    }
    localStorage.setItem("teams",JSON.stringify(this.teamTable));
  }
}
