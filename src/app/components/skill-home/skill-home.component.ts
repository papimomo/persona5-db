import { Component, OnInit, Input } from '@angular/core';
import { element, Skill } from 'src/app/data/persona_enum';

@Component({
  selector: 'app-skill-home',
  templateUrl: './skill-home.component.html',
  styleUrls: ['./skill-home.component.scss'],
})
export class SkillHomeComponent implements OnInit {

  @Input() skill: any;
  constructor() { }

  ngOnInit() { }

  getCost(skill) {
    if (skill.hp !== undefined) {
      return 'HP:' + this.skill.hp;
    } else if (skill.cp !== undefined) {
      return 'SP:' + this.skill.cp;
    } else {
      return '';
    }
  }
  getSkillShortInfo(skill: Skill) {
    let info: string;
    if (this.isAttackSkill(skill)) {
      info = '威力 : ' + skill.info_short;
    } else {
      info = skill.info_short;
    }
    return info;
  }

  isAttackSkill(skill: Skill) {
    switch (skill.element) {
      case element.ab_state:
      case element.auto:
      case element.recovery:
      case element.support:
        return false;

      default:
        if (skill.info_short.indexOf('即死') === -1
          && skill.info_short.indexOf('HP') === -1
          && skill.info_short.indexOf('SP') === -1
          && skill.info_short.indexOf('状態異常付着率') === -1) {
          return true;
        } else {
          return false;
        }
    }
  }
}
