import { Skill, element } from '../persona_enum';

enum almightSkill {
    megido = 'メギド',
    megidora = 'メギドラ',
    megidoraon = 'メギドラオン',
    shikkokunohebi = '漆黒の蛇',
    akenomyoujou = '明けの明星',
    // meihunotobira = '冥府の扉',
    kyuketu = '吸血',
    kyuma = '吸魔'
}

export class AlmightSkill {


    megido = {
        element: element.almight,
        name: almightSkill.megido,
        hp: undefined,
        cp: 15,
        info: '敵全体に万能属性で中ダメージを与える',
        relative: undefined,
    };
    megidora = {
        element: element.almight,
        name: almightSkill.megidora,
        hp: undefined,
        cp: 24,
        info: '敵全体に万能属性で大ダメージを与える',
        relative: undefined,
    };
    megidoraon = {
        element: element.almight,
        name: almightSkill.megidoraon,
        hp: undefined,
        cp: 38,
        info: '敵全体に万能属性で特大ダメージを与える',
        relative: undefined,
    };
    shikkokunohebi = {
        element: element.almight,
        name: almightSkill.shikkokunohebi,
        hp: undefined,
        cp: 48,
        info: '敵１体に万能属性で特大ダメージを与える',
        relative: undefined,
    };
    akenomyoujou = {
        element: element.almight,
        name: almightSkill.akenomyoujou,
        hp: undefined,
        cp: 54,
        info: '敵全体に万能属性で特大ダメージを与える',
        relative: undefined,
    };
    // meihunotobira = {
    //     element: element.almight,
    //     name: almightSkill.megido,
    //     hp: undefined,
    //     cp: 15,
    //     info: '敵全体に万能属性で中ダメージを与える',
    //     relative: undefined,
    // };
    kyuketu = {
        element: element.almight,
        name: almightSkill.kyuketu,
        hp: undefined,
        cp: 3,
        info: '敵のＨＰを吸い取り、自分のＨＰにする',
        relative: undefined,
    };
    kyuma = {
        element: element.almight,
        name: almightSkill.kyuma,
        hp: undefined,
        cp: 3,
        info: '敵のSPを吸い取り、自分のSPにする',
        relative: undefined,
    };
    almightSkillList = [
        this.megido,
        this.megidora,
        this.megidoraon,
        this.shikkokunohebi,
        this.akenomyoujou,
        this.kyuketu,
        this.kyuma
    ];
}
