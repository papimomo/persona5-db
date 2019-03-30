import { Skill, element } from '../persona_enum';

export enum windSkillName {
    garu = 'ガル',
    garura = 'ガルーラ',
    garudain = 'ガルダイン',
    mahagaru = 'マハガル',
    mahagarura = 'マハガルーラ',
    mahagarudain = 'マハガルダイン',
    bannbutu_ryuten = '万物流転',
    shinkuha = '真空波'
}

export class WindSkill {

    garu : Skill = {
        element: element.wind,
        name: windSkillName.garu,
        hp: undefined,
        cp: 3,
        info: '敵１体に疾風属性で小ダメージを与える',
        relative: undefined,
    };
    garura : Skill = {
        element: element.wind,
        name: windSkillName.garura,
        hp: undefined,
        cp: 6,
        info: '敵１体に疾風属性で中ダメージを与える',
        relative: undefined,
    };
    garudain : Skill = {
        element: element.wind,
        name: windSkillName.garudain,
        hp: undefined,
        cp: 10,
        info: '敵１体に疾風属性で大ダメージを与える',
        relative: undefined,
    };
    mahagaru : Skill = {
        element: element.wind,
        name: windSkillName.mahagaru,
        hp: undefined,
        cp: 8,
        info: '敵全体に疾風属性で小ダメージを与える',
        relative: undefined,
    };
    mahagarura : Skill = {
        element: element.wind,
        name: windSkillName.mahagarura,
        hp: undefined,
        cp: 14,
        info: '敵全体に疾風属性で中ダメージを与える',
        relative: undefined,
    };
    mahagarudain : Skill = {
        element: element.wind,
        name: windSkillName.mahagarudain,
        hp: undefined,
        cp: 20,
        info: '敵全体に疾風属性で大ダメージを与える',
        relative: undefined,
    };
    bannbutu_ryuten : Skill = {
        element: element.wind,
        name: windSkillName.bannbutu_ryuten,
        hp: undefined,
        cp: 42,
        info: '敵１体に疾風属性で特大ダメージを与える',
        relative: undefined,
    };
    shinkuha : Skill = {
        element: element.wind,
        name: windSkillName.shinkuha,
        hp: undefined,
        cp: 48,
        info: '敵全体に疾風属性で特大ダメージを与える',
        relative: undefined,
    };

    windSkillList: Array<Skill> = [
        this.garu,
        this.garura,
        this.garudain,
        this.mahagaru,
        this.mahagarura,
        this.mahagarudain,
        this.bannbutu_ryuten,
        this.shinkuha
    ];
}
