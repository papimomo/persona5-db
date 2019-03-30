export enum regist {
    normal = '-',
    weak = '弱',
    regist = '耐',
    none = '無',
    drain = '吸',
    reflect = '反',
}
export enum element {
    physical = 'physical',
    gun = 'gun',
    fire = 'fire',
    ice = 'ice',
    electric = 'electric',
    wind = 'wind',
    psy = 'psy',
    nuclear = 'nuclear',
    bless = 'bless',
    curse = 'curse',

    almight = 'almight',
    ab_state = 'ab_state',
    recovery = 'recovery',
    auto = 'auto',
    support = 'support',
}
export interface Skill {
    element: element;
    name: string;
    info: string;
    hp: string;
    cp: number;
    relative: Array<Skill>;
    // card:{
    //     drop:string;
    //     sacrifice:string;
    // }
}
export interface SkillInPersona{
    skill:Skill;
    level:number;
}
