import { Skill, element } from '../persona_enum';

export enum blessSkillName{
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
    kouha : Skill = {
        element: element.bless,
        name: blessSkillName.kouha,
        hp: undefined,
        cp: 4,
        info: '敵１体に祝福属性で小ダメージを与える',
        info_short: '小（単）',
        relative: undefined,
    };
    kouga : Skill = {
        element: element.bless,
        name: blessSkillName.kouga,
        hp: undefined,
        cp: 8,
        info: '敵１体に祝福属性で中ダメージを与える',
        info_short: '中（単）',
        relative: undefined,
    };
    kougaon : Skill = {
        element: element.bless,
        name: blessSkillName.kougaon,
        hp: undefined,
        cp: 12,
        info: '敵１体に祝福属性で大ダメージを与える',
        info_short: '大（単）',
        relative: undefined,
    };
    mahakouha : Skill = {
        element: element.bless,
        name: blessSkillName.mahakouha,
        hp: undefined,
        cp: 10,
        info: '敵全体に祝福属性で小ダメージを与える',
        info_short: '小（全）',
        relative: undefined,
    };
    mahakouga : Skill = {
        element: element.bless,
        name: blessSkillName.mahakouga,
        hp: undefined,
        cp: 16,
        info: '敵全体に祝福属性で中ダメージを与える',
        info_short: '中（全）',
        relative: undefined,
    };
    mahakougaon : Skill = {
        element: element.bless,
        name: blessSkillName.mahakougaon,
        hp: undefined,
        cp: 22,
        info: '敵全体に祝福属性で大ダメージを与える',
        info_short: '大（全）',
        relative: undefined,
    };
    // kiya : Skill = '輝矢',
    kaminoshinpan : Skill = {
        element: element.bless,
        name: blessSkillName.kaminoshinpan,
        hp: undefined,
        cp: 48,
        info: '敵１体を祝福属性で攻撃し、HPを１／２にする',
        info_short: 'HP1/2（単）',
        relative: undefined,
    };
    hama : Skill = {
        element: element.bless,
        name: blessSkillName.hama,
        hp: undefined,
        cp: 8,
        info: '敵１体に祝福属性の即死効果を低確率で与える',
        info_short: '低即死（単）',
        relative: undefined,
    };
    hamaon : Skill = {
        element: element.bless,
        name: blessSkillName.hamaon,
        hp: undefined,
        cp: 12,
        info: '敵１体に祝福属性の即死効果を中確率で与える',
        info_short: '中即死（単）',
        relative: undefined,
    };
    mahanma : Skill = {
        element: element.bless,
        name: blessSkillName.mahanma,
        hp: undefined,
        cp: 18,
        info: '敵全体に祝福属性の即死効果を低確率で与える',
        info_short: '低即死（全）',
        relative: undefined,
    };
    mahanmaon : Skill = {
        element: element.bless,
        name: blessSkillName.mahanmaon,
        hp: undefined,
        cp: 34,
        info: '敵全体に祝福属性の即死効果を中確率で与える',
        info_short: '中即死（全）',
        relative: undefined,
    };
    kaiten_seppou : Skill = {
        element: element.bless,
        name: blessSkillName.kaiten_seppou,
        hp: undefined,
        cp: 44,
        info: '敵全体に祝福属性の即死効果を高確率で与える',
        info_short: '高即死（全）',
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
