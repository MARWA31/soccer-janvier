import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
playerTab:any=[];
  constructor( private router:Router,
    private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPLayers().subscribe((response)=>{
      console.log("here respone from be",response);
      this.playerTab=response.players;
      
    });
  }
  deletPlayer(id){
    this.playerService.deletePlayer(id).subscribe((response)=>{
      console.log("here response from be",response);
      
    })
//     for (let i = 0; i < this.playerTab.length; i++) {
//  if (this.playerTab[i].id==id) {
//  this. playerTab.splice(i,1);
//  break;
//  }
      
//     }
    // localStorage.setItem("players",JSON.stringify(this.playerTab));
  }
  goToInfo(x){
    localStorage.setItem("id",x);
    this.router.navigate(["playerInfo"]);
  }
   goToEdit(y) {
    this.router.navigate([`editPlayer/${y}`]);
  }
}
