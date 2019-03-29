import { Skill, element } from '../persona_enum';

enum nuclearSkill {
    furei = 'フレイ',
    fureira = 'フレイラ',
    fureidain = 'フレイダイン',
    mahafurei = 'マハフレイ',
    mahafureira = 'マハフレイラ',
    mahafureidain = 'マハフレイダイン',
    atmicfrea = 'アトミックフレア',
    cozmicfrea = 'コズミックフレア'
}

export class NuclearSkill {
    furei = {
        element: element.nuclear,
        name: nuclearSkill.furei,
        hp: undefined,
        cp: 4,
        info: '敵１体に核熱属性で小ダメージを与える。炎上凍結感電の敵に効果大',
        relative: undefined,
    };
    fureira = {
        element: element.nuclear,
        name: nuclearSkill.fureira,
        hp: undefined,
        cp: 8,
        info: '敵１体に核熱属性で中ダメージを与える。炎上凍結感電の敵に効果大',
        relative: undefined,
    };
    fureidain = {
        element: element.nuclear,
        name: nuclearSkill.fureidain,
        hp: undefined,
        cp: 12,
        info: '敵１体に核熱属性で大ダメージを与える。炎上凍結感電の敵に効果大',
        relative: undefined,
    };
    mahafurei = {
        element: element.nuclear,
        name: nuclearSkill.mahafurei,
        hp: undefined,
        cp: 10,
        info: '敵全体に核熱属性で小ダメージを与える。炎上凍結感電の敵に効果大',
        relative: undefined,
    };
    mahafureira = {
        element: element.nuclear,
        name: nuclearSkill.mahafureira,
        hp: undefined,
        cp: 16,
        info: '敵全体に核熱属性で中ダメージを与える。炎上凍結感電の敵に効果大',
        relative: undefined,
    };
    mahafureidain = {
        element: element.nuclear,
        name: nuclearSkill.mahafureidain,
        hp: undefined,
        cp: 22,
        info: '敵全体に核熱属性の大ダメージを与える。炎上凍結感電の敵に効果大',
        relative: undefined,
    };
    atmicfrea = {
        element: element.nuclear,
        name: nuclearSkill.atmicfrea,
        hp: undefined,
        cp: 48,
        info: '敵１体に核熱属性で特大ダメージを与える。炎上凍結感電の敵に効果大',
        relative: undefined,
    };
    cozmicfrea = {
        element: element.nuclear,
        name: nuclearSkill.cozmicfrea,
        hp: undefined,
        cp: 54,
        info: '敵全体に核熱属性の特大ダメージを与える。炎上凍結感電の敵に効果大',
        relative: undefined,
    };

    nuclearSkillList = [
        this.furei,
        this.fureira,
        this.fureidain,
        this.mahafurei,
        this.mahafureira,
        this.mahafureidain,
        this.atmicfrea,
        this.cozmicfrea

    ]

}
