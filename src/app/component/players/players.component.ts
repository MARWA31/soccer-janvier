import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
playersTab:any=JSON.parse(localStorage.getItem("players")||"[]");
  constructor() { }

  ngOnInit() {
  }

}
