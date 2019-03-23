import { Skill, element } from '../persona_enum';

enum gunSkill{
    shidan = '指弾',
    one_shot_kill = 'ワンショットキル',
    triple_down = 'トリプルダウン',
    shikounomadan = '至高の魔弾'
}

export class GunSkill {

    shidan = {
        element: element.gun,
        name: gunSkill.shidan,
        hp: '9%',
        cp: undefined,
        info: '敵１体に銃撃属性で中ダメージを与える',
        relative: undefined,
    };
    one_shot_kill = {
        element: element.gun,
        name: gunSkill.shidan,
        hp: '17%',
        cp: undefined,
        info: '敵１体に銃撃属性でクリティカル率の高い特大ダメージを与える',
        relative: undefined,
    };
    triple_down = {
        element: element.gun,
        name: gunSkill.shidan,
        hp: '16%',
        cp: undefined,
        info: '敵全体に銃撃属性で小ダメージを３回与える',
        relative: undefined,
    };
    shikounomadan = {
        element: element.gun,
        name: gunSkill.shidan,
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
