import { Skill, element } from '../persona_enum';

export enum electricSkillName {
    jio = 'ジオ',
    jionga = 'ジオンガ',
    jiodain = 'ジオダイン',
    mahajio = 'マハジオ',
    mahajionga = 'マハジオンガ',
    mahajiodain = 'マハジオダイン',
    shinrinokaminari = '真理の雷',
    el_jihard = 'エル・ジハード'
}

export class ElectricSkill {


    jio : Skill = {
        element: element.electric,
        name: electricSkillName.jio,
        hp: undefined,
        cp: 4,
        info: '敵１体に電撃属性で小ダメージを与える。まれに敵を感電させる',
        relative: undefined,
    };
    jionga : Skill = {
        element: element.electric,
        name: electricSkillName.jionga,
        hp: undefined,
        cp: 8,
        info: '敵１体に電撃属性で中ダメージを与える。まれに敵を感電させる',
        relative: undefined,
    };
    jiodain : Skill = {
        element: element.electric,
        name: electricSkillName.jiodain,
        hp: undefined,
        cp: 12,
        info: '敵１体に電撃属性で大ダメージを与える。まれに敵を感電させる',
        relative: undefined,
    };
    mahajio : Skill = {
        element: element.electric,
        name: electricSkillName.mahajio,
        hp: undefined,
        cp: 10,
        info: '敵全体に電撃属性で小ダメージを与える。まれに敵を感電させる',
        relative: undefined,
    };
    mahajionga : Skill = {
        element: element.electric,
        name: electricSkillName.mahajionga,
        hp: undefined,
        cp: 16,
        info: '敵全体に電撃属性で中ダメージを与える。まれに敵を感電させる',
        relative: undefined,
    };
    mahajiodain : Skill = {
        element: element.electric,
        name: electricSkillName.mahajiodain,
        hp: undefined,
        cp: 22,
        info: '敵全体に電撃属性で大ダメージを与える。まれに敵を感電させる',
        relative: undefined,
    };
    shinrinokaminari : Skill = {
        element: element.electric,
        name: electricSkillName.shinrinokaminari,
        hp: undefined,
        cp: 48,
        info: '敵１体に電撃属性で特大ダメージを与える。まれに敵を感電させる',
        relative: undefined,
    };
    el_jihard : Skill = {
        element: element.electric,
        name: electricSkillName.el_jihard,
        hp: undefined,
        cp: 54,
        info: '敵全体に電撃属性で特大ダメージを与える。まれに敵を感電させる',
        relative: undefined,
    };

    electricSkillList: Array<Skill> = [
        this.jio,
        this.jionga,
        this.jiodain,
        this.mahajio,
        this.mahajionga,
        this.mahajiodain,
        this.shinrinokaminari,
        this.el_jihard
    ];
}
