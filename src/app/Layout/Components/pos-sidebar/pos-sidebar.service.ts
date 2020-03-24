import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosSidebarService {

  private categorySource = new BehaviorSubject('');
  currentCategory = this.categorySource.asObservable();

  private shiftStatus = new BehaviorSubject(false.toString());
  shift = this.shiftStatus.asObservable();

  constructor() { }

  changeCategory(category: string) {
    this.categorySource.next(category);
  }

  changeShiftStatus(status: boolean) {
    this.shiftStatus.next(status.toString());
  }
}
