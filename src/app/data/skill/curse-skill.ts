import { Skill, element } from '../persona_enum';

export enum curseSkillName {
    eiha = 'エイハ',
    eiga = 'エイガ',
    eigaon = 'エイガオン',
    mahaeiha = 'マハエイハ',
    mahaeiga = 'マハエイガ',
    mahaeigaon = 'マハエイガオン',
    // rengokunotubasa = '煉獄の翼',
    // magatumandara = 'マガツマンダラ',
    akumanoshinpan = '悪魔の審判',
    mudo = 'ムド',
    mudoon = 'ムドオン',
    mahamudo = 'マハムド',
    mahamudoon = 'マハムドオン',
    shindekureru = '死んでくれる？'
}

export class CurseSkill {

    eiha: Skill = {
        element: element.curse,
        name: curseSkillName.eiha,
        hp: undefined,
        cp: 4,
        info: '敵１体に呪怨属性で小ダメージを与える',
        relative: undefined,
    };
    eiga: Skill = {
        element: element.curse,
        name: curseSkillName.eiga,
        hp: undefined,
        cp: 8,
        info: '敵１体に呪怨属性で中ダメージを与える',
        relative: undefined,
    };
    eigaon : Skill = {
        element: element.curse,
        name: curseSkillName.eigaon,
        hp: undefined,
        cp: 12,
        info: '敵１体に呪怨属性で大ダメージを与える',
        relative: undefined,
    };
    mahaeiha : Skill = {
        element: element.curse,
        name: curseSkillName.mahaeiha,
        hp: undefined,
        cp: 10,
        info: '敵全体に呪怨属性で小ダメージを与える',
        relative: undefined,
    };
    mahaeiga : Skill = {
        element: element.curse,
        name: curseSkillName.mahaeiga,
        hp: undefined,
        cp: 16,
        info: '敵全体に呪怨属性で中ダメージを与える',
        relative: undefined,
    };
    mahaeigaon : Skill = {
        element: element.curse,
        name: curseSkillName.mahaeigaon,
        hp: undefined,
        cp: 22,
        info: '敵全体に呪怨属性で大ダメージを与える',
        relative: undefined,
    };
    // rengokunotubasa = '煉獄の翼',
    // magatumandara = 'マガツマンダラ',
    akumanoshinpan : Skill = {
        element: element.curse,
        name: curseSkillName.akumanoshinpan,
        hp: undefined,
        cp: 54,
        info: '敵１体を呪怨属性で攻撃し、HPを１／２にする',
        relative: undefined,
    };
    mudo : Skill = {
        element: element.curse,
        name: curseSkillName.mudo,
        hp: undefined,
        cp: 8,
        info: '敵１体に呪怨属性の即死効果を低確率で与える',
        relative: undefined,
    };
    mudoon : Skill = {
        element: element.curse,
        name: curseSkillName.mudoon,
        hp: undefined,
        cp: 15,
        info: '敵１体に呪怨属性の即死効果を中確率で与える',
        relative: undefined,
    };
    mahamudo : Skill = {
        element: element.curse,
        name: curseSkillName.mahamudo,
        hp: undefined,
        cp: 18,
        info: '敵１体に呪怨属性の即死効果を中確率で与える',
        relative: undefined,
    };
    mahamudoon : Skill = {
        element: element.curse,
        name: curseSkillName.mahamudoon,
        hp: undefined,
        cp: 34,
        info: '敵全体に呪怨属性の即死効果を中確率で与える',
        relative: undefined,
    };
    shindekureru : Skill = {
        element: element.curse,
        name: curseSkillName.shindekureru,
        hp: undefined,
        cp: 44,
        info: '敵全体に呪怨属性の即死効果を高確率で与える',
        relative: undefined,
    };

    curseSkillList: Array<Skill> = [
        this.eiha,
        this.eiga,
        this.eigaon,
        this.mahaeiha,
        this.mahaeiga,
        this.mahaeigaon,
        this.akumanoshinpan,
        this.mudo,
        this.mudoon,
        this.mahamudo,
        this.mahamudoon,
        this.shindekureru

    ];
}
