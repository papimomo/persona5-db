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
        name: abStateSkill.yamiyonosenkou,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で目眩状態にする',
        relative: undefined,
    };
    makajama = {
        element: element.ab_state,
        name: abStateSkill.makajama,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で忘却状態にする',
        relative: undefined,
    };
    makajamaon = {
        element: element.ab_state,
        name: abStateSkill.makajamaon,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で忘却状態にする',
        relative: undefined,
    };
    dorumina = {
        element: element.ab_state,
        name: abStateSkill.dorumina,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で睡眠状態にする',
        relative: undefined,
    };
    sleep_song = {
        element: element.ab_state,
        name: abStateSkill.sleep_song,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で睡眠状態にする',
        relative: undefined,
    };
    prinpa = {
        element: element.ab_state,
        name: abStateSkill.prinpa,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で混乱状態にする',
        relative: undefined,
    };
    tentarahu = {
        element: element.ab_state,
        name: abStateSkill.tentarahu,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で混乱状態にする',
        relative: undefined,
    };
    hukitunakotoba = {
        element: element.ab_state,
        name: abStateSkill.hukitunakotoba,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で絶望状態にする',
        relative: undefined,
    };
    narakunohadou = {
        element: element.ab_state,
        name: abStateSkill.narakunohadou,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で絶望状態にする',
        relative: undefined,
    };
    tyouhatu = {
        element: element.ab_state,
        name: abStateSkill.tyouhatu,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で激怒状態にする',
        relative: undefined,
    };
    sensenhukoku = {
        element: element.ab_state,
        name: abStateSkill.sensenhukoku,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で激怒状態にする',
        relative: undefined,
    };
    marinkarin = {
        element: element.ab_state,
        name: abStateSkill.marinkarin,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で洗脳状態にする',
        relative: undefined,
    };
    brain_jack = {
        element: element.ab_state,
        name: abStateSkill.brain_jack,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で洗脳状態にする',
        relative: undefined,
    };
    devil_touch = {
        element: element.ab_state,
        name: abStateSkill.devil_touch,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で恐怖状態にする',
        relative: undefined,
    };
    devil_smile = {
        element: element.ab_state,
        name: abStateSkill.devil_smile,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で恐怖状態にする',
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

    ];

}
