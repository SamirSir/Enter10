import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game.routing';
import { GameComponent } from './game.component';
import { GameControlComponent } from './pages/components/game-control/game-control.component';
import { OddEvenGameComponent } from './pages/odd-even-game/odd-even-game.component';
import { OddComponent } from './pages/components/odd/odd.component';
import { EvenComponent } from './pages/components/even/even.component';

@NgModule({
  declarations: [
    GameComponent,
    GameControlComponent,
    OddEvenGameComponent,
    OddComponent,
    EvenComponent
  ],

  imports: [
    CommonModule,
    GameRoutingModule
  ]
})

export class GameModule { }
