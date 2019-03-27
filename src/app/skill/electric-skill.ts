import { Skill, element } from '../persona_enum';

enum electricSkill {
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


    jio = {
        element: element.electric,
        name: electricSkill.jio,
        hp: undefined,
        cp: 4,
        info: '敵１体に電撃属性で小ダメージを与える。まれに敵を感電させる',
        relative: undefined,
    };
    jionga = {
        element: element.electric,
        name: electricSkill.jionga,
        hp: undefined,
        cp: 8,
        info: '敵１体に電撃属性で中ダメージを与える。まれに敵を感電させる',
        relative: undefined,
    };
    jiodain = {
        element: element.electric,
        name: electricSkill.jiodain,
        hp: undefined,
        cp: 12,
        info: '敵１体に電撃属性で大ダメージを与える。まれに敵を感電させる',
        relative: undefined,
    };
    mahajio = {
        element: element.electric,
        name: electricSkill.mahajio,
        hp: undefined,
        cp: 10,
        info: '敵全体に電撃属性で小ダメージを与える。まれに敵を感電させる',
        relative: undefined,
    };
    mahajionga = {
        element: element.electric,
        name: electricSkill.mahajionga,
        hp: undefined,
        cp: 16,
        info: '敵全体に電撃属性で中ダメージを与える。まれに敵を感電させる',
        relative: undefined,
    };
    mahajiodain = {
        element: element.electric,
        name: electricSkill.mahajiodain,
        hp: undefined,
        cp: 22,
        info: '敵全体に電撃属性で大ダメージを与える。まれに敵を感電させる',
        relative: undefined,
    };
    shinrinokaminari = {
        element: element.electric,
        name: electricSkill.shinrinokaminari,
        hp: undefined,
        cp: 48,
        info: '敵１体に電撃属性で特大ダメージを与える。まれに敵を感電させる',
        relative: undefined,
    };
    el_jihard = {
        element: element.electric,
        name: electricSkill.el_jihard,
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
