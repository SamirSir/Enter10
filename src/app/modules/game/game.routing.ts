import { OddEvenGameComponent } from './pages/odd-even-game/odd-even-game.component';
import { GameComponent } from './game.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'odd-even',
    pathMatch: 'full'
  },
  {
    path: '',
    component: GameComponent,
    children: [
      {
        path: 'odd-even',
        component: OddEvenGameComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GameRoutingModule { }
