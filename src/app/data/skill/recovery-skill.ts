import { Skill, element } from '../persona_enum';


enum recoverySkill {
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
    dia = {
        element: element.recovery,
        name: recoverySkill.dia,
        hp: undefined,
        cp: 3,
        info: '味方１体のHPを小回復する',
        relative: undefined,
    };
    diarama = {
        element: element.recovery,
        name: recoverySkill.diarama,
        hp: undefined,
        cp: 6,
        info: '味方１体のＨＰを中回復する',
        relative: undefined,
    };
    diarahan = {
        element: element.recovery,
        name: recoverySkill.diarahan,
        hp: undefined,
        cp: 18,
        info: '味方１体のHPを全回復する',
        relative: undefined,
    };
    media = {
        element: element.recovery,
        name: recoverySkill.media,
        hp: undefined,
        cp: 7,
        info: '味方全体のＨＰを小回復する',
        relative: undefined,
    };
    medirama = {
        element: element.recovery,
        name: recoverySkill.medirama,
        hp: undefined,
        cp: 12,
        info: '味方全体のHPを中回復する',
        relative: undefined,
    };
    mediarahan = {
        element: element.recovery,
        name: recoverySkill.mediarahan,
        hp: undefined,
        cp: 30,
        info: '味方全体のHPを全回復する',
        relative: undefined,
    };
    meshiaraizer = {
        element: element.recovery,
        name: recoverySkill.meshiaraizer,
        hp: undefined,
        cp: 48,
        info: '味方全体のHPを全回復し、特殊なもの以外の状態異常も治療する',
        relative: undefined,
    };
    rikamu = {
        element: element.recovery,
        name: recoverySkill.rikamu,
        hp: undefined,
        cp: 8,
        info: '味方１体の戦闘不能状態をHP５０％で回復する',
        relative: undefined,
    };
    samrikamu = {
        element: element.recovery,
        name: recoverySkill.samrikamu,
        hp: undefined,
        cp: 18,
        info: '味方１体の戦闘不能状態をHP最大で回復する',
        relative: undefined,
    };
    patra = {
        element: element.recovery,
        name: recoverySkill.patra,
        hp: undefined,
        cp: 4,
        info: '味方１体の目眩・忘却・睡眠・空腹状態を治療する',
        relative: undefined,
    };
    mepatra = {
        element: element.recovery,
        name: recoverySkill.mepatra,
        hp: undefined,
        cp: 8,
        info: '味方全体の目眩・忘却・睡眠・空腹状態を治療する',
        relative: undefined,
    };
    enazy_drop = {
        element: element.recovery,
        name: recoverySkill.enazy_drop,
        hp: undefined,
        cp: 4,
        info: '味方１体の混乱・恐怖・絶望・激怒・洗脳状態を治療する',
        relative: undefined,
    };
    enazy_syawa = {
        element: element.recovery,
        name: recoverySkill.enazy_syawa,
        hp: undefined,
        cp: 8,
        info: '味方全体の混乱・恐怖・絶望・激怒・洗脳状態を治療する',
        relative: undefined,
    };
    bisedy = {
        element: element.recovery,
        name: recoverySkill.bisedy,
        hp: undefined,
        cp: 4,
        info: '味方１体の炎上・凍結・感電状態を治療する',
        relative: undefined,
    };
    mahabisedy = {
        element: element.recovery,
        name: recoverySkill.mahabisedy,
        hp: undefined,
        cp: 8,
        info: '味方全体の炎上・凍結・感電状態を治療する',
        relative: undefined,
    };
    amurita_drop = {
        element: element.recovery,
        name: recoverySkill.amurita_drop,
        hp: undefined,
        cp: 6,
        info: '味方１体の特殊なもの以外の状態異常を治療する',
        relative: undefined,
    };
    amurita_syawa = {
        element: element.recovery,
        name: recoverySkill.amurita_syawa,
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
