import { Skill, element } from '../persona_enum';

export enum supportSkillName {
    tarukaja = 'タルカジャ',
    rakukaja = 'ラクカジャ',
    sukukaja = 'スクカジャ',
    mahatarukaja = 'マハタルカジャ',
    maharakukaja = 'マハラクカジャ',
    mahasukukaja = 'マハスクカジャ',
    heatraiza = 'ヒートライザ',
    terumopyurai = 'テルモピュライ',
    riberion = 'リベリオン',
    revolution = 'レボリューション',
    tetrakarn = 'テトラカーン',
    makarakarn = 'マハラカーン',
    tetraja = 'テトラジャ',
    dekunda = 'デクンダ',
    bouennokabe = '防炎の壁',
    bouhyounokabe = '防氷の壁',
    boudennokabe = '防電の壁',
    bourannokabe = '防嵐の壁',
    bounennokabe = '防念の壁',
    boukakunokabe = '防核の壁',
    charge = 'チャージ',
    consentraito = 'コンセントレイト',
    tarunda = 'タルンダ',
    rakunda = 'ラクンダ',
    sukunda = 'スクンダ',
    mahatarunda = 'マハタルンダ',
    maharakunda = 'マハラクンダ',
    mahasukunda = 'マハスクンダ',
    randamaiza = 'ランダマイザ',
    dekaja = 'デカジャ',
    kaen_gardkill = '火炎ガードキル',
    hyouketu_gardkill = '氷結ガードキル',
    dengeki_gardkill = '電撃ガードキル',
    shippu_gardkill = '疾風ガードキル',
    nenndou_gardkill = '念動ガードキル',
    kakunetu_garadkill = '核熱ガードキル',
    tetra_break = 'テトラブレイク',
    makara_break = 'マカラブレイク',
}


export class SupportSkill {
    tarukaja : Skill = {
        element: element.support,
        name: supportSkillName.tarukaja,
        hp: undefined,
        cp: 8,
        info: '３ターンの間、味方１体の攻撃力が上昇する',
        info_short: '攻撃力UP（単）',
        relative: undefined,
    };
    rakukaja : Skill = {
        element: element.support,
        name: supportSkillName.rakukaja,
        hp: undefined,
        cp: 8,
        info: '３ターンの間、味方１体の防御力が上昇する',
        info_short: '防御力UP（単）',
        relative: undefined,
    };
    sukukaja : Skill = {
        element: element.support,
        name: supportSkillName.sukukaja,
        hp: undefined,
        cp: 8,
        info: '３ターンの間、味方１体の命中・回避率が上昇する',
        info_short: '命中・回避率UP（単）',
        relative: undefined,
    };
    mahatarukaja : Skill = {
        element: element.support,
        name: supportSkillName.mahatarukaja,
        hp: undefined,
        cp: 24,
        info: '３ターンの間、味方全体の攻撃力が上昇する',
        info_short: '攻撃力UP（全）',
        relative: undefined,
    };
    maharakukaja : Skill = {
        element: element.support,
        name: supportSkillName.maharakukaja,
        hp: undefined,
        cp: 24,
        info: '３ターンの間、味方全体の防御力が上昇する',
        info_short: '防御力UP（全）',
        relative: undefined,
    };
    mahasukukaja : Skill = {
        element: element.support,
        name: supportSkillName.mahasukukaja,
        hp: undefined,
        cp: 24,
        info: '３ターンの間、味方全体の命中・回避率が上昇する',
        info_short: '命中・回避率UP（全）',
        relative: undefined,
    };
    heatraiza : Skill = {
        element: element.support,
        name: supportSkillName.heatraiza,
        hp: undefined,
        cp: 30,
        info: '味方１体の攻撃・防御力と命中・回避率が上昇する',
        info_short: '攻撃・防御・命中・回避率UP（単）',
        relative: undefined,
    };
    terumopyurai : Skill = {
        element: element.support,
        name: supportSkillName.terumopyurai,
        hp: undefined,
        cp: 30,
        info: '味方全体の攻撃・防御力と命中・回避率が上昇する。包囲された時のみ有効',
        info_short: '包囲時、攻撃・防御・命中・回避率UP（全）',
        relative: undefined,
    };
    riberion : Skill = {
        element: element.support,
        name: supportSkillName.riberion,
        hp: undefined,
        cp: 5,
        info: '３ターンの間、味方１体のクリティカル率が上昇する',
        info_short: 'クリティカルUP（単）',
        relative: undefined,
    };
    revolution : Skill = {
        element: element.support,
        name: supportSkillName.revolution,
        hp: undefined,
        cp: 5,
        info: '３ターンの間、敵味方全体のクリティカル率が上昇する',
        info_short: 'クリティカルUP（敵味方全体）',
        relative: undefined,
    };
    tetrakarn : Skill = {
        element: element.support,
        name: supportSkillName.tetrakarn,
        hp: undefined,
        cp: 36,
        info: '味方１体に物理攻撃を１回反射するバリアを張る',
        info_short: '物理反射（単）',
        relative: undefined,
    };
    makarakarn : Skill = {
        element: element.support,
        name: supportSkillName.makarakarn,
        hp: undefined,
        cp: 36,
        info: '味方１体に魔法攻撃を１回反射するバリアを張る',
        info_short: '魔法反射（単）',
        relative: undefined,
    };
    tetraja : Skill = {
        element: element.support,
        name: supportSkillName.tetraja,
        hp: undefined,
        cp: 24,
        info: '味方全体に即死効果を１回防御するバリアを張る',
        info_short: '即死防御（全）',
        relative: undefined,
    };
    dekunda : Skill = {
        element: element.support,
        name: supportSkillName.dekunda,
        hp: undefined,
        cp: 10,
        info: '味方全体にかかっているステータス低下を打ち消す',
        info_short: 'ステータスDOWN解除（全）',
        relative: undefined,
    };
    bouennokabe : Skill = {
        element: element.support,
        name: supportSkillName.bouennokabe,
        hp: undefined,
        cp: 18,
        info: '３ターンの間、味方１体に火炎耐性をつける',
        info_short: '火炎耐性（単）',
        relative: undefined,
    };
    bouhyounokabe : Skill = {
        element: element.support,
        name: supportSkillName.bouhyounokabe,
        hp: undefined,
        cp: 18,
        info: '３ターンの間、味方１体に氷結耐性をつける',
        info_short: '氷結耐性（単）',
        relative: undefined,
    };
    boudennokabe : Skill = {
        element: element.support,
        name: supportSkillName.boudennokabe,
        hp: undefined,
        cp: 18,
        info: '３ターンの間、味方１体に電撃耐性をつける',
        info_short: '電撃耐性（単）',
        relative: undefined,
    };
    bourannokabe : Skill = {
        element: element.support,
        name: supportSkillName.bourannokabe,
        hp: undefined,
        cp: 18,
        info: '３ターンの間、味方１体に疾風耐性をつける',
        info_short: '疾風耐性（単）',
        relative: undefined,
    };
    bounennokabe : Skill = {
        element: element.support,
        name: supportSkillName.bounennokabe,
        hp: undefined,
        cp: 18,
        info: '３ターンの間、味方１体に念動耐性をつける',
        info_short: '念動耐性（単）',
        relative: undefined,
    };
    boukakunokabe : Skill = {
        element: element.support,
        name: supportSkillName.boukakunokabe,
        hp: undefined,
        cp: 18,
        info: '３ターンの間、味方１体に核熱耐性をつける',
        info_short: '核熱耐性（単）',
        relative: undefined,
    };
    charge : Skill = {
        element: element.support,
        name: supportSkillName.charge,
        hp: undefined,
        cp: 15,
        info: '使用後の物理攻撃が１度だけ２倍以上になる',
        info_short: '次ターン物理2.5倍',
        relative: undefined,
    };
    consentraito : Skill = {
        element: element.support,
        name: supportSkillName.consentraito,
        hp: undefined,
        cp: 15,
        info: '使用後の魔法攻撃力が１度だけ２倍以上になる',
        info_short: '次ターン魔法2.5倍',
        relative: undefined,
    };
    tarunda : Skill = {
        element: element.support,
        name: supportSkillName.tarunda,
        hp: undefined,
        cp: 8,
        info: '３ターンの間、敵１体の攻撃力が低下する',
        info_short: '攻撃力DOWN（単）',
        relative: undefined,
    };
    rakunda : Skill = {
        element: element.support,
        name: supportSkillName.rakunda,
        hp: undefined,
        cp: 8,
        info: '３ターンの間、敵１体の防御力が低下する',
        info_short: '防御力DOWN（単）',
        relative: undefined,
    };
    sukunda : Skill = {
        element: element.support,
        name: supportSkillName.sukunda,
        hp: undefined,
        cp: 8,
        info: '３ターンの間、敵１体の命中・回避率が低下する',
        info_short: '命中・回避率DOWN（単）',
        relative: undefined,
    };
    mahatarunda : Skill = {
        element: element.support,
        name: supportSkillName.mahatarunda,
        hp: undefined,
        cp: 24,
        info: '３ターンの間、敵全体の攻撃力が低下する',
        info_short: '攻撃力DOWN（全）',
        relative: undefined,
    };
    maharakunda : Skill = {
        element: element.support,
        name: supportSkillName.maharakunda,
        hp: undefined,
        cp: 24,
        info: '３ターンの間、敵全体の防御力が低下する',
        info_short: '防御力DOWN（全）',
        relative: undefined,
    };
    mahasukunda : Skill = {
        element: element.support,
        name: supportSkillName.mahasukunda,
        hp: undefined,
        cp: 24,
        info: '３ターンの間、敵全体の命中・回避率が低下する',
        info_short: '命中・回避率DOWN（全）',
        relative: undefined,
    };
    randamaiza : Skill = {
        element: element.support,
        name: supportSkillName.randamaiza,
        hp: undefined,
        cp: 30,
        info: '敵１体の攻撃・防御力と命中・回避率が低下する',
        info_short: '攻撃・防御・命中・回避率DOWN（単）',
        relative: undefined,
    };
    dekaja : Skill = {
        element: element.support,
        name: supportSkillName.dekaja,
        hp: undefined,
        cp: 10,
        info: '敵全体にかかっているステータス上昇を打ち消す',
        info_short: 'ステータスUP解除（全）',
        relative: undefined,
    };
    kaen_gardkill : Skill = {
        element: element.support,
        name: supportSkillName.kaen_gardkill,
        hp: undefined,
        cp: 15,
        info: '敵全体の火炎耐性を打ち消す。防炎の壁は打ち消せない',
        info_short: '火炎耐性を打ち消す（全）',
        relative: undefined,
    };
    hyouketu_gardkill : Skill = {
        element: element.support,
        name: supportSkillName.hyouketu_gardkill,
        hp: undefined,
        cp: 15,
        info: '敵全体の氷結耐性を打ち消す。防氷の壁は打ち消せない',
        info_short: '氷結耐性を打ち消す（全）',
        relative: undefined,
    };
    dengeki_gardkill : Skill = {
        element: element.support,
        name: supportSkillName.dengeki_gardkill,
        hp: undefined,
        cp: 15,
        info: '敵全体の電撃耐性を打ち消す。防電の壁は打ち消せない',
        info_short: '電撃耐性を打ち消す（全）',
        relative: undefined,
    };
    shippu_gardkill : Skill = {
        element: element.support,
        name: supportSkillName.shippu_gardkill,
        hp: undefined,
        cp: 15,
        info: '敵全体の疾風耐性を打ち消す。防嵐の壁は打ち消せない',
        info_short: '疾風耐性を打ち消す（全）',
        relative: undefined,
    };
    nenndou_gardkill : Skill = {
        element: element.support,
        name: supportSkillName.nenndou_gardkill,
        hp: undefined,
        cp: 15,
        info: '敵全体の念動耐性を打ち消す。防念の壁は打ち消せない',
        info_short: '念動耐性を打ち消す（全）',
        relative: undefined,
    };
    kakunetu_garadkill : Skill = {
        element: element.support,
        name: supportSkillName.kakunetu_garadkill,
        hp: undefined,
        cp: 15,
        info: '敵全体の核熱耐性を打ち消す。防核の壁は打ち消せない',
        info_short: '核熱耐性を打ち消す（全）',
        relative: undefined,
    };
    tetra_break : Skill = {
        element: element.support,
        name: supportSkillName.tetra_break,
        hp: undefined,
        cp: 18,
        info: '敵全体にかかっているテトラカーン効果を打ち消す',
        info_short: 'テトラカーンを打ち消す（全）',
        relative: undefined,
    };
    makara_break : Skill = {
        element: element.support,
        name: supportSkillName.makara_break,
        hp: undefined,
        cp: 18,
        info: '敵全体にかかっているマカラカーン効果を打ち消す',
        info_short: 'マカラカーンを打ち消す（全）',
        relative: undefined,
    };

    supportSkillList: Array<Skill> = [
        this.tarukaja,
        this.rakukaja,
        this.sukukaja,
        this.mahatarukaja,
        this.maharakukaja,
        this.mahasukukaja,
        this.heatraiza,
        this.terumopyurai,
        this.riberion,
        this.revolution,
        this.tetrakarn,
        this.makarakarn,
        this.tetraja,
        this.dekunda,
        this.bouennokabe,
        this.bouhyounokabe,
        this.boudennokabe,
        this.bourannokabe,
        this.bounennokabe,
        this.boukakunokabe,
        this.charge,
        this.consentraito,
        this.tarunda,
        this.rakunda,
        this.sukunda,
        this.mahatarunda,
        this.maharakunda,
        this.mahasukunda,
        this.randamaiza,
        this.dekaja,
        this.kaen_gardkill,
        this.hyouketu_gardkill,
        this.dengeki_gardkill,
        this.shippu_gardkill,
        this.nenndou_gardkill,
        this.kakunetu_garadkill,
        this.tetra_break,
        this.makara_break,

    ];

}
