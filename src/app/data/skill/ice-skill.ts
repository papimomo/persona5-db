import { Skill, element } from '../persona_enum';

export enum iceSkillName {
    bufu = 'ブフ',
    bufura = 'ブフーラ',
    bufudain = 'ブフダイン',
    mahabufu = 'マハブフ',
    mahabufura = 'マハブルーラ',
    mahabufudain = 'マハブフダイン',
    diamonddust = 'ダイアモンドダスト',
    daihyougaki = '大氷河期'
}

export class IceSkill {

    bufu : Skill = {
        element: element.ice,
        name: iceSkillName.bufu,
        hp: undefined,
        cp: 4,
        info: '敵１体に氷結属性で小ダメージを与える。まれに敵を凍結させる',
        info_short: '小（単）',
        relative: undefined,
    };
    bufura : Skill = {
        element: element.ice,
        name: iceSkillName.bufura,
        hp: undefined,
        cp: 8,
        info: '敵１体に氷結属性で中ダメージを与える。まれに敵を凍結させる',
        info_short: '中（単）',
        relative: undefined,
    };
    bufudain : Skill = {
        element: element.ice,
        name: iceSkillName.bufudain,
        hp: undefined,
        cp: 12,
        info: '敵１体に氷結属性で大ダメージを与える。まれに敵を凍結させる',
        info_short: '大（単）',
        relative: undefined,
    };
    mahabufu : Skill = {
        element: element.ice,
        name: iceSkillName.mahabufu,
        hp: undefined,
        cp: 10,
        info: '敵全体に氷結属性で小ダメージを与える。まれに敵を凍結させる',
        info_short: '小（全）',
        relative: undefined,
    };
    mahabufura : Skill = {
        element: element.ice,
        name: iceSkillName.mahabufura,
        hp: undefined,
        cp: 16,
        info: '敵全体に氷結属性で中ダメージを与える。まれに敵を凍結させる',
        info_short: '中（全）',
        relative: undefined,
    };
    mahabufudain : Skill = {
        element: element.ice,
        name: iceSkillName.mahabufudain,
        hp: undefined,
        cp: 22,
        info: '敵全体に氷結属性で大ダメージを与える。まれに敵を凍結させる',
        info_short: '大（全）',
        relative: undefined,
    };
    diamonddust : Skill = {
        element: element.ice,
        name: iceSkillName.diamonddust,
        hp: undefined,
        cp: 48,
        info: '敵１体に氷結属性で特大ダメージを与える。まれに敵を凍結させる',
        info_short: '特大（単）',
        relative: undefined,
    };
    daihyougaki : Skill = {
        element: element.ice,
        name: iceSkillName.daihyougaki,
        hp: undefined,
        cp: 54,
        info: '敵全体に氷結属性で特大ダメージを与える。まれに敵を凍結させる',
        info_short: '特大（全）',
        relative: undefined,
    };

    iceSkillList: Array<Skill> = [
        this.bufu,
        this.bufura,
        this.bufudain,
        this.mahabufu,
        this.mahabufura,
        this.mahabufudain,
        this.diamonddust,
        this.daihyougaki

    ]
}
