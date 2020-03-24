/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PosCashierComponent } from './pos-cashier.component';

describe('PosCashierComponent', () => {
  let component: PosCashierComponent;
  let fixture: ComponentFixture<PosCashierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosCashierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosCashierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
