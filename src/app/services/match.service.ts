import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // express server destination address
matchURL:string="http://localhost:3000/api/matches";

  constructor( private httpClient:HttpClient) {}

  getAllMatches(){
    return this.httpClient.get<{matches:any,message:string}>(this.matchURL);
  }
  // match id exp 6
  getMatchById(x){
return this.httpClient.get<{match:any}>(`${this.matchURL}/${x}`);
  }
  // y:match id
  // resmonse:boolean
  deleteMatch(y){
    return this.httpClient.delete(`${this.matchURL}/${y}`);
  }
  // matchObj :{scoreone scoretwo...}
  addMatch(matchObj){
return this.httpClient.post(this.matchURL,matchObj);
  }
  // newMatch: object with new value
  editMatch(newMatch){
    return this.httpClient.put(this.matchURL,newMatch);
  }
  search(obj){

    return this.httpClient.post<{findedMatches:any,msg:string}>(this.matchURL+"/searchMatches",obj);
   
}
}
