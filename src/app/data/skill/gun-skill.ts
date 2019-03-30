import { Skill, element } from '../persona_enum';

export enum gunSkillName{
    shidan = '指弾',
    one_shot_kill = 'ワンショットキル',
    triple_down = 'トリプルダウン',
    shikounomadan = '至高の魔弾'
}

export class GunSkill {

    shidan : Skill = {
        element: element.gun,
        name: gunSkillName.shidan,
        hp: '9%',
        cp: undefined,
        info: '敵１体に銃撃属性で中ダメージを与える',
        relative: undefined,
    };
    one_shot_kill : Skill = {
        element: element.gun,
        name: gunSkillName.shidan,
        hp: '17%',
        cp: undefined,
        info: '敵１体に銃撃属性でクリティカル率の高い特大ダメージを与える',
        relative: undefined,
    };
    triple_down : Skill = {
        element: element.gun,
        name: gunSkillName.shidan,
        hp: '16%',
        cp: undefined,
        info: '敵全体に銃撃属性で小ダメージを３回与える',
        relative: undefined,
    };
    shikounomadan : Skill = {
        element: element.gun,
        name: gunSkillName.shidan,
        hp: '24%',
        cp: undefined,
        info: '敵全体に銃撃属性で特大ダメージを与える',
        relative: undefined,
    };

    skillGunList:Array<Skill> = [
        this.shidan,
        this.one_shot_kill,
        this.triple_down,
        this.shikounomadan,
    ]

}
