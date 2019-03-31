import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SkillDb } from '../../data/skill/skill-db';
import { PersonaDb } from '../../data/personaDb';
import { element } from '../../data/persona_enum';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.page.html',
  styleUrls: ['./skill.page.scss'],
})
export class SkillPage implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
  }

  skill;
  personaListHasSkill = [];

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      const name = params.get('name');
      console.log(name);
      this.skill = new SkillDb().getSkillList().find(skill => skill.name === name);

      this.getSkillPersona(this.skill).then(() => {

        this.personaListHasSkill.forEach(persona => {
          console.log(persona);

        })
      })
    });
  }

  async getSkillPersona(skill) {
    this.personaListHasSkill = Array();
    new PersonaDb().persona.forEach(persona => {
      if (persona.skill instanceof Array) {

        persona.skill.find((t) => {
          const ret = t.skill.name === skill.name;
          if (ret) {
            this.personaListHasSkill.push(persona);
          }
          return ret;
        });
      }
    });
  }


  getCost(skill) {
    if (skill.hp !== undefined) {
      return 'HP:' + this.skill.hp;
    } else if (skill.cp !== undefined) {
      return 'CP:' + this.skill.cp;
    } else {
      return '';
    }
  }

  getElementName(ele: element) {
    let name;
    switch (ele) {
      case element.ab_state:
        name = '状態異常';
        break;
      case element.almight:
        name = '万能';
        break;
      case element.auto:
        name = '自動';
        break;
      case element.bless:
        name = '祝福';
        break;
      case element.curse:
        name = '呪怨';
        break;
      case element.electric:
        name = '電撃';
        break;
      case element.fire:
        name = '火炎';
        break;
      case element.gun:
        name = '銃';
        break;
      case element.nuclear:
        name = '核熱';
        break;
      case element.psy:
        name = '念動';
        break;
      case element.recovery:
        name = '回復';
        break;
      case element.support:
        name = '補助';
        break;
      case element.wind:
        name = '疾風';
        break;
      case element.ice:
        name = '氷結';
        break;
      case element.physical:
        name = '物理';
        break;
    }
    return name;
  }

  onClickPersona(persona) {
    this.router.navigateByUrl('/persona-info/' + persona.name);
  }

  // なんども呼ばれるから遅いかも
  getSkill(persona) {
    return persona.skill.find(perSkill => {
      return perSkill.skill.name === this.skill.name;
    });
  }
}
