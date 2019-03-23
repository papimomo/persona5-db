import { Skill, element } from '../persona_enum';


enum abStateSkill {
    metubushi = '目潰し',
    yamiyonosenkou = '闇夜の閃光',
    makajama = 'マカジャマ',
    makajamaon = 'マカジャマオン',
    dorumina = 'ドルミナー',
    sleep_song = 'スリープソング',
    prinpa = 'プリンパ',
    tentarahu = 'テンタラフー',
    hukitunakotoba = '不吉な言葉',
    narakunohadou = '奈落の波動',
    tyouhatu = '挑発',
    sensenhukoku = '宣戦布告',
    marinkarin = 'マリンカリン',
    brain_jack = 'ブレインジャック',
    devil_touch = 'デビルタッチ',
    devil_smile = 'デビルスマイル',
    moujanonageki = '亡者の嘆き',
    yodonda_toiki = '淀んだ吐息',
    yodonda_kuuki = '淀んだ空気'
}


export class AbStateSkill {

    metubushi = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で目眩状態にする',
        relative: undefined,
    };
    yamiyonosenkou = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で目眩状態にする',
        relative: undefined,
    };
    makajama = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で忘却状態にする',
        relative: undefined,
    };
    makajamaon = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で忘却状態にする',
        relative: undefined,
    };
    dorumina = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で睡眠状態にする',
        relative: undefined,
    };
    sleep_song = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で睡眠状態にする',
        relative: undefined,
    };
    prinpa = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で混乱状態にする',
        relative: undefined,
    };
    tentarahu = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で混乱状態にする',
        relative: undefined,
    };
    hukitunakotoba = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で絶望状態にする',
        relative: undefined,
    };
    narakunohadou = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で絶望状態にする',
        relative: undefined,
    };
    tyouhatu = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で激怒状態にする',
        relative: undefined,
    };
    sensenhukoku = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で激怒状態にする',
        relative: undefined,
    };
    marinkarin = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で洗脳状態にする',
        relative: undefined,
    };
    brain_jack = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で洗脳状態にする',
        relative: undefined,
    };
    devil_touch = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で恐怖状態にする',
        relative: undefined,
    };
    devil_smile = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で恐怖状態にする',
        relative: undefined,
    };
    moujanonageki = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 28,
        info: '恐怖状態の敵に即死効果を与える',
        relative: undefined,
    };
    yodonda_toiki = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 8,
        info: '敵１体を状態異常にかかりやすくさせる',
        relative: undefined,
    };
    yodonda_kuuki = {
        element: element.ab_state,
        name: abStateSkill.metubushi,
        hp: undefined,
        cp: 5,
        info: '敵味方全体を状態異常にかかりやすくさせる',
        relative: undefined,
    };

    abStateSkillList: Array<Skill> = [
        this.metubushi,
        this.yamiyonosenkou,
        this.makajama,
        this.makajamaon,
        this.dorumina,
        this.sleep_song,
        this.prinpa,
        this.tentarahu,
        this.hukitunakotoba,
        this.narakunohadou,
        this.tyouhatu,
        this.sensenhukoku,
        this.marinkarin,
        this.brain_jack,
        this.devil_touch,
        this.devil_smile,
        this.moujanonageki,
        this.yodonda_toiki,
        this.yodonda_kuuki

    ];

}
