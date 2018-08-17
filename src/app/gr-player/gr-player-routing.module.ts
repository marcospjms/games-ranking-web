import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrPlayerComponent } from './gr-player.component';

const routes: Routes = [
  {
    path: '',
    component: GrPlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrPlayerRoutingModule { }
