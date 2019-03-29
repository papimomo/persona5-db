import { Skill, element } from '../persona_enum';

enum iceSkill {
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

    bufu = {
        element: element.ice,
        name: iceSkill.bufu,
        hp: undefined,
        cp: 4,
        info: '敵１体に氷結属性で小ダメージを与える。まれに敵を凍結させる',
        relative: undefined,
    };
    bufura = {
        element: element.ice,
        name: iceSkill.bufura,
        hp: undefined,
        cp: 8,
        info: '敵１体に氷結属性で中ダメージを与える。まれに敵を凍結させる',
        relative: undefined,
    };
    bufudain = {
        element: element.ice,
        name: iceSkill.bufudain,
        hp: undefined,
        cp: 12,
        info: '敵１体に氷結属性で大ダメージを与える。まれに敵を凍結させる',
        relative: undefined,
    };
    mahabufu = {
        element: element.ice,
        name: iceSkill.mahabufu,
        hp: undefined,
        cp: 10,
        info: '敵１体に氷結属性で大ダメージを与える。まれに敵を凍結させる',
        relative: undefined,
    };
    mahabufura = {
        element: element.ice,
        name: iceSkill.mahabufura,
        hp: undefined,
        cp: 16,
        info: '敵全体に氷結属性で中ダメージを与える。まれに敵を凍結させる',
        relative: undefined,
    };
    mahabufudain = {
        element: element.ice,
        name: iceSkill.mahabufudain,
        hp: undefined,
        cp: 22,
        info: '敵全体に氷結属性で大ダメージを与える。まれに敵を凍結させる',
        relative: undefined,
    };
    diamonddust = {
        element: element.ice,
        name: iceSkill.diamonddust,
        hp: undefined,
        cp: 48,
        info: '敵１体に氷結属性で特大ダメージを与える。まれに敵を凍結させる',
        relative: undefined,
    };
    daihyougaki = {
        element: element.ice,
        name: iceSkill.daihyougaki,
        hp: undefined,
        cp: 54,
        info: '敵全体に氷結属性で特大ダメージを与える。まれに敵を凍結させる',
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
