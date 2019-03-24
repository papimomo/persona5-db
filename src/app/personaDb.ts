import { regist } from './persona_enum';
import { SkillDb } from './skill/skill-db';
import { PhysicalSkill } from './skill/physical-skill';
import { GunSkill } from './skill/gun-skill';
import { FireSkill } from './skill/fire-skill';
import { IceSkill } from './skill/ice-skill';
import { WindSkill } from './skill/wind-skill';
import { ElectricSkill } from './skill/electric-skill';
import { NuclearSkill } from './skill/nuclear-skill';
import { PsySkill } from './skill/psy-skill';
import { BlessSkill } from './skill/bless-skill';
import { CurseSkill } from './skill/curse-skill';
import { AbStateSkill } from './skill/ab-state-skill';
import { AutoSkill } from './skill/auto-skill';
import { AlmightSkill } from './skill/almight-skill';
import { SupportSkill } from './skill/support-skill';
import { RecoverySkill } from './skill/recovery-skill';

export enum arcana {
    gusha = '愚者',
    majutushi = '魔術師',
    kyoukou = '女教皇',
    jotei = '女帝',
    koutei = '皇帝',
    houou = '法王',
    renai = '恋愛',
    sensya = '戦車',
    seigi = '正義',
    inja = '隠者',
    unmei = '運命',
    gouki = '剛毅',
    keishisya = '刑死者',
    shinigami = '死神',
    sessei = '節制',
    tuki = '月',
    hoshi = '星',
    tou = '塔',
    akuma = '悪魔',
    taiyou = '太陽',
    shinpan = '審判'
}


export class PersonaDb {


    physical = new PhysicalSkill();
    gun = new GunSkill();
    fire = new FireSkill();
    ice = new IceSkill();
    wind = new WindSkill();
    electric = new ElectricSkill();
    nuclear = new NuclearSkill();
    psy = new PsySkill();
    bless = new BlessSkill();
    curse = new CurseSkill();
    abState = new AbStateSkill();
    auto = new AutoSkill();
    almight = new AlmightSkill();
    support = new SupportSkill();
    recovery = new RecoverySkill();

    sample = {
        element: {
            physical: regist.normal,
            gun: regist.normal,
            fire: regist.normal,
            ice: regist.normal,
            electric: regist.normal,
            wind: regist.normal,
            psy: regist.normal,
            nuclear: regist.normal,
            bless: regist.normal,
            curse: regist.normal,
        },
        skill: [
            {
                skill: this.curse.eiha,
                level: 0
            },
            {
                skill: this.physical.slash,
                level: 2
            },
            {
                skill: this.support.sukunda,
                level: 4
            },
            {
                skill: this.physical.yumemihari,
                level: 5
            },
            {
                skill: this.auto.gyakkyounokakugo,
                level: 7
            }
        ],
        status: {
            ti: 2,
            ma: 2,
            ta: 2,
            so: 3,
            un: 1
        }

    }

    persona = [
        {
            level: 1,
            name: 'アルセーヌ',
            arcana: arcana.gusha,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.weak,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.weak,
                curse: regist.regist
            },
            skill: [
                {
                    skill: this.curse.eiha,
                    level: 0
                },
                {
                    skill: this.physical.slash,
                    level: 2
                },
                {
                    skill: this.support.sukunda,
                    level: 4
                },
                {
                    skill: this.physical.yumemihari,
                    level: 5
                },
                {
                    skill: this.auto.gyakkyounokakugo,
                    level: 7
                }
            ],
            status: {
                ti: 2,
                ma: 2,
                ta: 2,
                so: 3,
                un: 1
            }
        },
        {
            level: 8,
            name: 'オバリヨン',
            arcana: arcana.gusha,
            element: {
                physical: regist.regist,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.weak,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.gun.shidan,
                    level: 0
                },
                {
                    skill: this.support.sukunda,
                    level: 0
                },
                {
                    skill: this.physical.lucky_punch,
                    level: 9
                },
                {
                    skill: this.auto.kyohu_taisei,
                    level: 10
                },
                {
                    skill: this.support.dekaja,
                    level: 12
                }
            ],
            status: {
                ti: 7,
                ma: 3,
                ta: 9,
                so: 8,
                un: 4
            }
        },
        {
            level: 16,
            name: 'ハイピクシー',
            arcana: arcana.gusha,
            element: {
                physical: regist.normal,
                gun: regist.weak,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.regist,
                wind: regist.regist,
                psy: regist.normal,
                nuclear: regist.weak,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.wind.garu,
                    level: 0
                },
                {
                    skill: this.recovery.media,
                    level: 0
                },
                {
                    skill: this.abState.dorumina,
                    level: 0
                },
                {
                    skill: this.recovery.diarama,
                    level: 18
                },
                {
                    skill: this.abState.tyouhatu,
                    level: 19
                },
                {
                    skill: this.wind.mahagaru,
                    level: 20
                }
            ],
            status: {
                ti: 8,
                ma: 14,
                ta: 10,
                so: 13,
                un: 10
            }

        },
        // {
        //     level: 20,
        //     name: 'イザナギ',
        //     arcana: arcana.gusha,
        //     gousei: false
        // },
        // {
        //     level: 23,
        //     name: 'イザナギ・賊神',
        //     arcana: arcana.gusha,
        //     gousei: false
        // },
        // {
        //     level: 26,
        //     name: 'オルフェウス',
        //     arcana: arcana.gusha,
        //     gousei: false
        // },
        // {
        //     level: 29,
        //     name: 'オルフェウス・賊神',
        //     arcana: arcana.gusha,
        //     gousei: false
        // },
        {
            level: 32,
            name: 'デカラビア',
            arcana: arcana.gusha,
            element: {
                physical: regist.weak,
                gun: regist.normal,
                fire: regist.reflect,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.regist,
                bless: regist.normal,
                curse: regist.regist,
            },
            skill: [
                {
                    skill: this.fire.agirao,
                    level: 0
                },
                {
                    skill: this.abState.hukitunakotoba,
                    level: 0
                },
                {
                    skill: this.fire.maharagion,
                    level: 33
                },
                {
                    skill: this.auto.kaen_booster,
                    level: 35
                },
                {
                    skill: this.auto.kaen_mukou,
                    level: 36
                },
                {
                    skill: this.abState.devil_smile,
                    level: 37
                },
                {
                    skill: this.support.tetrakarn,
                    level: 40
                },
            ],
            status: {
                ti: 21,
                ma: 23,
                ta: 19,
                so: 22,
                un: 18
            }
        },
        {
            level: 38,
            name: 'レギオン',
            arcana: arcana.gusha,
            element: {
                physical: regist.regist,
                gun: regist.regist,
                fire: regist.regist,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.regist,
                nuclear: regist.normal,
                bless: regist.weak,
                curse: regist.none,
            },
            skill: [
                {
                    skill: this.physical.abaremakuri,
                    level: 0
                },
                {
                    skill: this.almight.kyuketu,
                    level: 0
                },
                {
                    skill: this.physical.negative_pile,
                    level: 0
                },
                {
                    skill: this.psy.psyo,
                    level: 39
                },
                {
                    skill: this.support.tetra_break,
                    level: 40
                },
                {
                    skill: this.auto.memai_mukou,
                    level: 42
                },
            ],
            status: {
                ti: 24,
                ma: 24,
                ta: 30,
                so: 23,
                un: 20
            }

        },
        {
            level: 42,
            name: 'オセ',
            arcana: arcana.gusha,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.regist,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.weak,
                curse: regist.none,
            },
            skill: [
                {
                    skill: this.physical.onikagura,
                    level: 0
                },
                {
                    skill: this.auto.heavy_counter,
                    level: 0
                },
                {
                    skill: this.physical.samidare_giri,
                    level: 43
                },
                {
                    skill: this.support.mahatarukaja,
                    level: 45
                },
                {
                    skill: this.physical.heat_wave,
                    level: 47
                },
            ],
            status: {
                ti: 32,
                ma: 24,
                ta: 25,
                so: 31,
                un: 21
            }
        },
        {
            level: 49,
            name: 'バグス',
            arcana: arcana.gusha,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.regist,
                nuclear: regist.weak,
                bless: regist.normal,
                curse: regist.none,
            },
            skill: [
                {
                    skill: this.physical.miracle_punch,
                    level: 0
                },
                {
                    skill: this.support.mahasukunda,
                    level: 0
                },
                {
                    skill: this.psy.psydain,
                    level: 0
                },
                {
                    skill: this.auto.mahatarukaauto,
                    level: 51
                },
                {
                    skill: this.gun.triple_down,
                    level: 52
                },
                {
                    skill: this.auto.kyoku_buturi_mikiri,
                    level: 54
                },
                {
                    skill: this.auto.kyusokukaihuku,
                    level: 55
                },
            ],
            status: {
                ti: 35,
                ma: 33,
                ta: 30,
                so: 32,
                un: 34
            }

        },
        {
            level: 50,
            name: '水晶髑髏',
            arcana: arcana.gusha,
            gousei: false,
            element: {
                        physical: regist.regist,
                        gun: regist.none,
                        fire: regist.reflect,
                        ice: regist.reflect,
                        electric: regist.reflect,
                        wind: regist.reflect,
                        psy: regist.reflect,
                        nuclear: regist.reflect,
                        bless: regist.normal,
                        curse: regist.reflect,
                    },
                    skill: [
                        {
                            skill: this.fire.maharagidain,
                            level: 0
                        },
                        {
                            skill: this.ice.mahabufudain,
                            level: 0
                        },
                        {
                            skill: this.wind.mahagarudain,
                            level: 0
                        },
                        {
                            skill: this.electric.mahajiodain,
                            level: 0
                        },
                        {
                            skill: this.psy.mahapsydain,
                            level: 0
                        },
                        {
                            skill: this.nuclear.mahafureidain,
                            level: 0
                        },
                        {
                            skill: this.bless.mahakougaon,
                            level: 0
                        },
                        {
                            skill: this.curse.mahaeigaon,
                            level: 0
                        },
                    ],
                    status: {
                        ti: 50,
                        ma: 50,
                        ta: 50,
                        so: 50,
                        un: 50
                    }
            
        },
        {
            level: 61,
            name: 'ディオニュソス',
            arcana: arcana.gusha,
            element: {
                        physical: regist.normal,
                        gun: regist.normal,
                        fire: regist.normal,
                        ice: regist.normal,
                        electric: regist.reflect,
                        wind: regist.normal,
                        psy: regist.normal,
                        nuclear: regist.normal,
                        bless: regist.regist,
                        curse: regist.regist,
                    },
                    skill: [
                        {
                            skill: this.abState.narakunohadou,
                            level: 0
                        },
                        {
                            skill: this.physical.heat_wave,
                            level: 0
                        },
                        {
                            skill: this.psy.psydain,
                            level: 0
                        },
                        {
                            skill: this.support.terumopyurai,
                            level: 62
                        },
                        {
                            skill: this.fire.maharagidain,
                            level: 65
                        },
                        {
                            skill: this.recovery.amurita_syawa,
                            level: 66
                        },
                    ],
                    status: {
                        ti: 35,
                        ma: 41,
                        ta: 38,
                        so: 40,
                        un: 36
                    }
            
        },
        {
            level: 67,
            name: 'ジャアクフロスト',
            arcana: arcana.gusha,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.reflect,
                    ice: regist.drain,
                    electric: regist.normal,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.none,
                    bless: regist.normal,
                    curse: regist.reflect,
                },
                skill: [
                    {
                        skill: this.ice.mahabufudain,
                        level: 0
                    },
                    {
                        skill: this.gun.one_shot_kill,
                        level: 0
                    },
                    {
                        skill: this.physical.miracle_punch,
                        level: 0
                    },
                    {
                        skill: this.auto.hyouketu_highbooster,
                        level: 70
                    },
                    {
                        skill: this.auto.kaen_hansha,
                        level: 71
                    },
                    {
                        skill: this.ice.diamonddust,
                        level: 72
                    },
                ],
                status: {
                    ti: 44,
                    ma: 46,
                    ta: 41,
                    so: 42,
                    un: 35
                }
        
        },
        {
            level: 83,
            name: 'ヴィシュヌ',
            arcana: arcana.gusha,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.normal,
                    electric: regist.normal,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.normal,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.almight.megidoraon,
                        level: 0
                    },
                    {
                        skill: this.wind.mahagarudain,
                        level: 0
                    },
                    {
                        skill: this.auto.ari_dance,
                        level: 0
                    },
                    {
                        skill: this.wind.shinkuha,
                        level: 85
                    },
                    {
                        skill: this.support.charge,
                        level: 86
                    },
                    {
                        skill: this.auto.kaen_hansha,
                        level: 87
                    },
                    {
                        skill: this.auto.shippu_highbooster,
                        level: 88
                    },
                    {
                        skill: this.gun.shikounomadan,
                        level: 90
                    },
                ],
                status: {
                    ti: 56,
                    ma: 51,
                    ta: 49,
                    so: 57,
                    un: 43
                }
        
        },
        {
            level: 95,
            name: 'サタナエル',
            arcana: arcana.gusha,
            element: {
                    physical: regist.regist,
                    gun: regist.regist,
                    fire: regist.regist,
                    ice: regist.regist,
                    electric: regist.regist,
                    wind: regist.regist,
                    psy: regist.regist,
                    nuclear: regist.regist,
                    bless: regist.none,
                    curse: regist.drain,
                },
                skill: [
                    {
                        skill: this.curse.mahaeigaon,
                        level: 0
                    },
                    {
                        skill: this.almight.megidoraon,
                        level: 0
                    },
                    {
                        skill: this.auto.seikan_tric,
                        level: 0
                    },
                    {
                        skill: this.gun.shikounomadan,
                        level: 0
                    },
                    {
                        skill: this.nuclear.cozmicfrea,
                        level: 96
                    },
                    {
                        skill: this.auto.syourinootakebi,
                        level: 99
                    },
                ],
                status: {
                    ti: 63,
                    ma: 60,
                    ta: 57,
                    so: 56,
                    un: 56
                }
        
        },


        {
            level: 2,
            name: 'ジャックランタン',
            arcana: arcana.majutushi,
        },
        {
            level: 11,
            name: 'ジャックフロスト',
            arcana: arcana.majutushi,
        },
        {
            level: 17,
            name: 'ネコマタ',
            arcana: arcana.majutushi,
        },
        {
            level: 24,
            name: 'ザントマン',
            arcana: arcana.majutushi,
        },
        {
            level: 28,
            name: 'コロンゾン',
            arcana: arcana.majutushi,
        },
        {
            level: 43,
            name: 'クイーンメイブ',
            arcana: arcana.majutushi,
        },
        {
            level: 48,
            name: 'ランダ',
            arcana: arcana.majutushi,
        },
        {
            level: 59,
            name: 'スルト',
            arcana: arcana.majutushi,
        },
        {
            level: 79,
            name: 'フツヌシ',
            arcana: arcana.majutushi,
        },
        {
            level: 6,
            name: 'シルキー',
            arcana: arcana.kyoukou,
        },
        {
            level: 11,
            name: 'アプサラス',
            arcana: arcana.kyoukou,
        },
        {
            level: 25,
            name: 'コ・イ・ヌール',
            arcana: arcana.kyoukou,
        },
        {
            level: 26,
            name: 'イシス',
            arcana: arcana.kyoukou,
        },
        {
            level: 40,
            name: 'キクリヒメ',
            arcana: arcana.kyoukou,
        },
        {
            level: 50,
            name: 'サラスヴァティ',
            arcana: arcana.kyoukou,
        },
        {
            level: 55,
            name: 'スカディ',
            arcana: arcana.kyoukou,
        },
        {
            level: 73,
            name: 'キュベレ',
            arcana: arcana.kyoukou,
        },
        {
            level: 15,
            name: '女王の首飾り',
            arcana: arcana.jotei,
            gousei: false
        },
        {
            level: 20,
            name: 'ヤクシニー',
            arcana: arcana.jotei,
        },
        {
            level: 26,
            name: 'ラミア',
            arcana: arcana.jotei,
        },
        {
            level: 40,
            name: 'ハリティー',
            arcana: arcana.jotei,
        },
        {
            level: 50,
            name: 'ダーキニー ',
            arcana: arcana.jotei,
        },
        {
            level: 56,
            name: 'ティターニア',
            arcana: arcana.jotei,
        },
        {
            level: 77,
            name: 'カーリー',
            arcana: arcana.jotei,
        },
        {
            level: 80,
            name: 'マザーハーロット',
            arcana: arcana.jotei,
        },
        {
            level: 10,
            name: 'リージェント',
            arcana: arcana.koutei,
            gousei: false
        },
        {
            level: 16,
            name: 'エリゴール',
            arcana: arcana.koutei,
        },
        {
            level: 28,
            name: 'セタンタ',
            arcana: arcana.koutei,
        },
        {
            level: 36,
            name: 'トート',
            arcana: arcana.koutei,
        },
        {
            level: 44,
            name: 'オオクニヌシ',
            arcana: arcana.koutei,
        },
        {
            level: 52,
            name: 'バロン',
            arcana: arcana.koutei,
        },
        {
            level: 61,
            name: 'キングフロスト',
            arcana: arcana.koutei,
        },
        {
            level: 66,
            name: 'オベロン',
            arcana: arcana.koutei,
        },
        {
            level: 75,
            name: 'バアル',
            arcana: arcana.koutei,
        },
        {
            level: 82,
            name: 'オーディン',
            arcana: arcana.koutei,
        },
        {
            level: 9,
            name: 'ベリス',
            arcana: arcana.houou,
        },
        {
            level: 17,
            name: 'オロバス',
            arcana: arcana.houou,
        },
        {
            level: 22,
            name: 'ホウオウ',
            arcana: arcana.houou,
        },
        {
            level: 25,
            name: 'アンズー',
            arcana: arcana.houou,
        },
        {
            level: 39,
            name: 'ユニコーン',
            arcana: arcana.houou,
        },
        {
            level: 42,
            name: 'だいそうじょう',
            arcana: arcana.houou,
        },
        {
            level: 63,
            name: 'フォルネウス',
            arcana: arcana.houou,
        },
        {
            level: 67,
            name: 'ビシャモンテン',
            arcana: arcana.houou,
        },
        {
            level: 76,
            name: 'コウリュウ',
            arcana: arcana.houou,
        },
        {
            level: 2,
            name: 'ピクシー',
            arcana: arcana.renai,
        },
        {
            level: 6,
            name: 'サキミタマ',
            arcana: arcana.renai,
        },
        {
            level: 18,
            name: 'リャナンシー',
            arcana: arcana.renai,
        },
        {
            level: 29,
            name: 'アメノウズメ',
            arcana: arcana.renai,
        },
        {
            level: 42,
            name: 'クシナダヒメ',
            arcana: arcana.renai,
        },
        {
            level: 50,
            name: 'ナルキッソス',
            arcana: arcana.renai,
        },
        {
            level: 56,
            name: 'パールヴァティ',
            arcana: arcana.renai,
        },
        {
            level: 78,
            name: 'ラファエル',
            arcana: arcana.renai,
        },
        {
            level: 85,
            name: 'イシュタル',
            arcana: arcana.renai,
        },
        {
            level: 3,
            name: 'アガシオン',
            arcana: arcana.sensya,
        },
        {
            level: 10,
            name: 'スライム',
            arcana: arcana.sensya,
        },
        {
            level: 16,
            name: 'シーサー',
            arcana: arcana.sensya,
        },
        {
            level: 21,
            name: 'シキオウジ',
            arcana: arcana.sensya,
        },
        {
            level: 25,
            name: 'キンキ',
            arcana: arcana.sensya,
        },
        {
            level: 31,
            name: 'アラミタマ',
            arcana: arcana.sensya,
        },
        {
            level: 39,
            name: 'ホワイトライダー',
            arcana: arcana.sensya,
        },
        {
            level: 55,
            name: 'ケルベロス',
            arcana: arcana.sensya,
        },
        {
            level: 64,
            name: 'トール',
            arcana: arcana.sensya,
        },
        {
            level: 86,
            name: 'シュウ',
            arcana: arcana.sensya,
        },
        {
            level: 12,
            name: 'エンジェル',
            arcana: arcana.seigi,
        },
        {
            level: 16,
            name: 'アークエンジェル',
            arcana: arcana.seigi,
        },
        {
            level: 29,
            name: 'プリンシパリティ',
            arcana: arcana.seigi,
        },
        {
            level: 41,
            name: 'パワー',
            arcana: arcana.seigi,
        },
        {
            level: 60,
            name: 'メルキセデク',
            arcana: arcana.seigi,
        },
        {
            level: 68,
            name: 'ドミニオン',
            arcana: arcana.seigi,
        },
        {
            level: 71,
            name: 'ソロネ',
            arcana: arcana.seigi,
        },
        {
            level: 81,
            name: 'ウリエル',
            arcana: arcana.seigi,
        },
        {
            level: 89,
            name: 'メタトロン',
            arcana: arcana.seigi,
        },
        {
            level: 4,
            name: 'バイコーン',
            arcana: arcana.inja,
        },
        {
            level: 9,
            name: 'コロボックル',
            arcana: arcana.inja,
        },
        {
            level: 13,
            name: 'イッポンタダラ',
            arcana: arcana.inja,
        },
        {
            level: 17,
            name: 'スダマ',
            arcana: arcana.inja,
        },
        {
            level: 24,
            name: 'ナーガ',
            arcana: arcana.inja,
        },
        {
            level: 35,
            name: 'アラハバキ',
            arcana: arcana.inja,
        },
        {
            level: 42,
            name: 'クヴァンダ',
            arcana: arcana.inja,
        },
        {
            level: 49,
            name: 'コウモクテン',
            arcana: arcana.inja,
        },
        {
            level: 56,
            name: 'クラマテング',
            arcana: arcana.inja,
        },
        {
            level: 75,
            name: 'オンギョウキ',
            arcana: arcana.inja,
        },
        {
            level: 20,
            name: 'スクーンの石',
            arcana: arcana.unmei,
            gousei: false
        },
        {
            level: 26,
            name: 'クロト',
            arcana: arcana.unmei,
        },
        // {
        //     level: 30,
        //     name: 'アリアドネ',
        //     arcana: arcana.unmei,
        //     gousei: false
        // },
        {
            level: 34,
            name: 'ラケシス',
            arcana: arcana.unmei,
        },
        {
            level: 39,
            name: 'アトロポス',
            arcana: arcana.unmei,
        },
        // {
        //     level: 42,
        //     name: 'アリアドネ・賊神',
        //     arcana: arcana.unmei,
        //     gousei: false
        // },
        {
            level: 46,
            name: 'フォルトゥナ',
            arcana: arcana.unmei,
        },
        {
            level: 52,
            name: 'ノルン',
            arcana: arcana.unmei,
        },
        // {
        //     level: 56,
        //     name: 'アステリオス',
        //     arcana: arcana.unmei,
        //     gousei: false
        // },
        // {
        //     level: 42,
        //     name: 'アステリオス・賊神',
        //     arcana: arcana.unmei,
        //     gousei: false
        // },
        {
            level: 69,
            name: 'ラクシュミ',
            arcana: arcana.unmei,
        },
        {
            level: 6,
            name: 'ケルピー',
            arcana: arcana.gouki,
        },
        {
            level: 14,
            name: 'クシミタマ',
            arcana: arcana.gouki,
        },
        {
            level: 19,
            name: 'オニ',
            arcana: arcana.gouki,
        },
        {
            level: 24,
            name: 'ラクシャーサ',
            arcana: arcana.gouki,
        },
        {
            level: 30,
            name: 'オルロフ',
            arcana: arcana.gouki,
            gousei: false
        },
        {
            level: 31,
            name: 'ゾウチョウテン',
            arcana: arcana.gouki,
        },
        {
            level: 44,
            name: 'ヴァルキリー',
            arcana: arcana.gouki,
        },
        {
            level: 69,
            name: 'ジークフリート',
            arcana: arcana.gouki,
        },
        {
            level: 80,
            name: 'ザオウゴンゲン',
            arcana: arcana.gouki,
        },
        {
            level: 9,
            name: 'カハク',
            arcana: arcana.keishisya,
        },
        {
            level: 14,
            name: 'イヌガミ',
            arcana: arcana.keishisya,
        },
        {
            level: 21,
            name: 'オルトロス',
            arcana: arcana.keishisya,
        },
        {
            level: 29,
            name: 'タケミナカタ',
            arcana: arcana.keishisya,
        },
        {
            level: 35,
            name: '大帝の護符',
            arcana: arcana.keishisya,
            gousei: false
        },
        {
            level: 42,
            name: 'ヘカトンケイル',
            arcana: arcana.keishisya,
        },
        {
            level: 60,
            name: 'モロク',
            arcana: arcana.keishisya,
        },
        {
            level: 68,
            name: 'ヴァスキ',
            arcana: arcana.keishisya,
        },
        {
            level: 82,
            name: 'アティス',
            arcana: arcana.keishisya,
        },
        {
            level: 3,
            name: 'マンドレイク',
            arcana: arcana.shinigami,
        },
        {
            level: 9,
            name: 'モコイ',
            arcana: arcana.shinigami,
        },
        {
            level: 19,
            name: 'マタドール',
            arcana: arcana.shinigami,
        },
        {
            level: 29,
            name: 'ピシャーチャ',
            arcana: arcana.shinigami,
        },
        {
            level: 39,
            name: 'ヘルズエンジェル',
            arcana: arcana.shinigami,
        },
        {
            level: 40,
            name: 'ホープダイヤ',
            arcana: arcana.shinigami,
            gousei: false
        },
        {
            level: 53,
            name: 'ペイルライダー',
            arcana: arcana.shinigami,
        },
        {
            level: 62,
            name: 'チェルノポグ',
            arcana: arcana.shinigami,
        },
        // {
        //     level: 65,
        //     name: 'タナトス',
        //     arcana: arcana.shinigami,
        //     gousei: false
        // },
        // {
        //     level: 69,
        //     name: 'タナトス・賊神',
        //     arcana: arcana.shinigami,
        //     gousei: false
        // },
        {
            level: 72,
            name: 'モト',
            arcana: arcana.shinigami,
        },
        {
            level: 79,
            name: 'アリス',
            arcana: arcana.shinigami,
        },
        {
            level: 7,
            name: 'ゲンブ',
            arcana: arcana.sessei,
        },
        {
            level: 11,
            name: 'コッパテング',
            arcana: arcana.sessei,
        },
        {
            level: 15,
            name: 'マカミ',
            arcana: arcana.sessei,
        },
        {
            level: 20,
            name: 'ニギミタマ',
            arcana: arcana.sessei,
        },
        {
            level: 25,
            name: 'ジコクテン',
            arcana: arcana.sessei,
        },
        {
            level: 33,
            name: 'ミトラ',
            arcana: arcana.sessei,
        },
        {
            level: 49,
            name: 'ビャッコ',
            arcana: arcana.sessei,
        },
        {
            level: 55,
            name: 'ナーガラジャ',
            arcana: arcana.sessei,
        },
        {
            level: 62,
            name: 'セイリュウ',
            arcana: arcana.sessei,
        },
        {
            level: 77,
            name: 'ガブリエル',
            arcana: arcana.sessei,
        },
        {
            level: 84,
            name: 'アルダー',
            arcana: arcana.sessei,
        },
        {
            level: 5,
            name: 'インキュバス',
            arcana: arcana.akuma,
        },
        {
            level: 10,
            name: 'アンドラス',
            arcana: arcana.akuma,
        },
        {
            level: 25,
            name: 'フラロウス',
            arcana: arcana.akuma,
        },
        {
            level: 32,
            name: 'リリム',
            arcana: arcana.akuma,
        },
        {
            level: 43,
            name: 'パズス',
            arcana: arcana.akuma,
        },
        {
            level: 58,
            name: 'バフォメット',
            arcana: arcana.akuma,
        },
        {
            level: 62,
            name: 'ネビロス',
            arcana: arcana.akuma,
        },
        {
            level: 68,
            name: 'ベリアル',
            arcana: arcana.akuma,
        },
        {
            level: 84,
            name: 'ベルゼブブ',
            arcana: arcana.akuma,
        },
        {
            level: 32,
            name: 'ジュターユ',
            arcana: arcana.tou,
        },
        {
            level: 37,
            name: 'ベルフェゴール',
            arcana: arcana.tou,
        },
        {
            level: 41,
            name: 'レッドライダー',
            arcana: arcana.tou,
        },
        // {
        //     level: 44,
        //     name: 'マガツイザナギ',
        //     arcana: arcana.tou,
        //     gousei: false
        // },
        // {
        //     level: 48,
        //     name: 'マガツイザナギ・賊神',
        //     arcana: arcana.tou,
        //     gousei: false
        // },
        {
            level: 51,
            name: 'セト',
            arcana: arcana.tou,
        },
        {
            level: 59,
            name: 'ブラックライダー',
            arcana: arcana.tou,
        },
        {
            level: 73,
            name: 'マーラ',
            arcana: arcana.tou,
        },
        {
            level: 79,
            name: 'ヨシツネ',
            arcana: arcana.tou,
        },
        {
            level: 85,
            name: 'マダ',
            arcana: arcana.tou,
        },
        {
            level: 11,
            name: 'コダマ',
            arcana: arcana.hoshi,
        },
        {
            level: 23,
            name: 'フウキ',
            arcana: arcana.hoshi,
        },
        {
            level: 30,
            name: 'ネコショウグン',
            arcana: arcana.hoshi,
        },
        {
            level: 36,
            name: 'キウン',
            arcana: arcana.hoshi,
        },
        {
            level: 43,
            name: 'アナンタ',
            arcana: arcana.hoshi,
        },
        {
            level: 52,
            name: 'ガルーダ',
            arcana: arcana.hoshi,
        },
        {
            level: 64,
            name: 'ハヌマーン',
            arcana: arcana.hoshi,
        },
        {
            level: 67,
            name: 'クー・フーリン',
            arcana: arcana.hoshi,
        },
        {
            level: 80,
            name: 'スラオシャ',
            arcana: arcana.hoshi,
        },
        {
            level: 93,
            name: 'ルシファー',
            arcana: arcana.hoshi,
        },
        {
            level: 7,
            name: 'サキュバス',
            arcana: arcana.tuki,
        },
        {
            level: 12,
            name: 'オンモラキ',
            arcana: arcana.tuki,
        },
        // {
        //     level: 16,
        //     name: 'カグヤ',
        //     arcana: arcana.tuki,
        //     gousei: false
        // },
        {
            level: 20,
            name: 'ヌエ',
            arcana: arcana.tuki,
        },
        {
            level: 24,
            name: 'スイキ',
            arcana: arcana.tuki,
        },
        // {
        //     level: 25,
        //     name: 'カグヤ・賊神',
        //     arcana: arcana.tuki,
        //     gousei: false
        // },
        {
            level: 29,
            name: 'ブラックウーズ',
            arcana: arcana.tuki,
        },
        {
            level: 33,
            name: 'モスマン',
            arcana: arcana.tuki,
        },
        {
            level: 44,
            name: 'ギリメカラ',
            arcana: arcana.tuki,
        },
        // {
        //     level: 50,
        //     name: 'ツキヨミ',
        //     arcana: arcana.tuki,
        //     gousei: false
        // },
        // {
        //     level: 55,
        //     name: 'ツキヨミ・賊神',
        //     arcana: arcana.tuki,
        //     gousei: false
        // },
        {
            level: 60,
            name: 'リリス',
            arcana: arcana.tuki,
        },
        {
            level: 75,
            name: 'サンダルフォン',
            arcana: arcana.tuki,
        },
        {
            level: 19,
            name: 'スザク',
            arcana: arcana.taiyou,
        },
        {
            level: 39,
            name: 'ミトラス',
            arcana: arcana.taiyou,
        },
        {
            level: 42,
            name: 'ユルング',
            arcana: arcana.taiyou,
        },
        {
            level: 49,
            name: 'ホルス',
            arcana: arcana.taiyou,
        },
        {
            level: 53,
            name: 'ガネーシャ',
            arcana: arcana.taiyou,
        },
        {
            level: 57,
            name: 'ヤタガラス',
            arcana: arcana.taiyou,
        },
        {
            level: 63,
            name: 'ケツアルカトル',
            arcana: arcana.taiyou,
        },
        {
            level: 76,
            name: 'アスラおう',
            arcana: arcana.taiyou,
        },
        {
            level: 37,
            name: 'アヌビス',
            arcana: arcana.shinpan,
        },
        {
            level: 59,
            name: 'トランペッター',
            arcana: arcana.shinpan,
        },
        {
            level: 64,
            name: 'ヤマタノオロチ',
            arcana: arcana.shinpan,
        },
        {
            level: 74,
            name: 'アバドン',
            arcana: arcana.shinpan,
        },
        // {
        //     level: 81,
        //     name: 'メサイア',
        //     arcana: arcana.sinpan,
        //     gousei: false
        // },
        {
            level: 82,
            name: 'シヴァ',
            arcana: arcana.shinpan,
        },
        {
            level: 87,
            name: 'ミカエル',
            arcana: arcana.shinpan,
        },
        // {
        //     level: 90,
        //     name: 'メサイア・賊神',
        //     arcana: arcana.sinpan,
        //     gousei: false
        // },
        {
            level: 92,
            name: 'サタン',
            arcana: arcana.shinpan,
        },
    ];
}
