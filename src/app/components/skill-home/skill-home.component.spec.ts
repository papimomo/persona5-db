import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillHomePage } from './skill-home.page';

describe('SkillHomePage', () => {
  let component: SkillHomePage;
  let fixture: ComponentFixture<SkillHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
