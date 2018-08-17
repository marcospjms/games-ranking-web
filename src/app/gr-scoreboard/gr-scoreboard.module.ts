import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrScoreboardRoutingModule } from './gr-scoreboard-routing.module';
import { GrScoreboardListComponent } from './gr-scoreboard-list/gr-scoreboard-list.component';
import { FormsModule } from '@angular/forms';
import { GrScoreboardDetailsComponent } from './gr-scoreboard-details/gr-scoreboard-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GrScoreboardRoutingModule,
  ],
  declarations: [
    GrScoreboardListComponent,
    GrScoreboardDetailsComponent
  ]
})
export class GrScoreboardModule { }
