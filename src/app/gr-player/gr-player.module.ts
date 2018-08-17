import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrPlayerRoutingModule } from './gr-player-routing.module';
import { GrPlayerListComponent } from './gr-player-list/gr-player-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GrPlayerRoutingModule
  ],
  declarations: [GrPlayerListComponent]
})
export class GrPlayerModule { }
