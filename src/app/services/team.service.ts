import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
teamURL:string="http://localhost:3000/api/teams";
  constructor(private httpClient:HttpClient) { }
  getAllTeams(){
    return this.httpClient.get(this.teamURL);
  }
  getTeamById(x){
    return this.httpClient.get(`${this.teamURL}/${x}`);
  }
  editTeam(newTeam){
    return this.httpClient.put(this.teamURL,newTeam);
  }
  addTeam(teamObj){
    return this.httpClient.post(this.teamURL,teamObj);
  }
}
