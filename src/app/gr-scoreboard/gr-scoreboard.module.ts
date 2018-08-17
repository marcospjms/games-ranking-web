import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrScoreboardRoutingModule } from './gr-scoreboard-routing.module';
import { GrScoreboardComponent } from './gr-scoreboard.component';

@NgModule({
  imports: [
    CommonModule,
    GrScoreboardRoutingModule
  ],
  declarations: [GrScoreboardComponent]
})
export class GrScoreboardModule { }
