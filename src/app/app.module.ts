import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { CupEventComponent } from './component/cup-event/cup-event.component';
import { ResultComponent } from './component/result/result.component';
import { NewsComponent } from './component/news/news.component';
import { BlogComponent } from './component/blog/blog.component';
import { StatsComponent } from './component/stats/stats.component';
import { InfoComponent } from './component/info/info.component';
import { ArticleComponent } from './component/article/article.component';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddTeamComponent } from './component/add-team/add-team.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { MatchesComponent } from './component/matches/matches.component';
import { PlayersComponent } from './component/players/players.component';
import { PlayerComponent } from './component/player/player.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './component/admin/admin.component';
import { MatchTableComponent } from './component/match-table/match-table.component';
import { PlayersTableComponent } from './component/players-table/players-table.component';
import { TeamsTableComponent } from './component/teams-table/teams-table.component';
import { MatchInfoComponent } from './component/match-info/match-info.component';
import { PlayerInfoComponent } from './component/player-info/player-info.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { SearchComponent } from './component/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { TeamInfoComponent } from './component/team-info/team-info.component';
import { EditTeamComponent } from './component/edit-team/edit-team.component';
import { OccurenceComponent } from './component/occurence/occurence.component';
import { OccurencePipe } from './pipes/occurence.pipe';
import { WeatherComponent } from './component/weather/weather.component';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { ProfileComponent } from './component/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    HomeComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    BlogComponent,
    StatsComponent,
    InfoComponent,
    ArticleComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    MatchesComponent,
    PlayersComponent,
    PlayerComponent,
    AdminComponent,
    MatchTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    MatchInfoComponent,
    PlayerInfoComponent,
    EditMatchComponent,
    AsterixPipe,
    SearchComponent,
    EditPlayerComponent,
    TeamInfoComponent,
    EditTeamComponent,
    OccurenceComponent,
    OccurencePipe,
    WeatherComponent,
    MyFilterPipe,
    ProfileComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
