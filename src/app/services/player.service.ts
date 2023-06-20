import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
playerURL:string="http://localhost:3000/api/players";
  constructor( private httpClient:HttpClient) { }
getAllPLayers(){
  return this.httpClient.get<{players:any}>(this.playerURL);
}
getPlayerById(x){
  return this.httpClient.get<{player:any}>(`${this.playerURL}/${x}`);
}

 deletePlayer(id){
  return this.httpClient.delete(`${this.playerURL}/${id}`);
 }
 addPlayer(playerObj){
  return this.httpClient.post<{msg:string}>(this.playerURL,playerObj);
 }
 editPlayer(newPlayer){
  return this.httpClient.put(this.playerURL,newPlayer);
 }


}

