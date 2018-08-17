import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { GrScoreboardModule } from './gr-scoreboard/gr-scoreboard.module';
import { GrPlayerModule } from './gr-player/gr-player.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'scoreboards',
        pathMatch: 'full'
      },
      {
        path: 'scoreboards',
        loadChildren: () => GrScoreboardModule
      },
      {
        path: 'jogadores',
        loadChildren: () => GrPlayerModule
      }
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
