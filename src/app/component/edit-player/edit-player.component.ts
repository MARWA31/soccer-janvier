import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  playerForm: FormGroup;
  player: any = {};
  id: any;
  players: any = [];
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      this.id = this.activatedRoute.snapshot.paramMap.get("id");
      this.players = JSON.parse(localStorage.getItem("players") || "[]");
      this.player = this.players.find((elt) => { return elt.id == this.id });
      
  
    }
    editPlayer(){
    for (let i = 0; i < this.players.length; i++) {
    if (this.players[i].id==this.id) {
       this.players[i]=this.player;
       break;
    }
      
    }
    localStorage.setItem("players",JSON.stringify(this.players));
    this.router.navigate(['admin']);
  }
  }
  