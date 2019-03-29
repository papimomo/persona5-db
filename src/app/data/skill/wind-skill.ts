import { Skill, element } from '../persona_enum';

enum windSkill {
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

    garu = {
        element: element.wind,
        name: windSkill.garu,
        hp: undefined,
        cp: 3,
        info: '敵１体に疾風属性で小ダメージを与える',
        relative: undefined,
    };
    garura = {
        element: element.wind,
        name: windSkill.garura,
        hp: undefined,
        cp: 6,
        info: '敵１体に疾風属性で中ダメージを与える',
        relative: undefined,
    };
    garudain = {
        element: element.wind,
        name: windSkill.garudain,
        hp: undefined,
        cp: 10,
        info: '敵１体に疾風属性で大ダメージを与える',
        relative: undefined,
    };
    mahagaru = {
        element: element.wind,
        name: windSkill.mahagaru,
        hp: undefined,
        cp: 8,
        info: '敵全体に疾風属性で小ダメージを与える',
        relative: undefined,
    };
    mahagarura = {
        element: element.wind,
        name: windSkill.mahagarura,
        hp: undefined,
        cp: 14,
        info: '敵全体に疾風属性で中ダメージを与える',
        relative: undefined,
    };
    mahagarudain = {
        element: element.wind,
        name: windSkill.mahagarudain,
        hp: undefined,
        cp: 20,
        info: '敵全体に疾風属性で大ダメージを与える',
        relative: undefined,
    };
    bannbutu_ryuten = {
        element: element.wind,
        name: windSkill.bannbutu_ryuten,
        hp: undefined,
        cp: 42,
        info: '敵１体に疾風属性で特大ダメージを与える',
        relative: undefined,
    };
    shinkuha = {
        element: element.wind,
        name: windSkill.shinkuha,
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
