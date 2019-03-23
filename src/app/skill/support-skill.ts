import { Skill, element } from '../persona_enum';

enum supportSkill {
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
    maharakarn = 'マハラカーン',
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
    tarukaja = {
        element: element.support,
        name: supportSkill.tarukaja,
        hp: undefined,
        cp: 8,
        info: '３ターンの間、味方１体の攻撃力が上昇する',
        relative: undefined,
    };
    rakukaja = {
        element: element.support,
        name: supportSkill.rakukaja,
        hp: undefined,
        cp: 8,
        info: '３ターンの間、味方１体の防御力が上昇する',
        relative: undefined,
    };
    sukukaja = {
        element: element.support,
        name: supportSkill.sukukaja,
        hp: undefined,
        cp: 8,
        info: '３ターンの間、味方１体の命中・回避率が上昇する',
        relative: undefined,
    };
    mahatarukaja = {
        element: element.support,
        name: supportSkill.mahatarukaja,
        hp: undefined,
        cp: 24,
        info: '３ターンの間、味方全体の攻撃力が上昇する',
        relative: undefined,
    };
    maharakukaja = {
        element: element.support,
        name: supportSkill.maharakukaja,
        hp: undefined,
        cp: 24,
        info: '３ターンの間、味方全体の防御力が上昇する',
        relative: undefined,
    };
    mahasukukaja = {
        element: element.support,
        name: supportSkill.mahasukukaja,
        hp: undefined,
        cp: 24,
        info: '３ターンの間、味方全体の命中・回避率が上昇する',
        relative: undefined,
    };
    heatraiza = {
        element: element.support,
        name: supportSkill.heatraiza,
        hp: undefined,
        cp: 30,
        info: '味方１体の攻撃・防御力と命中・回避率が上昇する',
        relative: undefined,
    };
    terumopyurai = {
        element: element.support,
        name: supportSkill.terumopyurai,
        hp: undefined,
        cp: 30,
        info: '味方全体の攻撃・防御力と命中・回避率が上昇する。包囲された時のみ有効',
        relative: undefined,
    };
    riberion = {
        element: element.support,
        name: supportSkill.riberion,
        hp: undefined,
        cp: 5,
        info: '３ターンの間、味方１体のクリティカル率が上昇する',
        relative: undefined,
    };
    revolution = {
        element: element.support,
        name: supportSkill.revolution,
        hp: undefined,
        cp: 5,
        info: '３ターンの間、敵味方全体のクリティカル率が上昇する',
        relative: undefined,
    };
    tetrakarn = {
        element: element.support,
        name: supportSkill.tetrakarn,
        hp: undefined,
        cp: 36,
        info: '味方１体に物理攻撃を１回反射するバリアを張る',
        relative: undefined,
    };
    maharakarn = {
        element: element.support,
        name: supportSkill.maharakarn,
        hp: undefined,
        cp: 36,
        info: '味方１体に魔法攻撃を１回反射するバリアを張る',
        relative: undefined,
    };
    tetraja = {
        element: element.support,
        name: supportSkill.tetraja,
        hp: undefined,
        cp: 24,
        info: '味方全体に即死効果を１回防御するバリアを張る',
        relative: undefined,
    };
    dekunda = {
        element: element.support,
        name: supportSkill.dekunda,
        hp: undefined,
        cp: 10,
        info: '味方全体にかかっているステータス低下を打ち消す',
        relative: undefined,
    };
    bouennokabe = {
        element: element.support,
        name: supportSkill.bouennokabe,
        hp: undefined,
        cp: 18,
        info: '３ターンの間、味方１体に火炎耐性をつける',
        relative: undefined,
    };
    bouhyounokabe = {
        element: element.support,
        name: supportSkill.bouhyounokabe,
        hp: undefined,
        cp: 18,
        info: '３ターンの間、味方１体に氷結耐性をつける',
        relative: undefined,
    };
    boudennokabe = {
        element: element.support,
        name: supportSkill.boudennokabe,
        hp: undefined,
        cp: 18,
        info: '３ターンの間、味方１体に電撃耐性をつける',
        relative: undefined,
    };
    bourannokabe = {
        element: element.support,
        name: supportSkill.bourannokabe,
        hp: undefined,
        cp: 18,
        info: '３ターンの間、味方１体に疾風耐性をつける',
        relative: undefined,
    };
    bounennokabe = {
        element: element.support,
        name: supportSkill.bounennokabe,
        hp: undefined,
        cp: 18,
        info: '３ターンの間、味方１体に念動耐性をつける',
        relative: undefined,
    };
    boukakunokabe = {
        element: element.support,
        name: supportSkill.boukakunokabe,
        hp: undefined,
        cp: 18,
        info: '３ターンの間、味方１体に核熱耐性をつける',
        relative: undefined,
    };
    charge = {
        element: element.support,
        name: supportSkill.charge,
        hp: undefined,
        cp: 15,
        info: '使用後の物理攻撃が１度だけ２倍以上になる',
        relative: undefined,
    };
    consentraito = {
        element: element.support,
        name: supportSkill.consentraito,
        hp: undefined,
        cp: 15,
        info: '使用後の魔法攻撃力が１度だけ２倍以上になる',
        relative: undefined,
    };
    tarunda = {
        element: element.support,
        name: supportSkill.tarunda,
        hp: undefined,
        cp: 8,
        info: '３ターンの間、敵１体の攻撃力が低下する',
        relative: undefined,
    };
    rakunda = {
        element: element.support,
        name: supportSkill.rakunda,
        hp: undefined,
        cp: 8,
        info: '３ターンの間、敵１体の防御力が低下する',
        relative: undefined,
    };
    sukunda = {
        element: element.support,
        name: supportSkill.sukunda,
        hp: undefined,
        cp: 8,
        info: '３ターンの間、敵１体の命中・回避率が低下する',
        relative: undefined,
    };
    mahatarunda = {
        element: element.support,
        name: supportSkill.mahatarunda,
        hp: undefined,
        cp: 24,
        info: '３ターンの間、敵全体の攻撃力が低下する',
        relative: undefined,
    };
    maharakunda = {
        element: element.support,
        name: supportSkill.maharakunda,
        hp: undefined,
        cp: 24,
        info: '３ターンの間、敵全体の防御力が低下する',
        relative: undefined,
    };
    mahasukunda = {
        element: element.support,
        name: supportSkill.mahasukunda,
        hp: undefined,
        cp: 24,
        info: '３ターンの間、敵全体の命中・回避率が低下する',
        relative: undefined,
    };
    randamaiza = {
        element: element.support,
        name: supportSkill.randamaiza,
        hp: undefined,
        cp: 30,
        info: '敵１体の攻撃・防御力と命中・回避率が低下する',
        relative: undefined,
    };
    dekaja = {
        element: element.support,
        name: supportSkill.dekaja,
        hp: undefined,
        cp: 10,
        info: '敵全体にかかっているステータス上昇を打ち消す',
        relative: undefined,
    };
    kaen_gardkill = {
        element: element.support,
        name: supportSkill.kaen_gardkill,
        hp: undefined,
        cp: 15,
        info: '敵全体の火炎耐性を打ち消す。防炎の壁は打ち消せない',
        relative: undefined,
    };
    hyouketu_gardkill = {
        element: element.support,
        name: supportSkill.hyouketu_gardkill,
        hp: undefined,
        cp: 15,
        info: '敵全体の氷結耐性を打ち消す。防氷の壁は打ち消せない',
        relative: undefined,
    };
    dengeki_gardkill = {
        element: element.support,
        name: supportSkill.dengeki_gardkill,
        hp: undefined,
        cp: 15,
        info: '敵全体の電撃耐性を打ち消す。防電の壁は打ち消せない',
        relative: undefined,
    };
    shippu_gardkill = {
        element: element.support,
        name: supportSkill.shippu_gardkill,
        hp: undefined,
        cp: 15,
        info: '敵全体の疾風耐性を打ち消す。防嵐の壁は打ち消せない',
        relative: undefined,
    };
    nenndou_gardkill = {
        element: element.support,
        name: supportSkill.nenndou_gardkill,
        hp: undefined,
        cp: 15,
        info: '敵全体の念動耐性を打ち消す。防念の壁は打ち消せない',
        relative: undefined,
    };
    kakunetu_garadkill = {
        element: element.support,
        name: supportSkill.kakunetu_garadkill,
        hp: undefined,
        cp: 15,
        info: '敵全体の核熱耐性を打ち消す。防核の壁は打ち消せない',
        relative: undefined,
    };
    tetra_break = {
        element: element.support,
        name: supportSkill.tetra_break,
        hp: undefined,
        cp: 18,
        info: '敵全体にかかっているテトラカーン効果を打ち消す',
        relative: undefined,
    };
    makara_break = {
        element: element.support,
        name: supportSkill.makara_break,
        hp: undefined,
        cp: 18,
        info: '敵全体にかかっているマカラカーン効果を打ち消す',
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
        this.maharakarn,
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
