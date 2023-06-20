import { Component, OnInit } from '@angular/core';
import {FormGroup  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm:FormGroup;
 player:any={};
 id:any;
 players:any=[];
 title:string="Add PLayer";
  constructor(
     private playerService:PlayerService,

    private activatedRouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    
    this.id=this.activatedRouter.snapshot.paramMap.get("id");
    if(this.id){
      this.title="edit player";
    
   this.playerService.getPlayerById(this.id).subscribe((response)=>{
    this.player=response.player;
   })
     
    }
  }
  validate(){
 if (this.id) {
  
  return this.playerService.editPlayer(this.player).subscribe(()=>{
    this.router.navigate(['admin']);
  } );
 
}else{
  return this.playerService.addPlayer(this.player).subscribe(()=>{
    this.router.navigate(['admin']);
  });
  }
  this.router.navigate(['admin']); 
// let idPlayer=JSON.parse(localStorage.getItem("playerId")||"1");
// let players= JSON.parse(localStorage.getItem("players")||"[]");
// this.player.id=idPlayer;
// players.push(this.player);
// localStorage.setItem("players",JSON.stringify(players));
// localStorage.setItem("playerId",JSON.stringify(idPlayer+1));
}
}
