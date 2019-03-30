import { Skill, element } from '../persona_enum';


export enum recoverySkillName {
    dia = 'ディア',
    media = 'メディア',
    diarama = 'ディアラマ',
    medirama = 'メディラマ',
    diarahan = 'ディアラハン',
    mediarahan = 'メディアラハン',
    meshiaraizer = 'メシアライザー',
    rikamu = 'リカーム',
    samrikamu = 'サムリカーム',
    patra = 'パトラ',
    mepatra = 'メパトラ',
    enazy_drop = 'エナジードロップ',
    enazy_syawa = 'エナジーシャワー',
    bisedy = 'バイスディ',
    mahabisedy = 'マハバイスディ',
    amurita_drop = 'アムリタドロップ',
    amurita_syawa = 'アムリタシャワー',
}

export class RecoverySkill {
    dia : Skill = {
        element: element.recovery,
        name: recoverySkillName.dia,
        hp: undefined,
        cp: 3,
        info: '味方１体のHPを小回復する',
        relative: undefined,
    };
    diarama : Skill = {
        element: element.recovery,
        name: recoverySkillName.diarama,
        hp: undefined,
        cp: 6,
        info: '味方１体のＨＰを中回復する',
        relative: undefined,
    };
    diarahan : Skill = {
        element: element.recovery,
        name: recoverySkillName.diarahan,
        hp: undefined,
        cp: 18,
        info: '味方１体のHPを全回復する',
        relative: undefined,
    };
    media : Skill = {
        element: element.recovery,
        name: recoverySkillName.media,
        hp: undefined,
        cp: 7,
        info: '味方全体のＨＰを小回復する',
        relative: undefined,
    };
    medirama : Skill = {
        element: element.recovery,
        name: recoverySkillName.medirama,
        hp: undefined,
        cp: 12,
        info: '味方全体のHPを中回復する',
        relative: undefined,
    };
    mediarahan : Skill = {
        element: element.recovery,
        name: recoverySkillName.mediarahan,
        hp: undefined,
        cp: 30,
        info: '味方全体のHPを全回復する',
        relative: undefined,
    };
    meshiaraizer : Skill = {
        element: element.recovery,
        name: recoverySkillName.meshiaraizer,
        hp: undefined,
        cp: 48,
        info: '味方全体のHPを全回復し、特殊なもの以外の状態異常も治療する',
        relative: undefined,
    };
    rikamu : Skill = {
        element: element.recovery,
        name: recoverySkillName.rikamu,
        hp: undefined,
        cp: 8,
        info: '味方１体の戦闘不能状態をHP５０％で回復する',
        relative: undefined,
    };
    samrikamu : Skill = {
        element: element.recovery,
        name: recoverySkillName.samrikamu,
        hp: undefined,
        cp: 18,
        info: '味方１体の戦闘不能状態をHP最大で回復する',
        relative: undefined,
    };
    patra : Skill = {
        element: element.recovery,
        name: recoverySkillName.patra,
        hp: undefined,
        cp: 4,
        info: '味方１体の目眩・忘却・睡眠・空腹状態を治療する',
        relative: undefined,
    };
    mepatra : Skill = {
        element: element.recovery,
        name: recoverySkillName.mepatra,
        hp: undefined,
        cp: 8,
        info: '味方全体の目眩・忘却・睡眠・空腹状態を治療する',
        relative: undefined,
    };
    enazy_drop : Skill = {
        element: element.recovery,
        name: recoverySkillName.enazy_drop,
        hp: undefined,
        cp: 4,
        info: '味方１体の混乱・恐怖・絶望・激怒・洗脳状態を治療する',
        relative: undefined,
    };
    enazy_syawa : Skill = {
        element: element.recovery,
        name: recoverySkillName.enazy_syawa,
        hp: undefined,
        cp: 8,
        info: '味方全体の混乱・恐怖・絶望・激怒・洗脳状態を治療する',
        relative: undefined,
    };
    bisedy : Skill = {
        element: element.recovery,
        name: recoverySkillName.bisedy,
        hp: undefined,
        cp: 4,
        info: '味方１体の炎上・凍結・感電状態を治療する',
        relative: undefined,
    };
    mahabisedy : Skill = {
        element: element.recovery,
        name: recoverySkillName.mahabisedy,
        hp: undefined,
        cp: 8,
        info: '味方全体の炎上・凍結・感電状態を治療する',
        relative: undefined,
    };
    amurita_drop : Skill = {
        element: element.recovery,
        name: recoverySkillName.amurita_drop,
        hp: undefined,
        cp: 6,
        info: '味方１体の特殊なもの以外の状態異常を治療する',
        relative: undefined,
    };
    amurita_syawa : Skill = {
        element: element.recovery,
        name: recoverySkillName.amurita_syawa,
        hp: undefined,
        cp: 12,
        info: '味方全体の特殊なもの以外の状態異常を治療する',
        relative: undefined,
    };

    recoverySkillList: Array<Skill> = [

        this.dia ,
        this.media,
        this.diarama ,
        this.medirama,
        this.diarahan ,
        this.mediarahan ,
        this.meshiaraizer ,
        this.rikamu ,
        this.samrikamu ,
        this.patra ,
        this.mepatra ,
        this.enazy_drop ,
        this.enazy_syawa ,
        this.bisedy ,
        this.mahabisedy ,
        this.amurita_drop ,
        this.amurita_syawa ,
    ]
}
