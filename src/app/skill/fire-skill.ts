import { Skill, element } from '../persona_enum';

enum fireSkill {
    agi = 'アギ',
    agirao = 'アギラオ',
    agidain = 'アギダイン',
    maharagi = 'マハラギ',
    maharagion = 'マハラギオン',
    maharagidain = 'マハラギダイン',
    inferno = 'インフェルノ',
    daienjo = '大炎上',
    // titanomakia = 'ティタノマキア'
}

export class FireSkill {

    agi = {
        element: element.fire,
        name: fireSkill.agi,
        hp: undefined,
        cp: 4,
        info: '敵１体に火炎属性で小ダメージを与える。まれに敵を炎上させる',
        relative: undefined,
    };
    agirao = {
        element: element.fire,
        name: fireSkill.agirao,
        hp: undefined,
        cp: 8,
        info: '敵１体に火炎属性で中ダメージを与える。まれに敵を炎上させる',
        relative: undefined,
    };
    agidain = {
        element: element.fire,
        name: fireSkill.agidain,
        hp: undefined,
        cp: 12,
        info: '敵１体に火炎属性で大ダメージを与える。まれに敵を炎上させる',
        relative: undefined,
    };
    maharagi = {
        element: element.fire,
        name: fireSkill.maharagi,
        hp: undefined,
        cp: 10,
        info: '敵全体に火炎属性で小ダメージを与える。まれに敵を炎上させる',
        relative: undefined,
    };
    maharagion = {
        element: element.fire,
        name: fireSkill.maharagion,
        hp: undefined,
        cp: 10,
        info: '敵全体に火炎属性で中ダメージを与える。まれに敵を炎上させる',
        relative: undefined,
    };
    maharagidain = {
        element: element.fire,
        name: fireSkill.maharagidain,
        hp: undefined,
        cp: 22,
        info: '敵全体に火炎属性で大ダメージを与える。まれに敵を炎上させる',
        relative: undefined,
    };
    inferno = {
        element: element.fire,
        name: fireSkill.inferno,
        hp: undefined,
        cp: 48,
        info: '敵１体に火炎属性で特大ダメージを与える。まれに敵を炎上させる',
        relative: undefined,
    };
    daienjo = {
        element: element.fire,
        name: fireSkill.daienjo,
        hp: undefined,
        cp: 54,
        info: '敵全体に火炎属性で特大ダメージを与える。まれに敵を炎上させる',
        relative: undefined,
    };

    fireSkillList: Array<Skill> = [
        this.agi,
        this.agirao,
        this.agidain,
        this.maharagi,
        this.maharagion,
        this.maharagidain,
        this.inferno,
        this.daienjo,
    ];
}
