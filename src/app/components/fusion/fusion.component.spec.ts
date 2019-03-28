import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionPage } from './fusion.page';

describe('FusionPage', () => {
  let component: FusionPage;
  let fixture: ComponentFixture<FusionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FusionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FusionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
