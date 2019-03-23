import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaInfoPage } from './persona-info.page';

describe('PersonaInfoPage', () => {
  let component: PersonaInfoPage;
  let fixture: ComponentFixture<PersonaInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
