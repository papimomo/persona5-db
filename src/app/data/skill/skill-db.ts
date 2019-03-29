import { Skill, element } from '../persona_enum';
import { GunSkill } from './gun-skill';
import { PhysicalSkill } from './physical-skill';
import { FireSkill } from './fire-skill';
import { IceSkill } from './ice-skill';
import { WindSkill } from './wind-skill';
import { ElectricSkill } from './electric-skill';
import { NuclearSkill } from './nuclear-skill';
import { PsySkill } from './psy-skill';
import { BlessSkill } from './bless-skill';
import { CurseSkill } from './curse-skill';
import { AbStateSkill } from './ab-state-skill';
import { AutoSkill } from './auto-skill';
import { AlmightSkill } from './almight-skill';
import { SupportSkill } from './support-skill';
import { RecoverySkill } from './recovery-skill';


export class SkillDb {

    getSkillList() {

        const skillList = new PhysicalSkill().skillPhysicalList;
        Array.prototype.push.apply(skillList, new GunSkill().skillGunList);
        Array.prototype.push.apply(skillList, new FireSkill().fireSkillList);
        Array.prototype.push.apply(skillList, new IceSkill().iceSkillList);
        Array.prototype.push.apply(skillList, new WindSkill().windSkillList);
        Array.prototype.push.apply(skillList, new ElectricSkill().electricSkillList);
        Array.prototype.push.apply(skillList, new NuclearSkill().nuclearSkillList);
        Array.prototype.push.apply(skillList, new PsySkill().psySkillList);
        Array.prototype.push.apply(skillList, new BlessSkill().blessSkillList);
        Array.prototype.push.apply(skillList, new CurseSkill().curseSkillList);
        Array.prototype.push.apply(skillList, new AbStateSkill().abStateSkillList);
        Array.prototype.push.apply(skillList, new AutoSkill().autoSkillList);
        Array.prototype.push.apply(skillList, new AlmightSkill().almightSkillList);
        Array.prototype.push.apply(skillList, new SupportSkill().supportSkillList);
        Array.prototype.push.apply(skillList, new RecoverySkill().recoverySkillList);
        return skillList;
    }



}
