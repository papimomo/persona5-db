import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionListPage } from './fusion-list.page';

describe('FusionListPage', () => {
  let component: FusionListPage;
  let fixture: ComponentFixture<FusionListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FusionListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FusionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
