import { Skill, element } from '../persona_enum';

export enum psySkillName {
    psy = 'サイ',
    psyo = 'サイオ',
    psydain = 'サイダイン',
    mahapsy = 'マハサイ',
    mahapsyo = 'マハサイオ',
    mahapsydain = 'マハサイダイン',
    psychiciness = 'サイコキシネス',
    psychforce = 'サイコフォース'
}


export class PsySkill {
    psy : Skill = {
        element: element.psy,
        name: psySkillName.psy,
        hp: undefined,
        cp: 4,
        info: '敵１体に念動属性で小ダメージを与える。精神状態異常の敵に効果大',
        info_short: '小（単）',
        relative: undefined,
    };
    psyo : Skill = {
        element: element.psy,
        name: psySkillName.psyo,
        hp: undefined,
        cp: 8,
        info: '敵１体に念動属性で中ダメージを与える。精神状態異常の敵に効果大',
        info_short: '中（単）',
        relative: undefined,
    };
    psydain : Skill = {
        element: element.psy,
        name: psySkillName.psydain,
        hp: undefined,
        cp: 12,
        info: '敵１体に念動属性で大ダメージを与える。精神状態異常の敵に効果大',
        info_short: '大（単）',
        relative: undefined,
    };
    mahapsy : Skill = {
        element: element.psy,
        name: psySkillName.mahapsy,
        hp: undefined,
        cp: 10,
        info: '敵全体に念動属性で小ダメージを与える。精神状態異常の敵に効果大',
        info_short: '小（全）',
        relative: undefined,
    };
    mahapsyo : Skill = {
        element: element.psy,
        name: psySkillName.mahapsyo,
        hp: undefined,
        cp: 16,
        info: '敵全体に念動属性で中ダメージを与える。精神状態異常の敵に効果大',
        info_short: '中（全）',
        relative: undefined,
    };
    mahapsydain : Skill = {
        element: element.psy,
        name: psySkillName.mahapsydain,
        hp: undefined,
        cp: 22,
        info: '敵全体に念動属性で大ダメージを与える。精神状態異常の敵に効果大',
        info_short: '大（全）',
        relative: undefined,
    };
    psychiciness : Skill = {
        element: element.psy,
        name: psySkillName.psychiciness,
        hp: undefined,
        cp: 48,
        info: '敵１体に念動属性で特大ダメージを与える。精神状態異常の敵に効果大',
        info_short: '特大（単）',
        relative: undefined,
    };
    psychforce : Skill = {
        element: element.psy,
        name: psySkillName.psychforce,
        hp: undefined,
        cp: 54,
        info: '敵全体に念動属性で特大ダメージを与える。精神状態異常の敵に効果大',
        info_short: '特大（全）',
        relative: undefined,
    };

    psySkillList = [
        this.psy,
        this.psyo,
        this.psydain,
        this.mahapsy,
        this.mahapsyo,
        this.mahapsydain,
        this.psychiciness,
        this.psychforce

    ]
}
