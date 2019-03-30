import { Component } from '@angular/core';
import { GunSkill } from '../../data/skill/gun-skill';
import { PhysicalSkill } from '../../data/skill/physical-skill';
import { FireSkill } from '../../data/skill/fire-skill';
import { IceSkill } from '../../data/skill/ice-skill';
import { WindSkill } from '../../data/skill/wind-skill';
import { ElectricSkill } from '../../data/skill/electric-skill';
import { NuclearSkill } from '../../data/skill/nuclear-skill';
import { PsySkill } from '../../data/skill/psy-skill';
import { BlessSkill } from '../../data/skill/bless-skill';
import { CurseSkill } from '../../data/skill/curse-skill';
import { AbStateSkill } from '../../data/skill/ab-state-skill';
import { AutoSkill } from '../../data/skill/auto-skill';
import { AlmightSkill } from '../../data/skill/almight-skill';
import { SupportSkill } from '../../data/skill/support-skill';
import { RecoverySkill } from '../../data/skill/recovery-skill';
import { element } from '../../data/persona_enum';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  gun = new GunSkill().skillGunList;
  physical = new PhysicalSkill().skillPhysicalList;
  fire = new FireSkill().fireSkillList;
  ice = new IceSkill().iceSkillList;
  wind = new WindSkill().windSkillList;
  electric = new ElectricSkill().electricSkillList;
  nuclear = new NuclearSkill().nuclearSkillList;
  psy = new PsySkill().psySkillList;
  bless = new BlessSkill().blessSkillList;
  curse = new CurseSkill().curseSkillList;
  abState = new AbStateSkill().abStateSkillList;
  auto = new AutoSkill().autoSkillList;
  almight = new AlmightSkill().almightSkillList;
  support = new SupportSkill().supportSkillList;
  recovery = new RecoverySkill().recoverySkillList;


  skillType = [
    {
      type: element.physical,
      name: '物理',
      list: this.physical,
      open: false
    },
    {
      type: 'gun',
      name: '銃',
      list: this.gun,
      open: false
    },
    {
      type: element.fire,
      name: '火炎',
      list: this.fire,
      open: false
    },
    {
      type: element.ice,
      name: '氷結',
      list: this.ice,
      open: false
    },
    {
      type: element.electric,
      name: '電撃',
      list: this.electric,
      open: false
    },
    {
      type: element.wind,
      name: '疾風',
      list: this.wind,
      open: false
    },
    {
      type: element.psy,
      name: '念動',
      list: this.psy,
      open: false
    },
    {
      type: element.nuclear,
      name: '核熱',
      list: this.nuclear,
      open: false
    },
    {
      type: element.bless,
      name: '祝福',
      list: this.bless,
      open: false
    },
    {
      type: element.curse,
      name: '呪怨',
      list: this.curse,
      open: false
    },
    {
      type: element.almight,
      name: '万能',
      list: this.almight,
      open: false
    },
    {
      type: element.recovery,
      name: '回復',
      list: this.recovery,
      open: false
    },
    {
      type: element.support,
      name: '補助',
      list: this.support,
      open: false
    },
    {
      type: element.ab_state,
      name: '状態異常',
      list: this.abState,
      open: false
    },
    {
      type: element.auto,
      name: 'オート',
      list: this.auto,
      open: false
    }

  ];

  constructor(private router: Router) {

  }

  toggleSection(i) {
    this.skillType[i].open = !this.skillType[i].open;
  }
  clickSkill(skill) {
    console.log(skill.name);
    this.router.navigateByUrl('/skill/' + skill.name);

  }
}
