import { Skill, element } from '../persona_enum';

export enum fireSkillName {
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

    agi : Skill = {
        element: element.fire,
        name: fireSkillName.agi,
        hp: undefined,
        cp: 4,
        info: '敵１体に火炎属性で小ダメージを与える。まれに敵を炎上させる',
        relative: undefined,
    };
    agirao : Skill = {
        element: element.fire,
        name: fireSkillName.agirao,
        hp: undefined,
        cp: 8,
        info: '敵１体に火炎属性で中ダメージを与える。まれに敵を炎上させる',
        relative: undefined,
    };
    agidain : Skill = {
        element: element.fire,
        name: fireSkillName.agidain,
        hp: undefined,
        cp: 12,
        info: '敵１体に火炎属性で大ダメージを与える。まれに敵を炎上させる',
        relative: undefined,
    };
    maharagi : Skill = {
        element: element.fire,
        name: fireSkillName.maharagi,
        hp: undefined,
        cp: 10,
        info: '敵全体に火炎属性で小ダメージを与える。まれに敵を炎上させる',
        relative: undefined,
    };
    maharagion : Skill = {
        element: element.fire,
        name: fireSkillName.maharagion,
        hp: undefined,
        cp: 10,
        info: '敵全体に火炎属性で中ダメージを与える。まれに敵を炎上させる',
        relative: undefined,
    };
    maharagidain : Skill = {
        element: element.fire,
        name: fireSkillName.maharagidain,
        hp: undefined,
        cp: 22,
        info: '敵全体に火炎属性で大ダメージを与える。まれに敵を炎上させる',
        relative: undefined,
    };
    inferno : Skill = {
        element: element.fire,
        name: fireSkillName.inferno,
        hp: undefined,
        cp: 48,
        info: '敵１体に火炎属性で特大ダメージを与える。まれに敵を炎上させる',
        relative: undefined,
    };
    daienjo : Skill = {
        element: element.fire,
        name: fireSkillName.daienjo,
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
