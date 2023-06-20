import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches:any=[
    {scoreOne:1,scoreTwo:4,teamOne:"CA",teamTwo:"EST"},
    {scoreOne:0,scoreTwo:2,teamOne:"INIT",teamTwo:"JUV"},
    {scoreOne:5,scoreTwo:3,teamOne:"CA",teamTwo:"CSS"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
