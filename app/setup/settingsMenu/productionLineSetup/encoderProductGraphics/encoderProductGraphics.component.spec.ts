/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EncoderProductGraphicsComponent } from './encoderProductGraphics.component';

describe('SizerComponent', () => {
  let component: EncoderProductGraphicsComponent;
  let fixture: ComponentFixture<EncoderProductGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule ({
      declarations: [ EncoderProductGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoderProductGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});