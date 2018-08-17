import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrPlayerRoutingModule } from './gr-player-routing.module';
import { GrPlayerComponent } from './gr-player.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GrPlayerRoutingModule
  ],
  declarations: [GrPlayerComponent]
})
export class GrPlayerModule { }
