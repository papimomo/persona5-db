import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SkillDb } from '../../data/skill/skill-db';
import { PersonaDb } from '../../data/personaDb';
import { SkillInPersona } from '../../data/persona_enum';

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
  personaListHasSkill;

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


}
