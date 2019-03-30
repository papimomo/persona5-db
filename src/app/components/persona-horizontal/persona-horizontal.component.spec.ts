import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaHorizontalPage } from './persona-horizontal.page';

describe('PersonaHorizontalPage', () => {
  let component: PersonaHorizontalPage;
  let fixture: ComponentFixture<PersonaHorizontalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaHorizontalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaHorizontalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
