import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { SignupComponent } from './component/signup/signup.component';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { AddTeamComponent } from './component/add-team/add-team.component';
import { LoginComponent } from './component/login/login.component';
import { MatchesComponent } from './component/matches/matches.component';
import { PlayersComponent } from './component/players/players.component';
import { AdminComponent } from './component/admin/admin.component';
import { MatchInfoComponent } from './component/match-info/match-info.component';
import { PlayerInfoComponent } from './component/player-info/player-info.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { SearchComponent } from './component/search/search.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { TeamInfoComponent } from './component/team-info/team-info.component';
import { EditTeamComponent } from './component/edit-team/edit-team.component';
import { OccurenceComponent } from './component/occurence/occurence.component';
import { WeatherComponent } from './component/weather/weather.component';
import { ProfileComponent } from './component/profile/profile.component';


const routes: Routes = [
 {path:'home',component:HomeComponent} ,
 {path:'contact',component:ContactComponent},
 {path:'login',component:LoginComponent},
 {path:'signup',component:SignupComponent},
 {path:'match',component:AddMatchComponent},
 {path:'player',component:AddPlayerComponent},
 {path:'editPlayer/:id',component:AddPlayerComponent},
 {path:'team',component:AddTeamComponent},
  {path:'team',component:AddTeamComponent},
  {path:'allMatches',component:MatchesComponent},
  {path:'players',component:PlayersComponent},
  {path:'admin',component:AdminComponent},
  {path:'matchInfo',component:MatchInfoComponent},
  {path:'playerInfo',component:PlayerInfoComponent},
  {path:'editMatch/:id',component:EditMatchComponent},

  {path:'search',component:SearchComponent},
  {path:'teamInfo',component:TeamInfoComponent},
  {path:'editTeam/:id',component:EditTeamComponent},
  {path:'occurence',component:OccurenceComponent},
  {path:'weather',component:WeatherComponent},
  {path:'profile',component:ProfileComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
