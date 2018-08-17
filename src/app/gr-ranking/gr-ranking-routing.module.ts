import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrRakingListComponent } from './gr-ranking-list/gr-ranking-list.component';
import { GrRankingDetailsComponent } from './gr-ranking-details/gr-raking-details.component';

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
        component: GrRakingListComponent
      },
      {
        path: ':id/detalhes',
        component: GrRankingDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrRankingRoutingModule { }
