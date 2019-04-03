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
    if ((skill.info_short.startsWith('小') ||
      skill.info_short.startsWith('中') ||
      skill.info_short.startsWith('大') ||
      skill.info_short.startsWith('特大') ||
      skill.info_short.startsWith('超特大')
    ) && skill.info_short.indexOf('即死') === -1
     && skill.info_short.indexOf('回復') === -1
    ) {
      info = '威力 : ' + skill.info_short;
    } else {
      info = skill.info_short;
    }
    return info;
  }
}
