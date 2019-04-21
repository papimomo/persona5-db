import { Skill, element } from '../persona_enum';

export enum almightSkillName {
    megido = 'メギド',
    megidora = 'メギドラ',
    megidoraon = 'メギドラオン',
    shikkokunohebi = '漆黒の蛇',
    akenomyoujou = '明けの明星',
    // meihunotobira = '冥府の扉',
    kyuketu = '吸血',
    kyuma = '吸魔',
    yodonda_toiki = '淀んだ吐息',
    yodonda_kuuki = '淀んだ空気',
    moujanonageki = '亡者の嘆き',
}

export class AlmightSkill {


    megido : Skill = {
        element: element.almight,
        name: almightSkillName.megido,
        hp: undefined,
        cp: 15,
        info: '敵全体に万能属性で中ダメージを与える',
        info_short: '中（全）',
        relative: undefined,
    };
    megidora : Skill = {
        element: element.almight,
        name: almightSkillName.megidora,
        hp: undefined,
        cp: 24,
        info: '敵全体に万能属性で大ダメージを与える',
        info_short: '大（全）',
        relative: undefined,
    };
    megidoraon : Skill = {
        element: element.almight,
        name: almightSkillName.megidoraon,
        hp: undefined,
        cp: 38,
        info: '敵全体に万能属性で特大ダメージを与える',
        info_short: '特大（全）',
        relative: undefined,
    };
    shikkokunohebi : Skill = {
        element: element.almight,
        name: almightSkillName.shikkokunohebi,
        hp: undefined,
        cp: 48,
        info: '敵１体に万能属性で特大ダメージを与える',
        info_short: '超特大（単）',
        relative: undefined,
    };
    akenomyoujou : Skill = {
        element: element.almight,
        name: almightSkillName.akenomyoujou,
        hp: undefined,
        cp: 54,
        info: '敵全体に万能属性で特大ダメージを与える',
        info_short: '超特大（全）',
        relative: undefined,
    };
    // meihunotobira : Skill = {
    //     element: element.almight,
    //     name: almightSkill.megido,
    //     hp: undefined,
    //     cp: 15,
    //     info: '敵全体に万能属性で中ダメージを与える',
    //     relative: undefined,
    // };
    kyuketu : Skill = {
        element: element.almight,
        name: almightSkillName.kyuketu,
        hp: undefined,
        cp: 3,
        info: '敵のＨＰを吸い取り、自分のＨＰにする',
        info_short: 'HP吸収',
        relative: undefined,
    };
    kyuma : Skill = {
        element: element.almight,
        name: almightSkillName.kyuma,
        hp: undefined,
        cp: 3,
        info: '敵のSPを吸い取り、自分のSPにする',
        info_short: 'SP吸収',
        relative: undefined,
    };
    yodonda_toiki : Skill = {
        element: element.almight,
        name: almightSkillName.yodonda_toiki,
        hp: undefined,
        cp: 8,
        info: '敵１体を状態異常にかかりやすくさせる',
        info_short: '状態異常付着率UP（単）',
        relative: undefined,
    };
    yodonda_kuuki : Skill = {
        element: element.almight,
        name: almightSkillName.yodonda_kuuki,
        hp: undefined,
        cp: 5,
        info: '敵味方全体を状態異常にかかりやすくさせる',
        info_short: '状態異常付着率UP（敵味方全体）',
        relative: undefined,
    };
    moujanonageki : Skill = {
        element: element.almight,
        name: almightSkillName.moujanonageki,
        hp: undefined,
        cp: 28,
        info: '恐怖状態の敵に即死効果を与える',
        info_short: '恐怖即死（単/確）',
        relative: undefined,
    };
    almightSkillList = [
        this.megido,
        this.megidora,
        this.megidoraon,
        this.shikkokunohebi,
        this.akenomyoujou,
        this.kyuketu,
        this.kyuma,
        this.yodonda_kuuki,
        this.yodonda_toiki,
        this.moujanonageki
    ];

}
