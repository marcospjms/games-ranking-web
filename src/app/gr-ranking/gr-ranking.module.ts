import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrRankingRoutingModule } from './gr-ranking-routing.module';
import { GrRakingListComponent } from './gr-ranking-list/gr-ranking-list.component';
import { FormsModule } from '@angular/forms';
import { GrRankingDetailsComponent } from './gr-ranking-details/gr-raking-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GrRankingRoutingModule,
  ],
  declarations: [
    GrRakingListComponent,
    GrRankingDetailsComponent
  ]
})
export class GrRankingModule { }
