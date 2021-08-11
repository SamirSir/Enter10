import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd-even-game',
  templateUrl: './odd-even-game.component.html',
  styleUrls: ['./odd-even-game.component.scss']
})

export class OddEvenGameComponent {
  public oddNumbers: number[] = [];
  public evenNumbers: number[] = [];

  updateNumberList(emittedNumber: number): void {
    if (emittedNumber % 2 === 0) {
      this.evenNumbers.push(emittedNumber);
    } else {
      this.oddNumbers.push(emittedNumber);
    }
  }

  resetNumberList(resetEmitter: boolean): void {
    if (resetEmitter) {
      this.evenNumbers = [];
      this.oddNumbers = [];
    }
  }
}
