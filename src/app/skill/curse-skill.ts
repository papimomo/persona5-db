import { Skill, element } from '../persona_enum';

enum curseSkill {
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

    eiha = {
        element: element.curse,
        name: curseSkill.eiha,
        hp: undefined,
        cp: 4,
        info: '敵１体に呪怨属性で小ダメージを与える',
        relative: undefined,
    };
    eiga = {
        element: element.curse,
        name: curseSkill.eiga,
        hp: undefined,
        cp: 8,
        info: '敵１体に呪怨属性で中ダメージを与える',
        relative: undefined,
    };
    eigaon = {
        element: element.curse,
        name: curseSkill.eigaon,
        hp: undefined,
        cp: 12,
        info: '敵１体に呪怨属性で大ダメージを与える',
        relative: undefined,
    };
    mahaeiha = {
        element: element.curse,
        name: curseSkill.mahaeiha,
        hp: undefined,
        cp: 10,
        info: '敵全体に呪怨属性で小ダメージを与える',
        relative: undefined,
    };
    mahaeiga = {
        element: element.curse,
        name: curseSkill.mahaeiga,
        hp: undefined,
        cp: 16,
        info: '敵全体に呪怨属性で中ダメージを与える',
        relative: undefined,
    };
    mahaeigaon = {
        element: element.curse,
        name: curseSkill.mahaeigaon,
        hp: undefined,
        cp: 22,
        info: '敵全体に呪怨属性で大ダメージを与える',
        relative: undefined,
    };
    // rengokunotubasa = '煉獄の翼',
    // magatumandara = 'マガツマンダラ',
    akumanoshinpan = {
        element: element.curse,
        name: curseSkill.akumanoshinpan,
        hp: undefined,
        cp: 54,
        info: '敵１体を呪怨属性で攻撃し、HPを１／２にする',
        relative: undefined,
    };
    mudo = {
        element: element.curse,
        name: curseSkill.mudo,
        hp: undefined,
        cp: 8,
        info: '敵１体に呪怨属性の即死効果を低確率で与える',
        relative: undefined,
    };
    mudoon = {
        element: element.curse,
        name: curseSkill.mudoon,
        hp: undefined,
        cp: 15,
        info: '敵１体に呪怨属性の即死効果を中確率で与える',
        relative: undefined,
    };
    mahamudo = {
        element: element.curse,
        name: curseSkill.mahamudo,
        hp: undefined,
        cp: 18,
        info: '敵１体に呪怨属性の即死効果を中確率で与える',
        relative: undefined,
    };
    mahamudoon = {
        element: element.curse,
        name: curseSkill.mahamudoon,
        hp: undefined,
        cp: 34,
        info: '敵全体に呪怨属性の即死効果を中確率で与える',
        relative: undefined,
    };
    shindekureru = {
        element: element.curse,
        name: curseSkill.shindekureru,
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
