import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrScoreboardComponent } from './gr-scoreboard.component';

const routes: Routes = [
  {
    path: '',
    component: GrScoreboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrScoreboardRoutingModule { }
