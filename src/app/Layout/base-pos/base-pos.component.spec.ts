/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasePosComponent } from './base-pos.component';

describe('BasePosComponent', () => {
  let component: BasePosComponent;
  let fixture: ComponentFixture<BasePosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasePosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
