import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { PosSidebarService } from 'src/app/Layout/Components/pos-sidebar/pos-sidebar.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { APISimulatorService } from 'src/app/API-simulator.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  shift = false;
  time = 0;
  // tslint:disable-next-line: max-line-length
  timerDisplay: { hours: { digit1: string; digit2: string; }; minutes: { digit1: string; digit2: string; }; seconds: { digit1: string; digit2: string; }; };
  timers: any;

  shiftStartBalance = 500;
  totalIncome = 2000;
  numberOfSales = 25;

  cashiers = [];

  constructor(
    private modalService: NgbModal,
    public api: APISimulatorService,
    public categoryService: PosSidebarService,
  ) { }

  ngOnInit() {
    this.time = this.api.getTimer();
    this.shift = this.api.getShift();
    this.cashiers = this.api.getCashiers();
    this.timers = '00 : 00 : 00';
    timer(0, 1000).subscribe(ec => {
      if (this.shift) {
        this.time++;
        this.timerDisplay = this.getDisplayTimer(this.time);
        this.timers = this.timerDisplay.hours.digit1 + this.timerDisplay.hours.digit2 +
          ' : ' + this.timerDisplay.minutes.digit1 + this.timerDisplay.minutes.digit2 +
          ' : ' + this.timerDisplay.seconds.digit1 + this.timerDisplay.seconds.digit2;
        this.api.sendTimer(this.time);
      }
    });
  }

  toggleShift() {
    this.time = 0;
    this.shift = !this.shift;
    this.api.sendShift(this.shift);
    this.modalService.dismissAll();
  }

  shiftStatusControl(status: boolean) {
    this.categoryService.changeShiftStatus(status);
  }

  // Timer Code For Shift Time

  getDisplayTimer(time: number) {
    const hours = '0' + Math.floor(time / 3600);
    const minutes = '0' + Math.floor(time % 3600 / 60);
    const seconds = '0' + Math.floor(time % 3600 % 60);

    return {
      hours: { digit1: hours.slice(-2, -1), digit2: hours.slice(-1) },
      minutes: { digit1: minutes.slice(-2, -1), digit2: minutes.slice(-1) },
      seconds: { digit1: seconds.slice(-2, -1), digit2: seconds.slice(-1) },
    };
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
    });

  }

}
