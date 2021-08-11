import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent {

  @Output() intervalFired = new EventEmitter<number>();
  @Output() resetInterval = new EventEmitter<boolean>();
  public interval: any;
  public lastNumber: number = 0;

  onStartCount(): void {
    this.interval = setInterval(() => {
      this.lastNumber++;
      this.intervalFired.emit(this.lastNumber);
    }, 1000);
  }

  onPauseCount(): void {
    clearInterval(this.interval);
  }

  onResetCount(): void {
    clearTimeout(this.interval);
    this.lastNumber = 0;
    this.resetInterval.emit(true);
  }
}
