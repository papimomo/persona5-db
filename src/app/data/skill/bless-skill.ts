import { Skill, element } from '../persona_enum';

enum blessSkill{
    kouha = 'コウハ',
    kouga = 'コウガ',
    kougaon = 'コウガオン',
    mahakouha = 'マハコウハ',
    mahakouga = 'マハコウガ',
    mahakougaon = 'マハコウガオン',
    // kiya = '輝矢',
    kaminoshinpan = '神の審判',
    hama = 'ハマ',
    hamaon = 'ハマオン',
    mahanma = 'マハンマ',
    mahanmaon = 'マハンマオン',
    kaiten_seppou = '回天説法',
}

export class BlessSkill {
    kouha = {
        element: element.bless,
        name: blessSkill.kouha,
        hp: undefined,
        cp: 4,
        info: '敵１体に祝福属性で小ダメージを与える',
        relative: undefined,
    };
    kouga = {
        element: element.bless,
        name: blessSkill.kouga,
        hp: undefined,
        cp: 8,
        info: '敵１体に祝福属性で中ダメージを与える',
        relative: undefined,
    };
    kougaon = {
        element: element.bless,
        name: blessSkill.kougaon,
        hp: undefined,
        cp: 12,
        info: '敵１体に祝福属性で大ダメージを与える',
        relative: undefined,
    };
    mahakouha = {
        element: element.bless,
        name: blessSkill.mahakouha,
        hp: undefined,
        cp: 10,
        info: '敵全体に祝福属性で小ダメージを与える',
        relative: undefined,
    };
    mahakouga = {
        element: element.bless,
        name: blessSkill.mahakouga,
        hp: undefined,
        cp: 16,
        info: '敵全体に祝福属性で中ダメージを与える',
        relative: undefined,
    };
    mahakougaon = {
        element: element.bless,
        name: blessSkill.mahakougaon,
        hp: undefined,
        cp: 22,
        info: '敵全体に祝福属性で大ダメージを与える',
        relative: undefined,
    };
    // kiya = '輝矢',
    kaminoshinpan = {
        element: element.bless,
        name: blessSkill.kaminoshinpan,
        hp: undefined,
        cp: 48,
        info: '敵１体を祝福属性で攻撃し、HPを１／２にする',
        relative: undefined,
    };
    hama = {
        element: element.bless,
        name: blessSkill.hama,
        hp: undefined,
        cp: 8,
        info: '敵１体に祝福属性の即死効果を低確率で与える',
        relative: undefined,
    };
    hamaon = {
        element: element.bless,
        name: blessSkill.hamaon,
        hp: undefined,
        cp: 12,
        info: '敵１体に祝福属性の即死効果を中確率で与える',
        relative: undefined,
    };
    mahanma = {
        element: element.bless,
        name: blessSkill.mahanma,
        hp: undefined,
        cp: 18,
        info: '敵全体に祝福属性の即死効果を低確率で与える',
        relative: undefined,
    };
    mahanmaon = {
        element: element.bless,
        name: blessSkill.mahanmaon,
        hp: undefined,
        cp: 34,
        info: '敵全体に祝福属性の即死効果を中確率で与える',
        relative: undefined,
    };
    kaiten_seppou = {
        element: element.bless,
        name: blessSkill.kaiten_seppou,
        hp: undefined,
        cp: 44,
        info: '敵全体に祝福属性の即死効果を高確率で与える',
        relative: undefined,
    };

    blessSkillList = [
        this.kouha ,
        this.kouga ,
        this.kougaon ,
        this.mahakouha ,
        this.mahakouga ,
        this.mahakougaon ,
        this.kaminoshinpan,
        this.hama ,
        this.hamaon ,
        this.mahanma ,
        this.mahanmaon ,
        this.kaiten_seppou ,

    ]
}
