import { Skill, element } from '../persona_enum';

enum psySkill {
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
    psy = {
        element: element.psy,
        name: psySkill.psy,
        hp: undefined,
        cp: 4,
        info: '敵１体に念動属性で小ダメージを与える。精神状態異常の敵に効果大',
        relative: undefined,
    };
    psyo = {
        element: element.psy,
        name: psySkill.psyo,
        hp: undefined,
        cp: 8,
        info: '敵１体に念動属性で中ダメージを与える。精神状態異常の敵に効果大',
        relative: undefined,
    };
    psydain = {
        element: element.psy,
        name: psySkill.psydain,
        hp: undefined,
        cp: 12,
        info: '敵１体に念動属性で大ダメージを与える。精神状態異常の敵に効果大',
        relative: undefined,
    };
    mahapsy = {
        element: element.psy,
        name: psySkill.mahapsy,
        hp: undefined,
        cp: 10,
        info: '敵全体に念動属性で小ダメージを与える。精神状態異常の敵に効果大',
        relative: undefined,
    };
    mahapsyo = {
        element: element.psy,
        name: psySkill.mahapsyo,
        hp: undefined,
        cp: 16,
        info: '敵全体に念動属性で中ダメージを与える。精神状態異常の敵に効果大',
        relative: undefined,
    };
    mahapsydain = {
        element: element.psy,
        name: psySkill.mahapsydain,
        hp: undefined,
        cp: 22,
        info: '敵全体に念動属性で大ダメージを与える。精神状態異常の敵に効果大',
        relative: undefined,
    };
    psychiciness = {
        element: element.psy,
        name: psySkill.psychiciness,
        hp: undefined,
        cp: 48,
        info: '敵１体に念動属性で特大ダメージを与える。精神状態異常の敵に効果大',
        relative: undefined,
    };
    psychforce = {
        element: element.psy,
        name: psySkill.psychforce,
        hp: undefined,
        cp: 54,
        info: '敵全体に念動属性で特大ダメージを与える。精神状態異常の敵に効果大',
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
