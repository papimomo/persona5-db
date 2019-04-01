import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-home',
  templateUrl: './skill-home.component.html',
  styleUrls: ['./skill-home.component.scss'],
})
export class SkillHomeComponent implements OnInit {

  @Input() skill: any;
  constructor() { }

  ngOnInit() {}

  getCost(skill) {
    if (skill.hp !== undefined) {
      return 'HP:' + this.skill.hp;
    } else if (skill.cp !== undefined) {
      return 'CP:' + this.skill.cp;
    } else {
      return '';
    }
  }
}
