import { Skill, element } from '../persona_enum';


export enum abStateSkillName {
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

    metubushi : Skill = {
        element: element.ab_state,
        name: abStateSkillName.metubushi,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で目眩状態にする',
        info_short: '高目眩（単）',
        relative: undefined,
    };
    yamiyonosenkou : Skill = {
        element: element.ab_state,
        name: abStateSkillName.yamiyonosenkou,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で目眩状態にする',
        info_short: '中目眩（全）',
        relative: undefined,
    };
    makajama : Skill = {
        element: element.ab_state,
        name: abStateSkillName.makajama,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で忘却状態にする',
        info_short: '高忘却（単）',
        relative: undefined,
    };
    makajamaon : Skill = {
        element: element.ab_state,
        name: abStateSkillName.makajamaon,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で忘却状態にする',
        info_short: '中忘却（全）',
        relative: undefined,
    };
    dorumina : Skill = {
        element: element.ab_state,
        name: abStateSkillName.dorumina,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で睡眠状態にする',
        info_short: '高睡眠（単）',
        relative: undefined,
    };
    sleep_song : Skill = {
        element: element.ab_state,
        name: abStateSkillName.sleep_song,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で睡眠状態にする',
        info_short: '中睡眠（全）',
        relative: undefined,
    };
    prinpa : Skill = {
        element: element.ab_state,
        name: abStateSkillName.prinpa,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で混乱状態にする',
        info_short: '高混乱（単）',
        relative: undefined,
    };
    tentarahu : Skill = {
        element: element.ab_state,
        name: abStateSkillName.tentarahu,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で混乱状態にする',
        info_short: '中混乱（全）',
        relative: undefined,
    };
    hukitunakotoba : Skill = {
        element: element.ab_state,
        name: abStateSkillName.hukitunakotoba,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で絶望状態にする',
        info_short: '高絶望（単）',
        relative: undefined,
    };
    narakunohadou : Skill = {
        element: element.ab_state,
        name: abStateSkillName.narakunohadou,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で絶望状態にする',
        info_short: '中絶望（全）',
        relative: undefined,
    };
    tyouhatu : Skill = {
        element: element.ab_state,
        name: abStateSkillName.tyouhatu,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で激怒状態にする',
        info_short: '高激怒（単）',
        relative: undefined,
    };
    sensenhukoku : Skill = {
        element: element.ab_state,
        name: abStateSkillName.sensenhukoku,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で激怒状態にする',
        info_short: '中激怒（全）',
        relative: undefined,
    };
    marinkarin : Skill = {
        element: element.ab_state,
        name: abStateSkillName.marinkarin,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で洗脳状態にする',
        info_short: '高洗脳（単）',
        relative: undefined,
    };
    brain_jack : Skill = {
        element: element.ab_state,
        name: abStateSkillName.brain_jack,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で洗脳状態にする',
        info_short: '中洗脳（全）',
        relative: undefined,
    };
    devil_touch : Skill = {
        element: element.ab_state,
        name: abStateSkillName.devil_touch,
        hp: undefined,
        cp: 5,
        info: '敵１体を高確率で恐怖状態にする',
        info_short: '高恐怖（単）',
        relative: undefined,
    };
    devil_smile : Skill = {
        element: element.ab_state,
        name: abStateSkillName.devil_smile,
        hp: undefined,
        cp: 12,
        info: '敵全体を中確率で恐怖状態にする',
        info_short: '中恐怖（全）',
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
