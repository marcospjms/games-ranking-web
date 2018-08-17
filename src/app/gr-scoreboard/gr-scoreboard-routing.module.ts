import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrScoreboardListComponent } from './gr-scoreboard-list/gr-scoreboard-list.component';

const routes: Routes = [
  {
    path: '',
    component: GrScoreboardListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrScoreboardRoutingModule { }
