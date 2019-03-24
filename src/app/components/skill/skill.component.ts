import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {

  @Input() skill: any;
  constructor() { }

  ngOnInit() { }

  getCost() {
    if (this.skill.skill.cp === undefined) {
      return this.skill.skill.hp;
    } else {
      return this.skill.skill.cp;
    }
  }
}
