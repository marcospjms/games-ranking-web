import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrScoreboardListComponent } from './gr-scoreboard-list/gr-scoreboard-list.component';
import { GrScoreboardDetailsComponent } from './gr-scoreboard-details/gr-scoreboard-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'todos'
      },
      {
        path: 'todos',
        component: GrScoreboardListComponent
      },
      {
        path: ':id/detalhes',
        component: GrScoreboardDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrScoreboardRoutingModule { }
