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
            element: {
                physical: regist.normal,
                gun: regist.weak,
                fire: regist.drain,
                ice: regist.weak,
                electric: regist.normal,
                wind: regist.weak,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.fire.agi,
                    level: 0
                },
                {
                    skill: this.support.rakunda,
                    level: 0
                },
                {
                    skill: this.auto.couching,
                    level: 4
                },
                {
                    skill: this.abState.metubushi,
                    level: 5
                },
                {
                    skill: this.auto.suimin_taisei,
                    level: 7
                },
            ],
            status: {
                ti: 2,
                ma: 3,
                ta: 3,
                so: 3,
                un: 2
            }

        },
        {
            level: 11,
            name: 'ジャックフロスト',
            arcana: arcana.majutushi,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.weak,
                ice: regist.none,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.ice.bufu,
                    level: 0
                },
                {
                    skill: this.support.hyouketu_gardkill,
                    level: 0
                },
                {
                    skill: this.recovery.bisedy,
                    level: 0
                },
                {
                    skill: this.ice.mahabufu,
                    level: 12
                },
                {
                    skill: this.support.rakunda,
                    level: 13
                },
                {
                    skill: this.auto.touketu_up,
                    level: 15
                },
            ],
            status: {
                ti: 8,
                ma: 9,
                ta: 7,
                so: 9,
                un: 7
            }

        },
        {
            level: 17,
            name: 'ネコマタ',
            arcana: arcana.majutushi,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.weak,
                wind: regist.normal,
                psy: regist.regist,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.wind.mahagaru,
                    level: 0
                },
                {
                    skill: this.physical.teller_craw,
                    level: 0
                },
                {
                    skill: this.abState.devil_touch,
                    level: 0
                },
                {
                    skill: this.physical.histery_binta,
                    level: 18
                },
                {
                    skill: this.support.shippu_gardkill,
                    level: 20
                },
                {
                    skill: this.support.boudennokabe,
                    level: 21
                },
                {
                    skill: this.auto.dengeki_mikiri,
                    level: 22
                },
            ],
            status: {
                ti: 13,
                ma: 10,
                ta: 12,
                so: 15,
                un: 8
            }

        },
        {
            level: 24,
            name: 'ザントマン',
            arcana: arcana.majutushi,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.weak,
                wind: regist.regist,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.abState.dorumina,
                    level: 0
                },
                {
                    skill: this.wind.garura,
                    level: 0
                },
                {
                    skill: this.physical.dorumin_rash,
                    level: 0
                },
                {
                    skill: this.support.sukunda,
                    level: 25
                },
                {
                    skill: this.auto.suimin_mukou,
                    level: 27
                },
                {
                    skill: this.wind.mahagarura,
                    level: 28
                },
                {
                    skill: this.auto.suimin_up,
                    level: 29
                },
            ],
            status: {
                ti: 11,
                ma: 13,
                ta: 14,
                so: 20,
                un: 21
            }

        },
        {
            level: 28,
            name: 'コロンゾン',
            arcana: arcana.majutushi,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.drain,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.weak,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.abState.prinpa,
                    level: 0
                },
                {
                    skill: this.almight.kyuketu,
                    level: 0
                },
                {
                    skill: this.physical.abaremakuri,
                    level: 0
                },
                {
                    skill: this.curse.eiha,
                    level: 29
                },
                {
                    skill: this.auto.dengeki_mikiri,
                    level: 30
                },
                {
                    skill: this.curse.eiga,
                    level: 31
                },
                {
                    skill: this.auto.juon_booster,
                    level: 32
                },
                {
                    skill: this.auto.ameniutaeba,
                    level: 33
                },
            ],
            status: {
                ti: 16,
                ma: 19,
                ta: 19,
                so: 18,
                un: 19
            }

        },
        {
            level: 43,
            name: 'クイーンメイブ',
            arcana: arcana.majutushi,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.none,
                ice: regist.normal,
                electric: regist.regist,
                wind: regist.weak,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.weak,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.electric.mahajionga,
                    level: 0
                },
                {
                    skill: this.abState.makajamaon,
                    level: 0
                },
                {
                    skill: this.support.boudennokabe,
                    level: 0
                },
                {
                    skill: this.support.mahatarunda,
                    level: 44
                },
                {
                    skill: this.support.makara_break,
                    level: 46
                },
                {
                    skill: this.fire.agidain,
                    level: 48
                },
            ],
            status: {
                ti: 23,
                ma: 35,
                ta: 26,
                so: 30,
                un: 22
            }

        },
        {
            level: 48,
            name: 'ランダ',
            arcana: arcana.majutushi,
            element: {
                physical: regist.reflect,
                gun: regist.reflect,
                fire: regist.none,
                ice: regist.normal,
                electric: regist.weak,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.weak,
                curse: regist.none,
            },
            skill: [
                {
                    skill: this.physical.denkousekka,
                    level: 0
                },
                {
                    skill: this.physical.chimaturi,
                    level: 0
                },
                {
                    skill: this.auto.heavy_counter,
                    level: 0
                },
                {
                    skill: this.curse.eigaon,
                    level: 49
                },
                {
                    skill: this.support.mahatarunda,
                    level: 51
                },
                {
                    skill: this.curse.mudoon,
                    level: 53
                },
            ],
            status: {
                ti: 28,
                ma: 34,
                ta: 30,
                so: 33,
                un: 26
            }

        },
        {
            level: 59,
            name: 'スルト',
            arcana: arcana.majutushi,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.drain,
                ice: regist.weak,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.fire.agidain,
                    level: 0
                },
                {
                    skill: this.support.kaen_gardkill,
                    level: 0
                },
                {
                    skill: this.physical.megaton_raid,
                    level: 0
                },
                {
                    skill: this.fire.maharagidain,
                    level: 60
                },
                {
                    skill: this.auto.highper_counter,
                    level: 61
                },
                {
                    skill: this.fire.inferno,
                    level: 64
                },
            ],
            status: {
                ti: 37,
                ma: 40,
                ta: 39,
                so: 35,
                un: 33
            }

        },
        {
            level: 79,
            name: 'フツヌシ',
            arcana: arcana.majutushi,
            element: {
                physical: regist.regist,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.weak,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.physical.setuna_samidare_giri,
                    level: 0
                },
                {
                    skill: this.support.mahatarukaja,
                    level: 0
                },
                {
                    skill: this.auto.ari_dance,
                    level: 0
                },
                {
                    skill: this.support.charge,
                    level: 78
                },
                {
                    skill: this.auto.daitiyusokushin,
                    level: 79
                },
                {
                    skill: this.auto.advice,
                    level: 80
                },
                {
                    skill: this.auto.nioudati,
                    level: 81
                },
                {
                    skill: this.physical.blave_zapper,
                    level: 82
                },
            ],
            status: {
                ti: 54,
                ma: 48,
                ta: 47,
                so: 49,
                un: 37
            }

        },
        {
            level: 6,
            name: 'シルキー',
            arcana: arcana.kyoukou,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.weak,
                ice: regist.regist,
                electric: regist.weak,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.abState.dorumina,
                    level: 0
                },
                {
                    skill: this.ice.bufu,
                    level: 0
                },
                {
                    skill: this.recovery.dia,
                    level: 7
                },
                {
                    skill: this.recovery.patra,
                    level: 9
                },
                {
                    skill: this.auto.couching,
                    level: 10
                },
            ],
            status: {
                ti: 4,
                ma: 7,
                ta: 4,
                so: 5,
                un: 5
            }

        },
        {
            level: 11,
            name: 'アプサラス',
            arcana: arcana.kyoukou,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.regist,
                electric: regist.weak,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.support.riberion,
                    level: 0
                },
                {
                    skill: this.support.bouhyounokabe,
                    level: 0
                },
                {
                    skill: this.ice.bufu,
                    level: 0
                },
                {
                    skill: this.recovery.media,
                    level: 13
                },
                {
                    skill: this.support.boudennokabe,
                    level: 14
                },
                {
                    skill: this.support.bourannokabe,
                    level: 19
                },
            ],
            status: {
                ti: 7,
                ma: 11,
                ta: 6,
                so: 10,
                un: 6
            }

        },
        {
            level: 25,
            name: 'コ・イ・ヌール',
            arcana: arcana.kyoukou,
            element: {
                physical: regist.regist,
                gun: regist.regist,
                fire: regist.regist,
                ice: regist.regist,
                electric: regist.regist,
                wind: regist.regist,
                psy: regist.regist,
                nuclear: regist.normal,
                bless: regist.none,
                curse: regist.none,
            },
            skill: [
                {
                    skill: this.auto.kaen_mikiri,
                    level: 0
                },
                {
                    skill: this.auto.hyouketu_mikiri,
                    level: 0
                },
                {
                    skill: this.auto.shippu_mikiri,
                    level: 0
                },
                {
                    skill: this.auto.dengeki_mikiri,
                    level: 0
                },
                {
                    skill: this.auto.nenndou_mikiri,
                    level: 0
                },
                {
                    skill: this.auto.kakunetu_mikiri,
                    level: 0
                },
                {
                    skill: this.auto.syukuhuku_mikiri,
                    level: 0
                },
                {
                    skill: this.auto.juon_mikiri,
                    level: 0
                },
            ],
            status: {
                ti: 25,
                ma: 25,
                ta: 25,
                so: 25,
                un: 25
            }

        },
        {
            level: 26,
            name: 'イシス',
            arcana: arcana.kyoukou,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.weak,
                nuclear: regist.normal,
                bless: regist.none,
                curse: regist.none,
            },
            skill: [
                {
                    skill: this.fire.agirao,
                    level: 0
                },
                {
                    skill: this.support.sukukaja,
                    level: 0
                },
                {
                    skill: this.recovery.medirama,
                    level: 0
                },
                {
                    skill: this.auto.boukyaku_taisei,
                    level: 27
                },
                {
                    skill: this.electric.jionga,
                    level: 29
                },
                {
                    skill: this.wind.garura,
                    level: 30
                },
                {
                    skill: this.support.makarakarn,
                    level: 32
                },
            ],
            status: {
                ti: 15,
                ma: 21,
                ta: 16,
                so: 18,
                un: 15
            }

        },
        {
            level: 40,
            name: 'キクリヒメ',
            arcana: arcana.kyoukou,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.weak,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.none,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.regist,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.abState.sleep_song,
                    level: 0
                },
                {
                    skill: this.support.maharakukaja,
                    level: 0
                },
                {
                    skill: this.recovery.enazy_drop,
                    level: 0
                },
                {
                    skill: this.recovery.medirama,
                    level: 41
                },
                {
                    skill: this.support.tetraja,
                    level: 43
                },
                {
                    skill: this.auto.kamigaminokago,
                    level: 45
                },
            ],
            status: {
                ti: 22,
                ma: 31,
                ta: 24,
                so: 28,
                un: 22
            }

        },
        {
            level: 45,
            name: 'スカアハ',
            arcana: arcana.kyoukou,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.reflect,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.none,
            },
            skill: [
                {
                    skill: this.wind.mahagarura,
                    level: 0
                },
                {
                    skill: this.physical.samidare_giri,
                    level: 0
                },
                {
                    skill: this.auto.couching,
                    level: 0
                },
                {
                    skill: this.fire.maharagion,
                    level: 46
                },
                {
                    skill: this.support.mahatarukaja,
                    level: 48
                },
                {
                    skill: this.auto.kougeki,
                    level: 49
                },
                {
                    skill: this.auto.kuishibari,
                    level: 50
                },
            ],
            status: {
                ti: 29,
                ma: 30,
                ta: 28,
                so: 30,
                un: 25
            }

        },
        {
            level: 50,
            name: 'サラスヴァティ',
            arcana: arcana.kyoukou,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.none,
                electric: regist.regist,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.weak,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.recovery.medirama,
                    level: 0
                },
                {
                    skill: this.recovery.mepatra,
                    level: 0
                },
                {
                    skill: this.abState.tentarahu,
                    level: 0
                },
                {
                    skill: this.auto.suimin_mukou,
                    level: 51
                },
                {
                    skill: this.support.dekaja,
                    level: 52
                },
                {
                    skill: this.support.mahatarunda,
                    level: 53
                },
                {
                    skill: this.recovery.diarahan,
                    level: 54
                },
            ],
            status: {
                ti: 30,
                ma: 35,
                ta: 32,
                so: 33,
                un: 27
            }

        },
        {
            level: 55,
            name: 'スカディ',
            arcana: arcana.kyoukou,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.reflect,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.none,
            },
            skill: [
                {
                    skill: this.ice.mahabufura,
                    level: 0
                },
                {
                    skill: this.abState.devil_touch,
                    level: 0
                },
                {
                    skill: this.auto.zetubou_mukou,
                    level: 0
                },
                {
                    skill: this.almight.moujanonageki,
                    level: 56
                },
                {
                    skill: this.ice.bufudain,
                    level: 58
                },
                {
                    skill: this.almight.kyuma,
                    level: 59
                },
                {
                    skill: this.auto.hyouketu_hansha,
                    level: 60
                },
            ],
            status: {
                ti: 35,
                ma: 39,
                ta: 34,
                so: 34,
                un: 30
            }

        },
        {
            level: 73,
            name: 'キュベレ',
            arcana: arcana.kyoukou,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.regist,
                ice: regist.normal,
                electric: regist.weak,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.none,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.recovery.samrikamu,
                    level: 0
                },
                {
                    skill: this.recovery.mediarahan,
                    level: 0
                },
                {
                    skill: this.bless.mahakougaon,
                    level: 0
                },
                {
                    skill: this.auto.syukuhuku_highbooster,
                    level: 74
                },
                {
                    skill: this.auto.maharakukaauto,
                    level: 75
                },
                {
                    skill: this.auto.syukuhuku_kyusyu,
                    level: 77
                },
                {
                    skill: this.recovery.meshiaraizer,
                    level: 79
                },
            ],
            status: {
                ti: 44,
                ma: 48,
                ta: 45,
                so: 51,
                un: 38
            }

        },
        {
            level: 15,
            name: '女王の首飾り',
            arcana: arcana.jotei,
            gousei: false,
            element: {
                physical: regist.regist,
                gun: regist.weak,
                fire: regist.regist,
                ice: regist.regist,
                electric: regist.regist,
                wind: regist.regist,
                psy: regist.regist,
                nuclear: regist.regist,
                bless: regist.none,
                curse: regist.none,
            },
            skill: [
                {
                    skill: this.support.tarukaja,
                    level: 0
                },
                {
                    skill: this.support.rakukaja,
                    level: 0
                },
                {
                    skill: this.support.sukukaja,
                    level: 0
                },
                {
                    skill: this.recovery.rikamu,
                    level: 0
                },
                {
                    skill: this.recovery.media,
                    level: 0
                },
                {
                    skill: this.support.tarunda,
                    level: 0
                },
                {
                    skill: this.support.rakunda,
                    level: 0
                },
                {
                    skill: this.support.sukunda,
                    level: 0
                },
            ],
            status: {
                ti: 15,
                ma: 15,
                ta: 15,
                so: 15,
                un: 15
            }

        },
        {
            level: 20,
            name: 'ヤクシニー',
            arcana: arcana.jotei,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.regist,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.weak,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.physical.histery_binta,
                    level: 0
                },
                {
                    skill: this.abState.sensenhukoku,
                    level: 0
                },
                {
                    skill: this.auto.counter,
                    level: 0
                },
                {
                    skill: this.physical.onikagura,
                    level: 22
                },
                {
                    skill: this.auto.kougeki,
                    level: 23
                },
                {
                    skill: this.physical.reppuha,
                    level: 24
                },
            ],
            status: {
                ti: 14,
                ma: 11,
                ta: 13,
                so: 16,
                un: 13
            }

        },
        {
            level: 26,
            name: 'ラミア',
            arcana: arcana.jotei,
            element: {
                physical: regist.normal,
                gun: regist.regist,
                fire: regist.normal,
                ice: regist.weak,
                electric: regist.regist,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.regist,
            },
            skill: [
                {
                    skill: this.fire.agirao,
                    level: 0
                },
                {
                    skill: this.support.rakukaja,
                    level: 0
                },
                {
                    skill: this.physical.raise_slash,
                    level: 0
                },
                {
                    skill: this.abState.hukitunakotoba,
                    level: 27
                },
                {
                    skill: this.almight.yodonda_toiki,
                    level: 28
                },
                {
                    skill: this.fire.maharagion,
                    level: 30
                },
                {
                    skill: this.auto.zetubou_up,
                    level: 31
                },
            ],
            status: {
                ti: 21,
                ma: 15,
                ta: 18,
                so: 19,
                un: 12
            }

        },
        {
            level: 40,
            name: 'ハリティー',
            arcana: arcana.jotei,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.weak,
                psy: regist.regist,
                nuclear: regist.normal,
                bless: regist.regist,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.electric.jionga,
                    level: 0
                },
                {
                    skill: this.recovery.enazy_syawa,
                    level: 0
                },
                {
                    skill: this.recovery.mahabisedy,
                    level: 0
                },
                {
                    skill: this.recovery.samrikamu,
                    level: 41
                },
                {
                    skill: this.abState.yamiyonosenkou,
                    level: 42
                },
                {
                    skill: this.recovery.medirama,
                    level: 44
                },
                {
                    skill: this.auto.memai_up,
                    level: 45
                },
                {
                    skill: this.almight.kyuma,
                    level: 46
                },
            ],
            status: {
                ti: 24,
                ma: 29,
                ta: 25,
                so: 26,
                un: 23
            }

        },
        {
            level: 50,
            name: 'ダーキニー ',
            arcana: arcana.jotei,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.regist,
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
                    skill: this.physical.daisetudan,
                    level: 0
                },
                {
                    skill: this.physical.bad_beat,
                    level: 0
                },
                {
                    skill: this.physical.raise_slash,
                    level: 0
                },
                {
                    skill: this.auto.highper_counter,
                    level: 52
                },
                {
                    skill: this.physical.deth_bound,
                    level: 53
                },
                {
                    skill: this.support.riberion,
                    level: 54
                },
                {
                    skill: this.support.charge,
                    level: 55
                },
            ],
            status: {
                ti: 34,
                ma: 32,
                ta: 34,
                so: 28,
                un: 29
            }


        },
        {
            level: 56,
            name: 'ティターニア',
            arcana: arcana.jotei,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.weak,
                nuclear: regist.regist,
                bless: regist.regist,
                curse: regist.regist,
            },
            skill: [
                {
                    skill: this.nuclear.fureidain,
                    level: 0
                },
                {
                    skill: this.support.makara_break,
                    level: 0
                },
                {
                    skill: this.abState.sleep_song,
                    level: 0
                },
                {
                    skill: this.nuclear.mahafureidain,
                    level: 58
                },
                {
                    skill: this.auto.kakunetu_highbooster,
                    level: 60
                },
                {
                    skill: this.recovery.mediarahan,
                    level: 61
                },
            ],
            status: {
                ti: 32,
                ma: 40,
                ta: 35,
                so: 38,
                un: 30
            }


        },
        {
            level: 77,
            name: 'カーリー',
            arcana: arcana.jotei,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.none,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.reflect,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.regist,
            },
            skill: [
                {
                    skill: this.physical.kukan_sappou,
                    level: 0
                },
                {
                    skill: this.psy.psydain,
                    level: 0
                },
                {
                    skill: this.abState.tentarahu,
                    level: 0
                },
                {
                    skill: this.auto.kyoku_hyouketu_mikiri,
                    level: 79
                },
                {
                    skill: this.auto.highper_counter,
                    level: 80
                },
                {
                    skill: this.psy.mahapsydain,
                    level: 81
                },
                {
                    skill: this.auto.kakunetu_kyusyu,
                    level: 82
                },
            ],
            status: {
                ti: 53,
                ma: 45,
                ta: 46,
                so: 53,
                un: 41
            }

        },
        {
            level: 80,
            name: 'マザーハーロット',
            arcana: arcana.jotei,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.reflect,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.weak,
                curse: regist.none,
            },
            skill: [
                {
                    skill: this.ice.mahabufudain,
                    level: 0
                },
                {
                    skill: this.curse.mahamudoon,
                    level: 0
                },
                {
                    skill: this.auto.mudo_up,
                    level: 0
                },
                {
                    skill: this.ice.daihyougaki,
                    level: 81
                },
                {
                    skill: this.auto.hyouketu_highbooster,
                    level: 82
                },
                {
                    skill: this.auto.syukuhuku_mukou,
                    level: 83
                },
                {
                    skill: this.support.randamaiza,
                    level: 85
                },
            ],
            status: {
                ti: 55,
                ma: 48,
                ta: 46,
                so: 49,
                un: 49
            }

        },
        {
            level: 10,
            name: 'リージェント',
            arcana: arcana.koutei,
            gousei: false,
            element: {
                physical: regist.regist,
                gun: regist.regist,
                fire: regist.regist,
                ice: regist.regist,
                electric: regist.regist,
                wind: regist.regist,
                psy: regist.regist,
                nuclear: regist.weak,
                bless: regist.none,
                curse: regist.none,
            },
            skill: [
                {
                    skill: this.fire.maharagi,
                    level: 0
                },
                {
                    skill: this.ice.mahabufu,
                    level: 0
                },
                {
                    skill: this.electric.mahajio,
                    level: 0
                },
                {
                    skill: this.wind.mahagaru,
                    level: 0
                },
                {
                    skill: this.psy.mahapsy,
                    level: 0
                },
                {
                    skill: this.nuclear.mahafurei,
                    level: 0
                },
                {
                    skill: this.bless.mahakouha,
                    level: 0
                },
                {
                    skill: this.curse.mahaeiha,
                    level: 0
                },
            ],
            status: {
                ti: 10,
                ma: 10,
                ta: 10,
                so: 10,
                un: 10
            }

        },
        {
            level: 16,
            name: 'エリゴール',
            arcana: arcana.koutei,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.regist,
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
                    skill: this.fire.maharagi,
                    level: 0
                },
                {
                    skill: this.support.tarukaja,
                    level: 0
                },
                {
                    skill: this.auto.couching,
                    level: 0
                },
                {
                    skill: this.physical.nirenga,
                    level: 18
                },
                {
                    skill: this.support.sukunda,
                    level: 19
                },
                {
                    skill: this.physical.bousatu_rash,
                    level: 20
                },
            ],
            status: {
                ti: 12,
                ma: 10,
                ta: 13,
                so: 10,
                un: 10
            }

        },
        {
            level: 28,
            name: 'セタンタ',
            arcana: arcana.koutei,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.weak,
                nuclear: regist.regist,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.physical.daisetudan,
                    level: 0
                },
                {
                    skill: this.physical.dorumin_rash,
                    level: 0
                },
                {
                    skill: this.auto.counter,
                    level: 0
                },
                {
                    skill: this.physical.raise_slash,
                    level: 31
                },
                {
                    skill: this.support.riberion,
                    level: 32
                },
                {
                    skill: this.support.charge,
                    level: 34
                },
            ],
            status: {
                ti: 20,
                ma: 17,
                ta: 19,
                so: 18,
                un: 17
            }

        },
        {
            level: 36,
            name: 'トート',
            arcana: arcana.koutei,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.weak,
                nuclear: regist.normal,
                bless: regist.none,
                curse: regist.none,
            },
            skill: [
                {
                    skill: this.abState.tyouhatu,
                    level: 0
                },
                {
                    skill: this.nuclear.fureira,
                    level: 0
                },
                {
                    skill: this.support.mahasukunda,
                    level: 0
                },
                {
                    skill: this.almight.megido,
                    level: 37
                },
                {
                    skill: this.support.bounennokabe,
                    level: 39
                },
                {
                    skill: this.nuclear.mahafureira,
                    level: 40
                },
                {
                    skill: this.auto.middle_grow,
                    level: 42
                },
            ],
            status: {
                ti: 21,
                ma: 28,
                ta: 21,
                so: 24,
                un: 21
            }

        },
        {
            level: 44,
            name: 'オオクニヌシ',
            arcana: arcana.koutei,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.reflect,
                wind: regist.weak,
                psy: regist.none,
                nuclear: regist.weak,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.psy.mahapsyo,
                    level: 0
                },
                {
                    skill: this.physical.samidare_giri,
                    level: 0
                },
                {
                    skill: this.support.mahatarukaja,
                    level: 0
                },
                {
                    skill: this.auto.nenndou_booster,
                    level: 45
                },
                {
                    skill: this.support.nenndou_gardkill,
                    level: 46
                },
                {
                    skill: this.auto.kyoku_kakunetu_mikiri,
                    level: 47
                },
                {
                    skill: this.physical.heat_wave,
                    level: 49
                },
            ],
            status: {
                ti: 30,
                ma: 28,
                ta: 29,
                so: 28,
                un: 24
            }

        },
        {
            level: 52,
            name: 'バロン',
            arcana: arcana.koutei,
            element: {
                physical: regist.normal,
                gun: regist.regist,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.regist,
                wind: regist.weak,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.none,
                curse: regist.weak,
            },
            skill: [
                {
                    skill: this.electric.jiodain,
                    level: 0
                },
                {
                    skill: this.abState.sensenhukoku,
                    level: 0
                },
                {
                    skill: this.support.dengeki_gardkill,
                    level: 0
                },
                {
                    skill: this.auto.tyukikou,
                    level: 54
                },
                {
                    skill: this.auto.dengeki_mukou,
                    level: 55
                },
                {
                    skill: this.electric.mahajiodain,
                    level: 57
                },
            ],
            status: {
                ti: 33,
                ma: 35,
                ta: 33,
                so: 37,
                un: 25
            }

        },
        {
            level: 61,
            name: 'キングフロスト',
            arcana: arcana.koutei,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.drain,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.none,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.ice.bufudain,
                    level: 0
                },
                {
                    skill: this.support.hyouketu_gardkill,
                    level: 0
                },
                {
                    skill: this.physical.megaton_raid,
                    level: 0
                },
                {
                    skill: this.auto.touketu_up,
                    level: 62
                },
                {
                    skill: this.auto.mahatarukaauto,
                    level: 64
                },
                {
                    skill: this.auto.zetubou_mukou,
                    level: 65
                },
                {
                    skill: this.auto.hyouketu_highbooster,
                    level: 67
                },
            ],
            status: {
                ti: 38,
                ma: 39,
                ta: 45,
                so: 33,
                un: 35
            }

        },
        {
            level: 66,
            name: 'オベロン',
            arcana: arcana.koutei,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.regist,
                wind: regist.normal,
                psy: regist.none,
                nuclear: regist.weak,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.electric.jiodain,
                    level: 0
                },
                {
                    skill: this.abState.brain_jack,
                    level: 0
                },
                {
                    skill: this.physical.heat_wave,
                    level: 0
                },
                {
                    skill: this.support.mahatarukaja,
                    level: 68
                },
                {
                    skill: this.electric.mahajiodain,
                    level: 69
                },
                {
                    skill: this.support.bounennokabe,
                    level: 70
                },
                {
                    skill: this.recovery.samrikamu,
                    level: 71
                },
                {
                    skill: this.auto.dengeki_highbooster,
                    level: 72
                },
            ],
            status: {
                ti: 40,
                ma: 44,
                ta: 43,
                so: 43,
                un: 35
            }

        },
        {
            level: 75,
            name: 'バアル',
            arcana: arcana.koutei,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.regist,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.drain,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.regist,
                curse: regist.regist,
            },
            skill: [
                {
                    skill: this.wind.mahagarudain,
                    level: 0
                },
                {
                    skill: this.support.revolution,
                    level: 0
                },
                {
                    skill: this.support.mahatarukaja,
                    level: 0
                },
                {
                    skill: this.wind.bannbutu_ryuten,
                    level: 77
                },
                {
                    skill: this.support.tetraja,
                    level: 78
                },
                {
                    skill: this.support.charge,
                    level: 79
                },
                {
                    skill: this.physical.my_room,
                    level: 80
                },
            ],
            status: {
                ti: 48,
                ma: 50,
                ta: 47,
                so: 47,
                un: 40
            }

        },
        {
            level: 82,
            name: 'オーディン',
            arcana: arcana.koutei,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.none,
                wind: regist.drain,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.reflect,
                curse: regist.reflect,
            },
            skill: [
                {
                    skill: this.electric.shinrinokaminari,
                    level: 0
                },
                {
                    skill: this.physical.setuna_samidare_giri,
                    level: 0
                },
                {
                    skill: this.support.maharakukaja,
                    level: 0
                },
                {
                    skill: this.electric.el_jihard,
                    level: 84
                },
                {
                    skill: this.support.consentraito,
                    level: 85
                },
                {
                    skill: this.auto.kyusokukaihuku,
                    level: 86
                },
                {
                    skill: this.auto.dengeki_highbooster,
                    level: 87
                },
            ],
            status: {
                ti: 53,
                ma: 52,
                ta: 54,
                so: 52,
                un: 42
            }

        },
        {
            level: 9,
            name: 'ベリス',
            arcana: arcana.houou,
            element: {
                physical: regist.normal,
                gun: regist.none,
                fire: regist.regist,
                ice: regist.weak,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.physical.slash,
                    level: 0
                },
                {
                    skill: this.support.rakukaja,
                    level: 0
                },
                {
                    skill: this.physical.nirenga,
                    level: 10
                },
                {
                    skill: this.auto.kaen_mikiri,
                    level: 11
                },
                {
                    skill: this.physical.sledge_hummer,
                    level: 13
                },
            ],
            status: {
                ti: 8,
                ma: 6,
                ta: 7,
                so: 9,
                un: 7
            }

        },
        {
            level: 17,
            name: 'オロバス',
            arcana: arcana.houou,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.regist,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.weak,
                curse: regist.regist,
            },
            skill: [
                {
                    skill: this.fire.maharagi,
                    level: 0
                },
                {
                    skill: this.support.sukukaja,
                    level: 0
                },
                {
                    skill: this.support.dekaja,
                    level: 0
                },
                {
                    skill: this.support.maharakunda,
                    level: 19
                },
                {
                    skill: this.support.kaen_gardkill,
                    level: 20
                },
                {
                    skill: this.abState.makajamaon,
                    level: 21
                },
            ],
            status: {
                ti: 11,
                ma: 14,
                ta: 15,
                so: 12,
                un: 6
            }

        },
        {
            level: 22,
            name: 'ホウオウ',
            arcana: arcana.houou,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.regist,
                electric: regist.weak,
                wind: regist.none,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.nuclear.fureira,
                    level: 0
                },
                {
                    skill: this.physical.yumemihari,
                    level: 0
                },
                {
                    skill: this.recovery.diarama,
                    level: 23
                },
                {
                    skill: this.recovery.rikamu,
                    level: 25
                },
                {
                    skill: this.auto.kakunetu_booster,
                    level: 27
                },
            ],
            status: {
                ti: 14,
                ma: 15,
                ta: 15,
                so: 18,
                un: 11
            }
        },
        {
            level: 25,
            name: 'アンズー',
            arcana: arcana.houou,
            element: {
                physical: regist.normal,
                gun: regist.weak,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.regist,
                wind: regist.reflect,
                psy: regist.normal,
                nuclear: regist.weak,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.wind.garura,
                    level: 0
                },
                {
                    skill: this.support.mahasukukaja,
                    level: 0
                },
                {
                    skill: this.support.shippu_gardkill,
                    level: 0
                },
                {
                    skill: this.physical.asult_dive,
                    level: 27
                },
                {
                    skill: this.support.dekaja,
                    level: 28
                },
                {
                    skill: this.auto.boukyaku_mukou,
                    level: 29
                },
            ],
            status: {
                ti: 14,
                ma: 18,
                ta: 15,
                so: 21,
                un: 14
            }

        },
        {
            level: 39,
            name: 'ユニコーン',
            arcana: arcana.houou,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.none,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.regist,
                nuclear: regist.normal,
                bless: regist.none,
                curse: regist.weak,
            },
            skill: [
                {
                    skill: this.physical.asult_dive,
                    level: 0
                },
                {
                    skill: this.bless.mahanma,
                    level: 0
                },
                {
                    skill: this.support.dekunda,
                    level: 0
                },
                {
                    skill: this.recovery.samrikamu,
                    level: 41
                },
                {
                    skill: this.physical.denkousekka,
                    level: 42
                },
                {
                    skill: this.bless.kouga,
                    level: 43
                },
                {
                    skill: this.bless.hamaon,
                    level: 44
                },
            ],
            status: {
                ti: 20,
                ma: 27,
                ta: 30,
                so: 28,
                un: 29
            }

        },
        {
            level: 42,
            name: 'だいそうじょう',
            arcana: arcana.houou,
            element: {
                physical: regist.regist,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.none,
                curse: regist.weak,
            },
            skill: [
                {
                    skill: this.almight.kyuma,
                    level: 0
                },
                {
                    skill: this.bless.mahakouga,
                    level: 0
                },
                {
                    skill: this.bless.kaiten_seppou,
                    level: 43
                },
                {
                    skill: this.auto.syukuhuku_booster,
                    level: 44
                },
                {
                    skill: this.recovery.diarahan,
                    level: 45
                },
                {
                    skill: this.recovery.mepatra,
                    level: 46
                },
                {
                    skill: this.auto.gekido_mukou,
                    level: 47
                },
            ],
            status: {
                ti: 22,
                ma: 33,
                ta: 24,
                so: 25,
                un: 29
            }

        },
        {
            level: 63,
            name: 'フォルネウス',
            arcana: arcana.houou,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.drain,
                electric: regist.weak,
                wind: regist.normal,
                psy: regist.none,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.psy.psydain,
                    level: 0
                },
                {
                    skill: this.support.mahasukunda,
                    level: 0
                },
                {
                    skill: this.abState.marinkarin,
                    level: 0
                },
                {
                    skill: this.auto.seikan_tric,
                    level: 65
                },
                {
                    skill: this.almight.yodonda_kuuki,
                    level: 66
                },
                {
                    skill: this.psy.mahapsydain,
                    level: 67
                },
                {
                    skill: this.auto.kyoku_nenndou_mikiri,
                    level: 68
                },
            ],
            status: {
                ti: 41,
                ma: 39,
                ta: 40,
                so: 42,
                un: 34
            }

        },
        {
            level: 67,
            name: 'ビシャモンテン',
            arcana: arcana.houou,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.drain,
                ice: regist.weak,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.regist,
                curse: regist.regist,
            },
            skill: [
                {
                    skill: this.nuclear.fureidain,
                    level: 0
                },
                {
                    skill: this.recovery.diarahan,
                    level: 0
                },
                {
                    skill: this.physical.shibou_yugi,
                    level: 68
                },
                {
                    skill: this.nuclear.mahafureidain,
                    level: 69
                },
                {
                    skill: this.auto.kakunetu_highbooster,
                    level: 71
                },
                {
                    skill: this.support.tetrakarn,
                    level: 72
                },
                {
                    skill: this.physical.god_hand,
                    level: 73
                },
            ],
            status: {
                ti: 49,
                ma: 37,
                ta: 42,
                so: 45,
                un: 35
            }

        },
        {
            level: 76,
            name: 'コウリュウ',
            arcana: arcana.houou,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.reflect,
                wind: regist.normal,
                psy: regist.weak,
                nuclear: regist.none,
                bless: regist.none,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.psy.psychiciness,
                    level: 0
                },
                {
                    skill: this.recovery.mediarahan,
                    level: 0
                },
                {
                    skill: this.psy.mahapsydain,
                    level: 0
                },
                {
                    skill: this.auto.syourinoibuki,
                    level: 78
                },
                {
                    skill: this.support.consentraito,
                    level: 79
                },
                {
                    skill: this.auto.nenndou_highbooster,
                    level: 80
                },
                {
                    skill: this.auto.majutunosoyou,
                    level: 82
                },
            ],
            status: {
                ti: 43,
                ma: 51,
                ta: 50,
                so: 53,
                un: 38
            }

        },
        {
            level: 2,
            name: 'ピクシー',
            arcana: arcana.renai,
            element: {
                physical: regist.normal,
                gun: regist.weak,
                fire: regist.normal,
                ice: regist.weak,
                electric: regist.regist,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.regist,
                curse: regist.weak,
            },
            skill: [
                {
                    skill: this.electric.jio,
                    level: 0
                },
                {
                    skill: this.recovery.dia,
                    level: 0
                },
                {
                    skill: this.recovery.patra,
                    level: 3
                },
                {
                    skill: this.support.tarukaja,
                    level: 5
                },
                {
                    skill: this.auto.konran_taisei,
                    level: 6
                },
            ],
            status: {
                ti: 1,
                ma: 3,
                ta: 3,
                so: 4,
                un: 2
            }

        },
        {
            level: 6,
            name: 'サキミタマ',
            arcana: arcana.renai,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.regist,
                electric: regist.normal,
                wind: regist.weak,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.ice.bufu,
                    level: 0
                },
                {
                    skill: this.recovery.enazy_drop,
                    level: 0
                },
                {
                    skill: this.support.bourannokabe,
                    level: 0
                },
                {
                    skill: this.auto.low_grow,
                    level: 7
                },
                {
                    skill: this.support.rakukaja,
                    level: 8
                },
                {
                    skill: this.auto.memai_taisei,
                    level: 10
                },
            ],
            status: {
                ti: 4,
                ma: 6,
                ta: 5,
                so: 6,
                un: 4
            }

        },
        {
            level: 19,
            name: 'リャナンシー',
            arcana: arcana.renai,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.weak,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.regist,
                psy: regist.regist,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.support.rakunda,
                    level: 0
                },
                {
                    skill: this.psy.psyo,
                    level: 0
                },
                {
                    skill: this.abState.marinkarin,
                    level: 20
                },
                {
                    skill: this.curse.mahamudo,
                    level: 21
                },
                {
                    skill: this.psy.mahapsy,
                    level: 22
                },
                {
                    skill: this.curse.eiga,
                    level: 23
                },
            ],
            status: {
                ti: 9,
                ma: 17,
                ta: 12,
                so: 16,
                un: 10
            }

        },
        {
            level: 29,
            name: 'アメノウズメ',
            arcana: arcana.renai,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.drain,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.weak,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.electric.mahajio,
                    level: 0
                },
                {
                    skill: this.ice.bufura,
                    level: 0
                },
                {
                    skill: this.recovery.diarama,
                    level: 0
                },
                {
                    skill: this.abState.tentarahu,
                    level: 31
                },
                {
                    skill: this.auto.kamigaminokago,
                    level: 32
                },
                {
                    skill: this.auto.kanden_up,
                    level: 34
                },
            ],
            status: {
                ti: 15,
                ma: 22,
                ta: 19,
                so: 20,
                un: 18
            }

        },
        {
            level: 42,
            name: 'クシナダヒメ',
            arcana: arcana.renai,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.weak,
                bless: regist.reflect,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.ice.mahabufura,
                    level: 0
                },
                {
                    skill: this.physical.histery_binta,
                    level: 0
                },
                {
                    skill: this.recovery.medirama,
                    level: 0
                },
                {
                    skill: this.support.mahatarukaja,
                    level: 44
                },
                {
                    skill: this.auto.suimin_mukou,
                    level: 45
                },
                {
                    skill: this.support.bourannokabe,
                    level: 46
                },
                {
                    skill: this.recovery.amurita_syawa,
                    level: 47
                },
            ],
            status: {
                ti: 24,
                ma: 30,
                ta: 26,
                so: 28,
                un: 25
            }

        },
        {
            level: 50,
            name: 'ナルキッソス',
            arcana: arcana.renai,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.weak,
                ice: regist.normal,
                electric: regist.none,
                wind: regist.regist,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.regist,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.abState.yamiyonosenkou,
                    level: 0
                },
                {
                    skill: this.wind.mahagarura,
                    level: 0
                },
                {
                    skill: this.recovery.enazy_drop,
                    level: 0
                },
                {
                    skill: this.auto.high_grow,
                    level: 52
                },
                {
                    skill: this.auto.memai_mukou,
                    level: 53
                },
                {
                    skill: this.recovery.medirama,
                    level: 54
                },
                {
                    skill: this.auto.ukanaisora,
                    level: 55
                },
            ],
            status: {
                ti: 27,
                ma: 36,
                ta: 29,
                so: 35,
                un: 30
            }

        },
        {
            level: 56,
            name: 'パールヴァティ',
            arcana: arcana.renai,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.reflect,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.regist,
                nuclear: regist.normal,
                bless: regist.regist,
                curse: regist.weak,
            },
            skill: [
                {
                    skill: this.recovery.diarama,
                    level: 0
                },
                {
                    skill: this.psy.psydain,
                    level: 0
                },
                {
                    skill: this.bless.hamaon,
                    level: 0
                },
                {
                    skill: this.recovery.enazy_syawa,
                    level: 57
                },
                {
                    skill: this.recovery.diarahan,
                    level: 58
                },
                {
                    skill: this.psy.mahapsydain,
                    level: 59
                },
                {
                    skill: this.auto.hama_up,
                    level: 61
                },
            ],
            status: {
                ti: 33,
                ma: 39,
                ta: 33,
                so: 39,
                un: 31
            }

        },
        {
            level: 78,
            name: 'ラファエル',
            arcana: arcana.renai,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.drain,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.none,
                nuclear: regist.normal,
                bless: regist.none,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.physical.turuginomai,
                    level: 0
                },
                {
                    skill: this.support.charge,
                    level: 0
                },
                {
                    skill: this.support.dekaja,
                    level: 0
                },
                {
                    skill: this.support.heatraiza,
                    level: 80
                },
                {
                    skill: this.auto.high_grow,
                    level: 81
                },
                {
                    skill: this.auto.gyakkyounokakugo,
                    level: 82
                },
                {
                    skill: this.auto.budounokokoroe,
                    level: 83
                },
            ],
            status: {
                ti: 57,
                ma: 45,
                ta: 49,
                so: 55,
                un: 35
            }

        },
        {
            level: 85,
            name: 'イシュタル',
            arcana: arcana.renai,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.none,
                wind: regist.weak,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.recovery.mediarahan,
                    level: 0
                },
                {
                    skill: this.recovery.samrikamu,
                    level: 0
                },
                {
                    skill: this.auto.shippu_kyusyu,
                    level: 0
                },
                {
                    skill: this.auto.syunkankaihuku,
                    level: 87
                },
                {
                    skill: this.electric.mahajiodain,
                    level: 88
                },
                {
                    skill: this.auto.majutunosoyou,
                    level: 89
                },
                {
                    skill: this.recovery.meshiaraizer,
                    level: 90
                },
            ],
            status: {
                ti: 48,
                ma: 59,
                ta: 49,
                so: 58,
                un: 48
            }

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
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.regist,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.none,
                curse: regist.weak,
            },
            skill: [
                {
                    skill: this.bless.hama,
                    level: 0
                },
                {
                    skill: this.abState.metubushi,
                    level: 0
                },
                {
                    skill: this.recovery.dia,
                    level: 0
                },
                {
                    skill: this.bless.kouha,
                    level: 13
                },
                {
                    skill: this.recovery.bisedy,
                    level: 14
                },
                {
                    skill: this.auto.juon_mikiri,
                    level: 15
                },
                {
                    skill: this.support.dekunda,
                    level: 17
                },
            ],
            status: {
                ti: 7,
                ma: 9,
                ta: 9,
                so: 9,
                un: 9
            }

        },
        {
            level: 16,
            name: 'アークエンジェル',
            arcana: arcana.seigi,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.weak,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.none,
                curse: regist.weak,
            },
            skill: [
                {
                    skill: this.bless.hama,
                    level: 0
                },
                {
                    skill: this.abState.metubushi,
                    level: 0
                },
                {
                    skill: this.psy.psy,
                    level: 0
                },
                {
                    skill: this.support.riberion,
                    level: 18
                },
                {
                    skill: this.bless.mahakouha,
                    level: 19
                },
                {
                    skill: this.physical.kongou_happa,
                    level: 21
                },
            ],
            status: {
                ti: 13,
                ma: 10,
                ta: 13,
                so: 12,
                un: 7
            }

        },
        {
            level: 29,
            name: 'プリンシパリティ',
            arcana: arcana.seigi,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.regist,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.none,
                curse: regist.weak,
            },
            skill: [
                {
                    skill: this.bless.mahakouga,
                    level: 0
                },
                {
                    skill: this.abState.makajamaon,
                    level: 0
                },
                {
                    skill: this.support.tetraja,
                    level: 0
                },
                {
                    skill: this.recovery.medirama,
                    level: 31
                },
                {
                    skill: this.recovery.mahabisedy,
                    level: 32
                },
                {
                    skill: this.auto.syukuhuku_booster,
                    level: 34
                },
            ],
            status: {
                ti: 17,
                ma: 19,
                ta: 18,
                so: 21,
                un: 19
            }

        },
        {
            level: 41,
            name: 'パワー',
            arcana: arcana.seigi,
            element: {
                physical: regist.normal,
                gun: regist.weak,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.regist,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.none,
                curse: regist.weak,
            },
            skill: [
                {
                    skill: this.bless.hamaon,
                    level: 0
                },
                {
                    skill: this.support.sukukaja,
                    level: 0
                },
                {
                    skill: this.physical.denkousekka,
                    level: 42
                },
                {
                    skill: this.bless.mahakouga,
                    level: 43
                },
                {
                    skill: this.recovery.diarama,
                    level: 44
                },
                {
                    skill: this.support.mahasukukaja,
                    level: 45
                },
                {
                    skill: this.auto.juon_mukou,
                    level: 46
                },
            ],
            status: {
                ti: 30,
                ma: 26,
                ta: 28,
                so: 25,
                un: 21
            }

        },
        {
            level: 60,
            name: 'メルキセデク',
            arcana: arcana.seigi,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.weak,
                psy: regist.regist,
                nuclear: regist.normal,
                bless: regist.drain,
                curse: regist.none,
            },
            skill: [
                {
                    skill: this.physical.megaton_raid,
                    level: 0
                },
                {
                    skill: this.bless.hamaon,
                    level: 0
                },
                {
                    skill: this.auto.hama_up,
                    level: 61
                },
                {
                    skill: this.support.revolution,
                    level: 62
                },
                {
                    skill: this.bless.mahanmaon,
                    level: 64
                },
                {
                    skill: this.recovery.amurita_drop,
                    level: 65
                },
                {
                    skill: this.physical.god_hand,
                    level: 67
                },
            ],
            status: {
                ti: 37,
                ma: 38,
                ta: 41,
                so: 39,
                un: 32
            }

        },
        {
            level: 68,
            name: 'ドミニオン',
            arcana: arcana.seigi,
            element: {
                physical: regist.normal,
                gun: regist.weak,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.reflect,
                bless: regist.none,
                curse: regist.regist,
            },
            skill: [
                {
                    skill: this.abState.yamiyonosenkou,
                    level: 0
                },
                {
                    skill: this.bless.hamaon,
                    level: 0
                },
                {
                    skill: this.bless.kougaon,
                    level: 0
                },
                {
                    skill: this.bless.mahakougaon,
                    level: 70
                },
                {
                    skill: this.auto.hama_up,
                    level: 71
                },
                {
                    skill: this.bless.mahanmaon,
                    level: 72
                },
                {
                    skill: this.auto.kyoku_juon_mikiri,
                    level: 73
                },
            ],
            status: {
                ti: 43,
                ma: 44,
                ta: 43,
                so: 44,
                un: 37
            }

        },
        {
            level: 71,
            name: 'ソロネ',
            arcana: arcana.seigi,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.drain,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.regist,
                bless: regist.none,
                curse: regist.weak,
            },
            skill: [
                {
                    skill: this.bless.mahanmaon,
                    level: 0
                },
                {
                    skill: this.auto.daikikou,
                    level: 0
                },
                {
                    skill: this.auto.hama_up,
                    level: 0
                },
                {
                    skill: this.bless.mahakougaon,
                    level: 73
                },
                {
                    skill: this.auto.syukuhuku_highbooster,
                    level: 74
                },
                {
                    skill: this.auto.kyoku_juon_mikiri,
                    level: 75
                },
                {
                    skill: this.auto.maharakukaauto,
                    level: 76
                },
            ],
            status: {
                ti: 42,
                ma: 49,
                ta: 47,
                so: 46,
                un: 36
            }

        },
        {
            level: 81,
            name: 'ウリエル',
            arcana: arcana.seigi,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.none,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.drain,
                bless: regist.reflect,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.physical.deth_bound,
                    level: 0
                },
                {
                    skill: this.physical.setuna_samidare_giri,
                    level: 0
                },
                {
                    skill: this.physical.chimaturi,
                    level: 0
                },
                {
                    skill: this.auto.kakunetu_hansya,
                    level: 83
                },
                {
                    skill: this.almight.megidora,
                    level: 84
                },
                {
                    skill: this.auto.daitenshinokago,
                    level: 85
                },
                {
                    skill: this.auto.majutunosoyou,
                    level: 86
                },
            ],
            status: {
                ti: 50,
                ma: 54,
                ta: 49,
                so: 55,
                un: 42
            }

        },
        {
            level: 89,
            name: 'メタトロン',
            arcana: arcana.seigi,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.weak,
                wind: regist.reflect,
                psy: regist.drain,
                nuclear: regist.drain,
                bless: regist.normal,
                curse: regist.weak,
            },
            skill: [
                {
                    skill: this.bless.mahanmaon,
                    level: 0
                },
                {
                    skill: this.physical.turuginomai,
                    level: 0
                },
                {
                    skill: this.bless.mahakougaon,
                    level: 0
                },
                {
                    skill: this.almight.megidoraon,
                    level: 91
                },
                {
                    skill: this.auto.hama_up,
                    level: 92
                },
                {
                    skill: this.support.consentraito,
                    level: 93
                },
                {
                    skill: this.auto.syukuhuku_highbooster,
                    level: 94
                },
                {
                    skill: this.bless.kaminoshinpan,
                    level: 95
                },
            ],
            status: {
                ti: 54,
                ma: 61,
                ta: 60,
                so: 57,
                un: 42
            }

        },
        {
            level: 4,
            name: 'バイコーン',
            arcana: arcana.inja,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.weak,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.regist,
            },
            skill: [
                {
                    skill: this.physical.totugeki,
                    level: 0
                },
                {
                    skill: this.support.tarunda,
                    level: 0
                },
                {
                    skill: this.wind.garu,
                    level: 6
                },
                {
                    skill: this.support.bouhyounokabe,
                    level: 7
                },
                {
                    skill: this.auto.advice,
                    level: 8
                },
            ],
            status: {
                ti: 5,
                ma: 3,
                ta: 3,
                so: 5,
                un: 3
            }

        },
        {
            level: 9,
            name: 'コロボックル',
            arcana: arcana.inja,
            element: {
                physical: regist.normal,
                gun: regist.regist,
                fire: regist.weak,
                ice: regist.regist,
                electric: regist.normal,
                wind: regist.regist,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.abState.makajama,
                    level: 0
                },
                {
                    skill: this.ice.bufu,
                    level: 0
                },
                {
                    skill: this.auto.hyouketu_mikiri,
                    level: 11
                },
                {
                    skill: this.support.rakunda,
                    level: 12
                },
                {
                    skill: this.support.bouennokabe,
                    level: 13
                },
                {
                    skill: this.ice.mahabufu,
                    level: 14
                },
            ],
            status: {
                ti: 5,
                ma: 8,
                ta: 6,
                so: 9,
                un: 6
            }

        },
        {
            level: 13,
            name: 'イッポンタダラ',
            arcana: arcana.inja,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.regist,
                ice: regist.weak,
                electric: regist.normal,
                wind: regist.reflect,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.regist,
                curse: regist.regist,
            },
            skill: [
                {
                    skill: this.physical.sledge_hummer,
                    level: 0
                },
                {
                    skill: this.support.tarukaja,
                    level: 0
                },
                {
                    skill: this.auto.memai_taisei,
                    level: 0
                },
                {
                    skill: this.physical.abaremakuri,
                    level: 15
                },
                {
                    skill: this.auto.couching,
                    level: 17
                },
                {
                    skill: this.auto.counter,
                    level: 18
                },
            ],
            status: {
                ti: 11,
                ma: 7,
                ta: 14,
                so: 6,
                un: 8
            }

        },
        {
            level: 17,
            name: 'スダマ',
            arcana: arcana.inja,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.weak,
                electric: regist.normal,
                wind: regist.reflect,
                psy: regist.normal,
                nuclear: regist.weak,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.wind.mahagaru,
                    level: 0
                },
                {
                    skill: this.physical.lucky_punch,
                    level: 0
                },
                {
                    skill: this.auto.couching,
                    level: 0
                },
                {
                    skill: this.auto.ukanaisora,
                    level: 20
                },
                {
                    skill: this.support.bourannokabe,
                    level: 21
                },
                {
                    skill: this.auto.advice,
                    level: 22
                },
                {
                    skill: this.wind.garura,
                    level: 23
                },
            ],
            status: {
                ti: 9,
                ma: 14,
                ta: 12,
                so: 13,
                un: 10
            }

        },
        {
            level: 24,
            name: 'ナーガ',
            arcana: arcana.inja,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.none,
                wind: regist.weak,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.physical.nirenga,
                    level: 0
                },
                {
                    skill: this.electric.jionga,
                    level: 0
                },
                {
                    skill: this.physical.bousatu_rash,
                    level: 0
                },
                {
                    skill: this.auto.dengeki_booster,
                    level: 26
                },
                {
                    skill: this.abState.metubushi,
                    level: 27
                },
                {
                    skill: this.electric.mahajionga,
                    level: 28
                },
                {
                    skill: this.support.maharakukaja,
                    level: 29
                },
            ],
            status: {
                ti: 15,
                ma: 17,
                ta: 15,
                so: 17,
                un: 15
            }

        },
        {
            level: 35,
            name: 'アラハバキ',
            arcana: arcana.inja,
            element: {
                physical: regist.reflect,
                gun: regist.reflect,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.weak,
                nuclear: regist.weak,
                bless: regist.regist,
                curse: regist.regist,
            },
            skill: [
                {
                    skill: this.support.makarakarn,
                    level: 0
                },
                {
                    skill: this.abState.narakunohadou,
                    level: 0
                },
                {
                    skill: this.auto.sennou_mukou,
                    level: 0
                },
                {
                    skill: this.almight.kyuma,
                    level: 37
                },
                {
                    skill: this.curse.mahaeiga,
                    level: 38
                },
                {
                    skill: this.auto.bougyo,
                    level: 39
                },
            ],
            status: {
                ti: 21,
                ma: 23,
                ta: 22,
                so: 24,
                un: 22
            }

        },
        {
            level: 42,
            name: 'クヴァンダ',
            arcana: arcana.inja,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.none,
                ice: regist.weak,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.regist,
            },
            skill: [
                {
                    skill: this.physical.histery_binta,
                    level: 0
                },
                {
                    skill: this.almight.yodonda_kuuki,
                    level: 0
                },
                {
                    skill: this.abState.sensenhukoku,
                    level: 0
                },
                {
                    skill: this.physical.samidare_giri,
                    level: 43
                },
                {
                    skill: this.support.dekaja,
                    level: 45
                },
                {
                    skill: this.auto.gekido_up,
                    level: 46
                },
                {
                    skill: this.support.revolution,
                    level: 47
                },
            ],
            status: {
                ti: 29,
                ma: 25,
                ta: 27,
                so: 26,
                un: 26
            }

        },
        {
            level: 49,
            name: 'コウモクテン',
            arcana: arcana.inja,
            element: {
                physical: regist.regist,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.weak,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.regist,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.physical.asult_dive,
                    level: 0
                },
                {
                    skill: this.auto.tyutiyusokushin,
                    level: 0
                },
                {
                    skill: this.support.revolution,
                    level: 0
                },
                {
                    skill: this.auto.kougeki,
                    level: 51
                },
                {
                    skill: this.support.mahatarukaja,
                    level: 52
                },
                {
                    skill: this.support.boukakunokabe,
                    level: 53
                },
                {
                    skill: this.auto.hukutunotoushi,
                    level: 54
                },
                {
                    skill: this.physical.shibou_yugi,
                    level: 55
                },
            ],
            status: {
                ti: 37,
                ma: 29,
                ta: 34,
                so: 29,
                un: 25
            }

        },
        {
            level: 56,
            name: 'クラマテング',
            arcana: arcana.inja,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.weak,
                electric: regist.normal,
                wind: regist.reflect,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.regist,
                curse: regist.regist,
            },
            skill: [
                {
                    skill: this.physical.heat_wave,
                    level: 0
                },
                {
                    skill: this.support.mahasukunda,
                    level: 0
                },
                {
                    skill: this.physical.brain_buster,
                    level: 0
                },
                {
                    skill: this.wind.garudain,
                    level: 57
                },
                {
                    skill: this.auto.high_grow,
                    level: 58
                },
                {
                    skill: this.wind.mahagarudain,
                    level: 60
                },
            ],
            status: {
                ti: 34,
                ma: 38,
                ta: 34,
                so: 42,
                un: 27
            }

        },
        {
            level: 75,
            name: 'オンギョウキ',
            arcana: arcana.inja,
            element: {
                physical: regist.regist,
                gun: regist.regist,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.reflect,
                curse: regist.reflect,
            },
            skill: [
                {
                    skill: this.physical.setuna_samidare_giri,
                    level: 0
                },
                {
                    skill: this.abState.makajamaon,
                    level: 0
                },
                {
                    skill: this.auto.haisuinojin,
                    level: 0
                },
                {
                    skill: this.auto.budounokokoroe,
                    level: 77
                },
                {
                    skill: this.auto.daitiyusokushin,
                    level: 78
                },
                {
                    skill: this.auto.nioudati,
                    level: 79
                },
                {
                    skill: this.physical.aguneyastra,
                    level: 81
                },
            ],
            status: {
                ti: 56,
                ma: 42,
                ta: 47,
                so: 48,
                un: 39
            }

        },
        {
            level: 20,
            name: 'スクーンの石',
            arcana: arcana.unmei,
            gousei: false,
            element: {
                physical: regist.none,
                gun: regist.none,
                fire: regist.none,
                ice: regist.none,
                electric: regist.none,
                wind: regist.none,
                psy: regist.none,
                nuclear: regist.none,
                bless: regist.none,
                curse: regist.weak,
            },
            skill: [
                {
                    skill: this.fire.agirao,
                    level: 0
                },
                {
                    skill: this.ice.bufura,
                    level: 0
                },
                {
                    skill: this.wind.garura,
                    level: 0
                },
                {
                    skill: this.electric.jionga,
                    level: 0
                },
                {
                    skill: this.psy.psyo,
                    level: 0
                },
                {
                    skill: this.nuclear.fureira,
                    level: 0
                },
                {
                    skill: this.bless.kouga,
                    level: 0
                },
                {
                    skill: this.curse.eiga,
                    level: 0
                },
            ],
            status: {
                ti: 20,
                ma: 20,
                ta: 20,
                so: 20,
                un: 20
            }

        },
        {
            level: 26,
            name: 'クロト',
            arcana: arcana.unmei,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.weak,
                electric: regist.normal,
                wind: regist.none,
                psy: regist.normal,
                nuclear: regist.weak,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.bless.mahanma,
                    level: 0
                },
                {
                    skill: this.recovery.mepatra,
                    level: 0
                },
                {
                    skill: this.abState.makajama,
                    level: 0
                },
                {
                    skill: this.support.tetraja,
                    level: 27
                },
                {
                    skill: this.abState.makajamaon,
                    level: 29
                },
                {
                    skill: this.recovery.enazy_syawa,
                    level: 30
                },
                {
                    skill: this.auto.syoukikou,
                    level: 32
                },
            ],
            status: {
                ti: 14,
                ma: 19,
                ta: 17,
                so: 20,
                un: 15
            }

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
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.none,
                electric: regist.weak,
                wind: regist.regist,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.recovery.mahabisedy,
                    level: 0
                },
                {
                    skill: this.ice.bufura,
                    level: 0
                },
                {
                    skill: this.auto.middle_grow,
                    level: 0
                },
                {
                    skill: this.support.maharakukaja,
                    level: 35
                },
                {
                    skill: this.support.boudennokabe,
                    level: 36
                },
                {
                    skill: this.ice.mahabufura,
                    level: 38
                },
                {
                    skill: this.auto.hyouketu_booster,
                    level: 40
                },
            ],
            status: {
                ti: 18,
                ma: 25,
                ta: 22,
                so: 25,
                un: 19
            }

        },
        {
            level: 39,
            name: 'アトロポス',
            arcana: arcana.unmei,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.weak,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.none,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.electric.mahajionga,
                    level: 0
                },
                {
                    skill: this.support.bounennokabe,
                    level: 0
                },
                {
                    skill: this.support.dengeki_gardkill,
                    level: 0
                },
                {
                    skill: this.recovery.medirama,
                    level: 41
                },
                {
                    skill: this.auto.dengeki_booster,
                    level: 43
                },
                {
                    skill: this.auto.kaen_mikiri,
                    level: 44
                },
                {
                    skill: this.support.consentraito,
                    level: 45
                },
            ],
            status: {
                ti: 23,
                ma: 30,
                ta: 22,
                so: 27,
                un: 22
            }

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
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.none,
                ice: regist.normal,
                electric: regist.weak,
                wind: regist.none,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.wind.mahagarura,
                    level: 0
                },
                {
                    skill: this.support.mahasukukaja,
                    level: 0
                },
                {
                    skill: this.support.tetraja,
                    level: 0
                },
                {
                    skill: this.wind.garudain,
                    level: 47
                },
                {
                    skill: this.auto.touch_and_go,
                    level: 49
                },
                {
                    skill: this.recovery.amurita_drop,
                    level: 50
                },
                {
                    skill: this.auto.kyoku_dengeki_mikiri,
                    level: 51
                },
            ],
            status: {
                ti: 23,
                ma: 32,
                ta: 29,
                so: 34,
                un: 27
            }

        },
        {
            level: 52,
            name: 'ノルン',
            arcana: arcana.unmei,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.regist,
                electric: regist.normal,
                wind: regist.drain,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.electric.jiodain,
                    level: 0
                },
                {
                    skill: this.wind.garudain,
                    level: 0
                },
                {
                    skill: this.abState.yamiyonosenkou,
                    level: 0
                },
                {
                    skill: this.recovery.diarahan,
                    level: 54
                },
                {
                    skill: this.recovery.amurita_drop,
                    level: 55
                },
                {
                    skill: this.support.tetraja,
                    level: 56
                },
                {
                    skill: this.recovery.samrikamu,
                    level: 57
                },
            ],
            status: {
                ti: 30,
                ma: 38,
                ta: 33,
                so: 34,
                un: 28
            }

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
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.weak,
                ice: regist.regist,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.regist,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.abState.sleep_song,
                    level: 0
                },
                {
                    skill: this.recovery.diarahan,
                    level: 0
                },
                {
                    skill: this.ice.bufudain,
                    level: 0
                },
                {
                    skill: this.recovery.mediarahan,
                    level: 70
                },
                {
                    skill: this.auto.ameniutaeba,
                    level: 71
                },
                {
                    skill: this.recovery.amurita_syawa,
                    level: 72
                },
                {
                    skill: this.auto.syourinoibuki,
                    level: 74
                },
            ],
            status: {
                ti: 40,
                ma: 47,
                ta: 43,
                so: 46,
                un: 38
            }

        },
        {
            level: 6,
            name: 'ケルピー',
            arcana: arcana.gouki,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.regist,
                electric: regist.weak,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.wind.garu,
                    level: 0
                },
                {
                    skill: this.physical.totugeki,
                    level: 0
                },
                {
                    skill: this.auto.sennou_taisei,
                    level: 8
                },
                {
                    skill: this.support.sukukaja,
                    level: 9
                },
                {
                    skill: this.physical.teller_craw,
                    level: 10
                },
            ],
            status: {
                ti: 5,
                ma: 5,
                ta: 5,
                so: 6,
                un: 4
            }

        },
        {
            level: 14,
            name: 'クシミタマ',
            arcana: arcana.gouki,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.weak,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.regist,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.ice.bufu,
                    level: 0
                },
                {
                    skill: this.recovery.media,
                    level: 0
                },
                {
                    skill: this.abState.makajama,
                    level: 0
                },
                {
                    skill: this.auto.syoutiyusokushin,
                    level: 15
                },
                {
                    skill: this.support.bourannokabe,
                    level: 16
                },
                {
                    skill: this.auto.boukyaku_up,
                    level: 18
                },
            ],
            status: {
                ti: 8,
                ma: 12,
                ta: 11,
                so: 9,
                un: 9
            }

        },
        {
            level: 19,
            name: 'オニ',
            arcana: arcana.gouki,
            element: {
                physical: regist.regist,
                gun: regist.regist,
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
                    skill: this.physical.abaremakuri,
                    level: 0
                },
                {
                    skill: this.auto.counter,
                    level: 0
                },
                {
                    skill: this.gun.shidan,
                    level: 0
                },
                {
                    skill: this.physical.daisetudan,
                    level: 21
                },
                {
                    skill: this.auto.couching,
                    level: 22
                },
                {
                    skill: this.physical.bousatu_rash,
                    level: 23
                },
            ],
            status: {
                ti: 17,
                ma: 8,
                ta: 16,
                so: 13,
                un: 10
            }

        },
        {
            level: 24,
            name: 'ラクシャーサ',
            arcana: arcana.gouki,
            element: {
                physical: regist.regist,
                gun: regist.normal,
                fire: regist.regist,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.weak,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.weak,
                curse: regist.regist,
            },
            skill: [
                {
                    skill: this.physical.daisetudan,
                    level: 0
                },
                {
                    skill: this.support.bourannokabe,
                    level: 0
                },
                {
                    skill: this.support.tarukaja,
                    level: 0
                },
                {
                    skill: this.auto.syoutiyusokushin,
                    level: 26
                },
                {
                    skill: this.physical.mind_slice,
                    level: 27
                },
                {
                    skill: this.auto.heavy_counter,
                    level: 28
                },
                {
                    skill: this.auto.gyakkyounokakugo,
                    level: 30
                },
            ],
            status: {
                ti: 20,
                ma: 15,
                ta: 18,
                so: 17,
                un: 9
            }

        },
        {
            level: 30,
            name: 'オルロフ',
            arcana: arcana.gouki,
            gousei: false,
            element: {
                physical: regist.regist,
                gun: regist.none,
                fire: regist.none,
                ice: regist.none,
                electric: regist.normal,
                wind: regist.none,
                psy: regist.none,
                nuclear: regist.none,
                bless: regist.none,
                curse: regist.none,
            },
            skill: [
                {
                    skill: this.fire.maharagion,
                    level: 0
                },
                {
                    skill: this.ice.mahabufura,
                    level: 0
                },
                {
                    skill: this.wind.mahagarura,
                    level: 0
                },
                {
                    skill: this.electric.mahajionga,
                    level: 0
                },
                {
                    skill: this.psy.mahapsyo,
                    level: 0
                },
                {
                    skill: this.nuclear.mahafureira,
                    level: 0
                },
                {
                    skill: this.bless.mahakouga,
                    level: 0
                },
                {
                    skill: this.curse.mahaeiga,
                    level: 0
                },
            ],
            status: {
                ti: 30,
                ma: 30,
                ta: 30,
                so: 30,
                un: 30
            }

        },
        {
            level: 31,
            name: 'ゾウチョウテン',
            arcana: arcana.gouki,
            element: {
                physical: regist.regist,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.weak,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.physical.daisetudan,
                    level: 0
                },
                {
                    skill: this.electric.jionga,
                    level: 0
                },
                {
                    skill: this.physical.teller_craw,
                    level: 32
                },
                {
                    skill: this.auto.couching,
                    level: 33
                },
                {
                    skill: this.auto.kyohu_taisei,
                    level: 34
                },
                {
                    skill: this.physical.denkousekka,
                    level: 35
                },
                {
                    skill: this.auto.kougeki,
                    level: 36
                },
            ],
            status: {
                ti: 22,
                ma: 19,
                ta: 24,
                so: 18,
                un: 17
            }

        },
        {
            level: 44,
            name: 'ヴァルキリー',
            arcana: arcana.gouki,
            element: {
                physical: regist.normal,
                gun: regist.regist,
                fire: regist.normal,
                ice: regist.normal,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.none,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.physical.raise_slash,
                    level: 0
                },
                {
                    skill: this.auto.heavy_counter,
                    level: 0
                },
                {
                    skill: this.auto.kougeki,
                    level: 45
                },
                {
                    skill: this.physical.deth_bound,
                    level: 46
                },
                {
                    skill: this.support.mahatarukaja,
                    level: 47
                },
                {
                    skill: this.auto.buturi_mikiri,
                    level: 49
                },
            ],
            status: {
                ti: 33,
                ma: 24,
                ta: 28,
                so: 29,
                un: 25
            }

        },
        {
            level: 69,
            name: 'ジークフリート',
            arcana: arcana.gouki,
            element: {
                physical: regist.none,
                gun: regist.normal,
                fire: regist.normal,
                ice: regist.regist,
                electric: regist.normal,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.weak,
                bless: regist.normal,
                curse: regist.normal,
            },
            skill: [
                {
                    skill: this.physical.megaton_raid,
                    level: 0
                },
                {
                    skill: this.support.mahasukukaja,
                    level: 0
                },
                {
                    skill: this.auto.highper_counter,
                    level: 0
                },
                {
                    skill: this.support.charge,
                    level: 70
                },
                {
                    skill: this.auto.mahatarukaauto,
                    level: 72
                },
                {
                    skill: this.physical.kukan_sappou,
                    level: 74
                },
            ],
            status: {
                ti: 51,
                ma: 37,
                ta: 47,
                so: 48,
                un: 31
            }

        },
        {
            level: 80,
            name: 'ザオウゴンゲン',
            arcana: arcana.gouki,
            element: {
                physical: regist.normal,
                gun: regist.normal,
                fire: regist.reflect,
                ice: regist.normal,
                electric: regist.weak,
                wind: regist.normal,
                psy: regist.normal,
                nuclear: regist.normal,
                bless: regist.none,
                curse: regist.none,
            },
            skill: [
                {
                    skill: this.fire.maharagidain,
                    level: 0
                },
                {
                    skill: this.abState.narakunohadou,
                    level: 0
                },
                {
                    skill: this.physical.god_hand,
                    level: 0
                },
                {
                    skill: this.auto.kyoku_buturi_mikiri,
                    level: 82
                },
                {
                    skill: this.auto.hukutunotoushi,
                    level: 83
                },
                {
                    skill: this.auto.kyusyouti,
                    level: 84
                },
                {
                    skill: this.fire.daienjo,
                    level: 86
                },
            ],
            status: {
                ti: 57,
                ma: 45,
                ta: 50,
                so: 56,
                un: 39
            }

        },
        {
            level: 9,
            name: 'カハク',
            arcana: arcana.keishisya,
            element: {
                    physical: regist.normal,
                    gun: regist.weak,
                    fire: regist.reflect,
                    ice: regist.weak,
                    electric: regist.normal,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.normal,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.fire.agi,
                        level: 0
                    },
                    {
                        skill: this.abState.dorumina,
                        level: 0
                    },
                    {
                        skill: this.support.tarunda,
                        level: 11
                    },
                    {
                        skill: this.auto.boukyaku_taisei,
                        level: 12
                    },
                    {
                        skill: this.fire.maharagi,
                        level: 13
                    },
                    {
                        skill: this.auto.enjou_up,
                        level: 15
                    },
                ],
                status: {
                    ti: 4,
                    ma: 10,
                    ta: 4,
                    so: 8,
                    un: 8
                }
        
        },
        {
            level: 14,
            name: 'イヌガミ',
            arcana: arcana.keishisya,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.none,
                    ice: regist.normal,
                    electric: regist.normal,
                    wind: regist.weak,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.normal,
                    curse: regist.none,
                },
                skill: [
                    {
                        skill: this.abState.prinpa,
                        level: 0
                    },
                    {
                        skill: this.support.tarukaja,
                        level: 0
                    },
                    {
                        skill: this.physical.daisetudan,
                        level: 0
                    },
                    {
                        skill: this.physical.yumemihari,
                        level: 15
                    },
                    {
                        skill: this.physical.lucky_punch,
                        level: 17
                    },
                    {
                        skill: this.physical.brain_shake,
                        level: 18
                    },
                    {
                        skill: this.auto.konran_up,
                        level: 19
                    },
                ],
                status: {
                    ti: 11,
                    ma: 9,
                    ta: 9,
                    so: 12,
                    un: 8
                }
        
        },
        {
            level: 21,
            name: 'オルトロス',
            arcana: arcana.keishisya,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.drain,
                    ice: regist.weak,
                    electric: regist.normal,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.regist,
                    bless: regist.normal,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.fire.agirao,
                        level: 0
                    },
                    {
                        skill: this.physical.nirenga,
                        level: 0
                    },
                    {
                        skill: this.auto.hyouketu_mikiri,
                        level: 0
                    },
                    {
                        skill: this.auto.enjou_up,
                        level: 22
                    },
                    {
                        skill: this.physical.kyusonokiba,
                        level: 24
                    },
                    {
                        skill: this.support.mahatarukaja,
                        level: 26
                    },
                ],
                status: {
                    ti: 16,
                    ma: 14,
                    ta: 14,
                    so: 19,
                    un: 7
                }
        
        },
        {
            level: 29,
            name: 'タケミナカタ',
            arcana: arcana.keishisya,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.normal,
                    electric: regist.reflect,
                    wind: regist.normal,
                    psy: regist.weak,
                    nuclear: regist.normal,
                    bless: regist.normal,
                    curse: regist.regist,
                },
                skill: [
                    {
                        skill: this.electric.jionga,
                        level: 0
                    },
                    {
                        skill: this.physical.asult_dive,
                        level: 0
                    },
                    {
                        skill: this.support.dengeki_gardkill,
                        level: 0
                    },
                    {
                        skill: this.electric.mahajionga,
                        level: 30
                    },
                    {
                        skill: this.auto.bougyo,
                        level: 32
                    },
                    {
                        skill: this.auto.dengeki_booster,
                        level: 34
                    },
                ],
                status: {
                    ti: 20,
                    ma: 22,
                    ta: 21,
                    so: 18,
                    un: 13
                }
        
        },
        {
            level: 35,
            name: '大帝の護符',
            arcana: arcana.keishisya,
            gousei: false,
            element: {
                    physical: regist.regist,
                    gun: regist.none,
                    fire: regist.normal,
                    ice: regist.drain,
                    electric: regist.drain,
                    wind: regist.drain,
                    psy: regist.drain,
                    nuclear: regist.drain,
                    bless: regist.none,
                    curse: regist.none,
                },
                skill: [
                    {
                        skill: this.fire.agidain,
                        level: 0
                    },
                    {
                        skill: this.ice.bufudain,
                        level: 0
                    },
                    {
                        skill: this.wind.garudain,
                        level: 0
                    },
                    {
                        skill: this.electric.jiodain,
                        level: 0
                    },
                    {
                        skill: this.psy.psydain,
                        level: 0
                    },
                    {
                        skill: this.nuclear.fureidain,
                        level: 0
                    },
                    {
                        skill: this.bless.kougaon,
                        level: 0
                    },
                    {
                        skill: this.curse.eigaon,
                        level: 0
                    },
                ],
                status: {
                    ti: 35,
                    ma: 35,
                    ta: 35,
                    so: 35,
                    un: 35
                }
        
        },
        {
            level: 42,
            name: 'ヘカトンケイル',
            arcana: arcana.keishisya,
            element: {
                    physical: regist.normal,
                    gun: regist.regist,
                    fire: regist.normal,
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
                        skill: this.physical.denkousekka,
                        level: 0
                    },
                    {
                        skill: this.auto.tyutiyusokushin,
                        level: 0
                    },
                    {
                        skill: this.support.tarukaja,
                        level: 0
                    },
                    {
                        skill: this.auto.kuishibari,
                        level: 43
                    },
                    {
                        skill: this.almight.yodonda_toiki,
                        level: 45
                    },
                    {
                        skill: this.auto.high_voltage,
                        level: 46
                    },
                    {
                        skill: this.support.charge,
                        level: 48
                    },
                ],
                status: {
                    ti: 29,
                    ma: 25,
                    ta: 30,
                    so: 25,
                    un: 24
                }
        
        },
        {
            level: 60,
            name: 'モロク',
            arcana: arcana.keishisya,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.reflect,
                    ice: regist.weak,
                    electric: regist.regist,
                    wind: regist.regist,
                    psy: regist.drain,
                    nuclear: regist.normal,
                    bless: regist.normal,
                    curse: regist.none,
                },
                skill: [
                    {
                        skill: this.psy.psydain,
                        level: 0
                    },
                    {
                        skill: this.almight.yodonda_kuuki,
                        level: 0
                    },
                    {
                        skill: this.abState.devil_smile,
                        level: 0
                    },
                    {
                        skill: this.fire.agidain,
                        level: 62
                    },
                    {
                        skill: this.almight.moujanonageki,
                        level: 63
                    },
                    {
                        skill: this.auto.kaen_kyusyu,
                        level: 64
                    },
                    {
                        skill: this.auto.kakunetu_highbooster,
                        level: 65
                    },
                ],
                status: {
                    ti: 32,
                    ma: 45,
                    ta: 42,
                    so: 31,
                    un: 37
                }
        
        },
        {
            level: 68,
            name: 'ヴァスキ',
            arcana: arcana.keishisya,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.none,
                    electric: regist.none,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.normal,
                    curse: regist.weak,
                },
                skill: [
                    {
                        skill: this.bless.mahanmaon,
                        level: 0
                    },
                    {
                        skill: this.abState.brain_jack,
                        level: 0
                    },
                    {
                        skill: this.gun.triple_down,
                        level: 0
                    },
                    {
                        skill: this.auto.kyoku_shippu_mikiri,
                        level: 70
                    },
                    {
                        skill: this.auto.triger_happy,
                        level: 71
                    },
                    {
                        skill: this.auto.sennou_mukou,
                        level: 72
                    },
                    {
                        skill: this.support.makarakarn,
                        level: 73
                    },
                ],
                status: {
                    ti: 41,
                    ma: 46,
                    ta: 45,
                    so: 42,
                    un: 37
                }
        
        },
        {
            level: 82,
            name: 'アティス',
            arcana: arcana.keishisya,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.none,
                    ice: regist.normal,
                    electric: regist.normal,
                    wind: regist.reflect,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.normal,
                    curse: regist.weak,
                },
                skill: [
                    {
                        skill: this.fire.maharagidain,
                        level: 0
                    },
                    {
                        skill: this.recovery.meshiaraizer,
                        level: 0
                    },
                    {
                        skill: this.support.terumopyurai,
                        level: 0
                    },
                    {
                        skill: this.auto.hukutunotoushi,
                        level: 84
                    },
                    {
                        skill: this.recovery.samrikamu,
                        level: 85
                    },
                    {
                        skill: this.auto.juon_kyusyu,
                        level: 86
                    },
                    {
                        skill: this.fire.daienjo,
                        level: 88
                    },
                ],
                status: {
                    ti: 56,
                    ma: 50,
                    ta: 48,
                    so: 51,
                    un: 48
                }
        
        },
        {
            level: 3,
            name: 'マンドレイク',
            arcana: arcana.shinigami,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.weak,
                    ice: regist.normal,
                    electric: regist.regist,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.normal,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.abState.prinpa,
                        level: 0
                    },
                    {
                        skill: this.recovery.enazy_drop,
                        level: 0
                    },
                    {
                        skill: this.physical.totugeki,
                        level: 4
                    },
                    {
                        skill: this.support.sukunda,
                        level: 5
                    },
                    {
                        skill: this.physical.nouten_otoshi,
                        level: 7
                    },
                ],
                status: {
                    ti: 2,
                    ma: 3,
                    ta: 3,
                    so: 4,
                    un: 4
                }
        
        },
        {
            level: 9,
            name: 'モコイ',
            arcana: arcana.shinigami,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.normal,
                    electric: regist.regist,
                    wind: regist.weak,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.normal,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.support.tarukaja,
                        level: 0
                    },
                    {
                        skill: this.abState.metubushi,
                        level: 0
                    },
                    {
                        skill: this.physical.nouten_otoshi,
                        level: 10
                    },
                    {
                        skill: this.abState.marinkarin,
                        level: 11
                    },
                    {
                        skill: this.auto.dengeki_mikiri,
                        level: 13
                    },
                    {
                        skill: this.support.dekunda,
                        level: 14
                    },
                ],
                status: {
                    ti: 9,
                    ma: 5,
                    ta: 6,
                    so: 10,
                    un: 4
                }
        
        
        },
        {
            level: 19,
            name: 'マタドール',
            arcana: arcana.shinigami,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.normal,
                    electric: regist.weak,
                    wind: regist.none,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.normal,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.psy.psy,
                        level: 0
                    },
                    {
                        skill: this.auto.memai_mukou,
                        level: 0
                    },
                    {
                        skill: this.support.sukukaja,
                        level: 0
                    },
                    {
                        skill: this.physical.denkousekka,
                        level: 20
                    },
                    {
                        skill: this.auto.triger_happy,
                        level: 22
                    },
                    {
                        skill: this.wind.garura,
                        level: 23
                    },
                ],
                status: {
                    ti: 12,
                    ma: 13,
                    ta: 12,
                    so: 16,
                    un: 11
                }
        
        },
        {
            level: 29,
            name: 'ピシャーチャ',
            arcana: arcana.shinigami,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.weak,
                    ice: regist.normal,
                    electric: regist.regist,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.weak,
                    curse: regist.none,
                },
                skill: [
                    {
                        skill: this.physical.yumemihari,
                        level: 0
                    },
                    {
                        skill: this.physical.abaremakuri,
                        level: 0
                    },
                    {
                        skill: this.almight.yodonda_kuuki,
                        level: 0
                    },
                    {
                        skill: this.curse.mahamudo,
                        level: 30
                    },
                    {
                        skill: this.abState.narakunohadou,
                        level: 32
                    },
                    {
                        skill: this.auto.zetubou_up,
                        level: 33
                    },
                    {
                        skill: this.curse.mudoon,
                        level: 34
                    },
                ],
                status: {
                    ti: 19,
                    ma: 21,
                    ta: 21,
                    so: 17,
                    un: 16
                }
        },
        {
            level: 39,
            name: 'ヘルズエンジェル',
            arcana: arcana.shinigami,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.reflect,
                    ice: regist.normal,
                    electric: regist.normal,
                    wind: regist.regist,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.weak,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.curse.mudoon,
                        level: 0
                    },
                    {
                        skill: this.fire.agirao,
                        level: 0
                    },
                    {
                        skill: this.auto.subayasa,
                        level: 0
                    },
                    {
                        skill: this.auto.kaen_booster,
                        level: 40
                    },
                    {
                        skill: this.abState.tentarahu,
                        level: 41
                    },
                    {
                        skill: this.fire.maharagion,
                        level: 42
                    },
                    {
                        skill: this.auto.triger_happy,
                        level: 43
                    },
                    {
                        skill: this.curse.mahamudoon,
                        level: 44
                    },
                ],
                status: {
                    ti: 26,
                    ma: 27,
                    ta: 24,
                    so: 30,
                    un: 17
                }
        
        },
        {
            level: 40,
            name: 'ホープダイヤ',
            arcana: arcana.shinigami,
            gousei: false,
            element: {
                    physical: regist.regist,
                    gun: regist.none,
                    fire: regist.reflect,
                    ice: regist.reflect,
                    electric: regist.reflect,
                    wind: regist.normal,
                    psy: regist.reflect,
                    nuclear: regist.reflect,
                    bless: regist.none,
                    curse: regist.none,
                },
                skill: [
                    {
                        skill: this.auto.mahatarukaauto,
                        level: 0
                    },
                    {
                        skill: this.auto.maharakukaauto,
                        level: 0
                    },
                    {
                        skill: this.auto.mahasukukaauto,
                        level: 0
                    },
                    {
                        skill: this.auto.kuishibari,
                        level: 0
                    },
                    {
                        skill: this.auto.tyutiyusokushin,
                        level: 0
                    },
                    {
                        skill: this.auto.tyukikou,
                        level: 0
                    },
                    {
                        skill: this.auto.highper_counter,
                        level: 0
                    },
                    {
                        skill: this.auto.kyusokukaihuku,
                        level: 0
                    },
                ],
                status: {
                    ti: 40,
                    ma: 40,
                    ta: 40,
                    so: 40,
                    un: 40
                }
        
        },
        {
            level: 53,
            name: 'ペイルライダー',
            arcana: arcana.shinigami,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.normal,
                    electric: regist.normal,
                    wind: regist.regist,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.weak,
                    curse: regist.reflect,
                },
                skill: [
                    {
                        skill: this.abState.narakunohadou,
                        level: 0
                    },
                    {
                        skill: this.curse.eigaon,
                        level: 0
                    },
                    {
                        skill: this.physical.brain_shake,
                        level: 0
                    },
                    {
                        skill: this.almight.megidora,
                        level: 54
                    },
                    {
                        skill: this.auto.juon_booster,
                        level: 55
                    },
                    {
                        skill: this.auto.kyoku_syukuhuku_mikiri,
                        level: 57
                    },
                    {
                        skill: this.physical.deth_bound,
                        level: 58
                    },
                ],
                status: {
                    ti: 34,
                    ma: 34,
                    ta: 33,
                    so: 39,
                    un: 26
                }
        
        },
        {
            level: 62,
            name: 'チェルノポグ',
            arcana: arcana.shinigami,
            element: {
                    physical: regist.normal,
                    gun: regist.regist,
                    fire: regist.weak,
                    ice: regist.drain,
                    electric: regist.none,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.weak,
                    curse: regist.reflect,
                },
                skill: [
                    {
                        skill: this.curse.mudoon,
                        level: 0
                    },
                    {
                        skill: this.physical.chimaturi,
                        level: 0
                    },
                    {
                        skill: this.physical.shibou_yugi,
                        level: 0
                    },
                    {
                        skill: this.almight.yodonda_kuuki,
                        level: 63
                    },
                    {
                        skill: this.physical.deth_bound,
                        level: 64
                    },
                    {
                        skill: this.auto.kyohu_up,
                        level: 66
                    },
                    {
                        skill: this.physical.setuna_samidare_giri,
                        level: 67
                    },
                ],
                status: {
                    ti: 40,
                    ma: 37,
                    ta: 39,
                    so: 38,
                    un: 39
                }
        
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
            element: {
                    physical: regist.normal,
                    gun: regist.regist,
                    fire: regist.normal,
                    ice: regist.normal,
                    electric: regist.drain,
                    wind: regist.weak,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.normal,
                    curse: regist.reflect,
                },
                skill: [
                    {
                        skill: this.almight.megidora,
                        level: 0
                    },
                    {
                        skill: this.support.mahatarukaja,
                        level: 0
                    },
                    {
                        skill: this.electric.mahajiodain,
                        level: 0
                    },
                    {
                        skill: this.support.consentraito,
                        level: 74
                    },
                    {
                        skill: this.almight.megidoraon,
                        level: 76
                    },
                    {
                        skill: this.auto.dengeki_hansya,
                        level: 77
                    },
                ],
                status: {
                    ti: 43,
                    ma: 51,
                    ta: 48,
                    so: 42,
                    un: 39
                }
        
        },
        {
            level: 79,
            name: 'アリス',
            arcana: arcana.shinigami,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.normal,
                    electric: regist.normal,
                    wind: regist.normal,
                    psy: regist.regist,
                    nuclear: regist.regist,
                    bless: regist.weak,
                    curse: regist.reflect,
                },
                skill: [
                    {
                        skill: this.curse.mahamudoon,
                        level: 0
                    },
                    {
                        skill: this.auto.mudo_up,
                        level: 0
                    },
                    {
                        skill: this.support.dekunda,
                        level: 0
                    },
                    {
                        skill: this.curse.shindekureru,
                        level: 81
                    },
                    {
                        skill: this.almight.megidoraon,
                        level: 82
                    },
                    {
                        skill: this.support.consentraito,
                        level: 83
                    },
                    {
                        skill: this.auto.seikan_tric,
                        level: 84
                    },
                ],
                status: {
                    ti: 43,
                    ma: 59,
                    ta: 40,
                    so: 57,
                    un: 45
                }
        
        },
        {
            level: 7,
            name: 'ゲンブ',
            arcana: arcana.sessei,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.none,
                    electric: regist.weak,
                    wind: regist.normal,
                    psy: regist.regist,
                    nuclear: regist.normal,
                    bless: regist.normal,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.ice.bufu,
                        level: 0
                    },
                    {
                        skill: this.support.rakunda,
                        level: 0
                    },
                    {
                        skill: this.recovery.patra,
                        level: 8
                    },
                    {
                        skill: this.ice.mahabufu,
                        level: 10
                    },
                    {
                        skill: this.auto.boukyaku_taisei,
                        level: 11
                    },
                    {
                        skill: this.auto.bougyo,
                        level: 12
                    },
                ],
                status: {
                    ti: 5,
                    ma: 6,
                    ta: 7,
                    so: 6,
                    un: 4
                }
        
        },
        {
            level: 11,
            name: 'コッパテング',
            arcana: arcana.sessei,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.weak,
                    electric: regist.normal,
                    wind: regist.regist,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.weak,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.wind.garu,
                        level: 0
                    },
                    {
                        skill: this.gun.shidan,
                        level: 0
                    },
                    {
                        skill: this.auto.low_grow,
                        level: 12
                    },
                    {
                        skill: this.abState.tyouhatu,
                        level: 13
                    },
                    {
                        skill: this.auto.gekido_up,
                        level: 14
                    },
                    {
                        skill: this.abState.sensenhukoku,
                        level: 15
                    },
                ],
                status: {
                    ti: 7,
                    ma: 8,
                    ta: 8,
                    so: 11,
                    un: 6
                }
        
        },
        {
            level: 15,
            name: 'マカミ',
            arcana: arcana.sessei,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.normal,
                    electric: regist.weak,
                    wind: regist.regist,
                    psy: regist.normal,
                    nuclear: regist.regist,
                    bless: regist.none,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.physical.nirenga,
                        level: 0
                    },
                    {
                        skill: this.nuclear.furei,
                        level: 0
                    },
                    {
                        skill: this.recovery.enazy_drop,
                        level: 0
                    },
                    {
                        skill: this.nuclear.mahafurei,
                        level: 17
                    },
                    {
                        skill: this.abState.makajama,
                        level: 18
                    },
                    {
                        skill: this.auto.zetubou_taisei,
                        level: 19
                    },
                    {
                        skill: this.auto.dengeki_mikiri,
                        level: 20
                    },
                ],
                status: {
                    ti: 13,
                    ma: 12,
                    ta: 8,
                    so: 11,
                    un: 8
                }
        
        },
        {
            level: 20,
            name: 'ニギミタマ',
            arcana: arcana.sessei,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.normal,
                    electric: regist.weak,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.regist,
                    curse: regist.regist,
                },
                skill: [
                    {
                        skill: this.recovery.bisedy,
                        level: 0
                    },
                    {
                        skill: this.recovery.media,
                        level: 0
                    },
                    {
                        skill: this.bless.mahakouha,
                        level: 0
                    },
                    {
                        skill: this.auto.kamigaminokago,
                        level: 22
                    },
                    {
                        skill: this.recovery.mepatra,
                        level: 23
                    },
                    {
                        skill: this.auto.ameniutaeba,
                        level: 24
                    },
                ],
                status: {
                    ti: 12,
                    ma: 14,
                    ta: 14,
                    so: 15,
                    un: 12
                }
        
        },
        {
            level: 25,
            name: 'ジコクテン',
            arcana: arcana.sessei,
            element: {
                    physical: regist.regist,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.normal,
                    electric: regist.normal,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.regist,
                    curse: regist.weak,
                },
                skill: [
                    {
                        skill: this.physical.bousatu_rash,
                        level: 0
                    },
                    {
                        skill: this.auto.bougyo,
                        level: 0
                    },
                    {
                        skill: this.support.rakukaja,
                        level: 0
                    },
                    {
                        skill: this.support.dekunda,
                        level: 27
                    },
                    {
                        skill: this.auto.counter,
                        level: 28
                    },
                    {
                        skill: this.support.mahatarukaja,
                        level: 30
                    },
                    {
                        skill: this.auto.gyakkyounokakugo,
                        level: 31
                    },
                ],
                status: {
                    ti: 19,
                    ma: 12,
                    ta: 19,
                    so: 17,
                    un: 15
                }
        
        },
        {
            level: 33,
            name: 'ミトラ',
            arcana: arcana.sessei,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.none,
                    electric: regist.weak,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.none,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.bless.kouga,
                        level: 0
                    },
                    {
                        skill: this.bless.mahanma,
                        level: 0
                    },
                    {
                        skill: this.recovery.diarama,
                        level: 0
                    },
                    {
                        skill: this.bless.mahakouga,
                        level: 34
                    },
                    {
                        skill: this.support.dekunda,
                        level: 35
                    },
                    {
                        skill: this.auto.syukuhuku_booster,
                        level: 36
                    },
                    {
                        skill: this.support.terumopyurai,
                        level: 38
                    },
                ],
                status: {
                    ti: 19,
                    ma: 26,
                    ta: 19,
                    so: 24,
                    un: 18
                }
        
        },
        {
            level: 49,
            name: 'ビャッコ',
            arcana: arcana.sessei,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.weak,
                    ice: regist.drain,
                    electric: regist.normal,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.weak,
                    bless: regist.normal,
                    curse: regist.regist,
                },
                skill: [
                    {
                        skill: this.physical.denkousekka,
                        level: 0
                    },
                    {
                        skill: this.ice.mahabufura,
                        level: 0
                    },
                    {
                        skill: this.auto.heavy_counter,
                        level: 0
                    },
                    {
                        skill: this.auto.hyouketu_booster,
                        level: 51
                    },
                    {
                        skill: this.auto.kyoku_kaen_mikiri,
                        level: 52
                    },
                    {
                        skill: this.auto.gekido_mukou,
                        level: 54
                    },
                    {
                        skill: this.ice.bufudain,
                        level: 55
                    },
                ],
                status: {
                    ti: 32,
                    ma: 32,
                    ta: 31,
                    so: 32,
                    un: 27
                }
        
        },
        {
            level: 55,
            name: 'ナーガラジャ',
            arcana: arcana.sessei,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.normal,
                    electric: regist.none,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.normal,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.electric.jiodain,
                        level: 0
                    },
                    {
                        skill: this.support.dengeki_gardkill,
                        level: 0
                    },
                    {
                        skill: this.abState.tentarahu,
                        level: 0
                    },
                    {
                        skill: this.auto.kanden_up,
                        level: 57
                    },
                    {
                        skill: this.support.makarakarn,
                        level: 58
                    },
                    {
                        skill: this.electric.mahajiodain,
                        level: 59
                    },
                    {
                        skill: this.auto.kyoku_shippu_mikiri,
                        level: 60
                    },
                ],
                status: {
                    ti: 33,
                    ma: 37,
                    ta: 36,
                    so: 35,
                    un: 31
                }
        
        },
        {
            level: 62,
            name: 'セイリュウ',
            arcana: arcana.sessei,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.regist,
                    electric: regist.normal,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.weak,
                    bless: regist.normal,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.ice.bufudain,
                        level: 0
                    },
                    {
                        skill: this.recovery.diarahan,
                        level: 0
                    },
                    {
                        skill: this.support.maharakukaja,
                        level: 0
                    },
                    {
                        skill: this.auto.kakunetu_hansya,
                        level: 63
                    },
                    {
                        skill: this.ice.mahabufudain,
                        level: 65
                    },
                    {
                        skill: this.recovery.amurita_drop,
                        level: 66
                    },
                    {
                        skill: this.support.makarakarn,
                        level: 67
                    },
                ],
                status: {
                    ti: 38,
                    ma: 41,
                    ta: 43,
                    so: 37,
                    un: 34
                }
        
        },
        {
            level: 77,
            name: 'ガブリエル',
            arcana: arcana.sessei,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.normal,
                    electric: regist.normal,
                    wind: regist.normal,
                    psy: regist.none,
                    nuclear: regist.normal,
                    bless: regist.drain,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.electric.mahajiodain,
                        level: 0
                    },
                    {
                        skill: this.ice.mahabufudain,
                        level: 0
                    },
                    {
                        skill: this.bless.kaminoshinpan,
                        level: 78
                    },
                    {
                        skill: this.auto.ari_dance,
                        level: 79
                    },
                    {
                        skill: this.auto.kyoku_juon_mikiri,
                        level: 80
                    },
                    {
                        skill: this.auto.touch_and_go,
                        level: 81
                    },
                    {
                        skill: this.auto.hyouketu_highbooster,
                        level: 82
                    },
                    {
                        skill: this.recovery.meshiaraizer,
                        level: 83
                    },
                ],
                status: {
                    ti: 43,
                    ma: 51,
                    ta: 48,
                    so: 54,
                    un: 42
                }
        
        },
        {
            level: 84,
            name: 'アルダー',
            arcana: arcana.sessei,
            element: {
                    physical: regist.regist,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.none,
                    electric: regist.none,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.normal,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.physical.god_hand,
                        level: 0
                    },
                    {
                        skill: this.nuclear.cozmicfrea,
                        level: 0
                    },
                    {
                        skill: this.auto.daikikou,
                        level: 0
                    },
                    {
                        skill: this.physical.aguneyastra,
                        level: 87
                    },
                    {
                        skill: this.auto.mahasukukaauto,
                        level: 88
                    },
                    {
                        skill: this.auto.high_voltage,
                        level: 89
                    },
                    {
                        skill: this.recovery.meshiaraizer,
                        level: 90
                    },
                ],
                status: {
                    ti: 54,
                    ma: 56,
                    ta: 55,
                    so: 54,
                    un: 40
                }
        
        },
        {
            level: 5,
            name: 'インキュバス',
            arcana: arcana.akuma,
            element: {
                    physical: regist.normal,
                    gun: regist.weak,
                    fire: regist.normal,
                    ice: regist.normal,
                    electric: regist.regist,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.weak,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.almight.kyuketu,
                        level: 0
                    },
                    {
                        skill: this.abState.devil_touch,
                        level: 0
                    },
                    {
                        skill: this.curse.eiga,
                        level: 7
                    },
                    {
                        skill: this.support.tarunda,
                        level: 8
                    },
                    {
                        skill: this.auto.juon_mikiri,
                        level: 9
                    },
                ],
                status: {
                    ti: 4,
                    ma: 6,
                    ta: 4,
                    so: 5,
                    un: 3
                }
        
        },
        {
            level: 10,
            name: 'アンドラス',
            arcana: arcana.akuma,
            element: {
                    physical: regist.normal,
                    gun: regist.weak,
                    fire: regist.weak,
                    ice: regist.regist,
                    electric: regist.normal,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.normal,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.ice.bufu,
                        level: 0
                    },
                    {
                        skill: this.support.rakunda,
                        level: 0
                    },
                    {
                        skill: this.support.tarukaja,
                        level: 11
                    },
                    {
                        skill: this.auto.advice,
                        level: 13
                    },
                    {
                        skill: this.ice.mahabufu,
                        level: 14
                    },
                    {
                        skill: this.support.hyouketu_gardkill,
                        level: 15
                    },
                ],
                status: {
                    ti: 5,
                    ma: 9,
                    ta: 7,
                    so: 10,
                    un: 6
                }
        
        },
        {
            level: 25,
            name: 'フラロウス',
            arcana: arcana.akuma,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.none,
                    ice: regist.weak,
                    electric: regist.normal,
                    wind: regist.regist,
                    psy: regist.normal,
                    nuclear: regist.regist,
                    bless: regist.normal,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.physical.daisetudan,
                        level: 0
                    },
                    {
                        skill: this.physical.dorumin_rash,
                        level: 0
                    },
                    {
                        skill: this.support.dekaja,
                        level: 0
                    },
                    {
                        skill: this.auto.buturi_mikiri,
                        level: 26
                    },
                    {
                        skill: this.auto.advice,
                        level: 28
                    },
                    {
                        skill: this.physical.asult_dive,
                        level: 29
                    },
                    {
                        skill: this.auto.heatup,
                        level: 30
                    },
                ],
                status: {
                    ti: 19,
                    ma: 14,
                    ta: 18,
                    so: 18,
                    un: 13
                }
        
        },
        {
            level: 32,
            name: 'リリム',
            arcana: arcana.akuma,
            element: {
                    physical: regist.normal,
                    gun: regist.weak,
                    fire: regist.normal,
                    ice: regist.regist,
                    electric: regist.normal,
                    wind: regist.weak,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.weak,
                    curse: regist.none,
                },
                skill: [
                    {
                        skill: this.ice.bufura,
                        level: 0
                    },
                    {
                        skill: this.abState.devil_smile,
                        level: 0
                    },
                    {
                        skill: this.support.mahasukunda,
                        level: 0
                    },
                    {
                        skill: this.auto.touketu_up,
                        level: 34
                    },
                    {
                        skill: this.auto.syukuhuku_mikiri,
                        level: 35
                    },
                    {
                        skill: this.almight.kyuma,
                        level: 36
                    },
                    {
                        skill: this.ice.mahabufura,
                        level: 37
                    },
                ],
                status: {
                    ti: 17,
                    ma: 23,
                    ta: 18,
                    so: 25,
                    un: 20
                }
        
        },
        {
            level: 43,
            name: 'パズス',
            arcana: arcana.akuma,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.normal,
                    electric: regist.normal,
                    wind: regist.regist,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.weak,
                    curse: regist.none,
                },
                skill: [
                    {
                        skill: this.curse.mahaeiga,
                        level: 0
                    },
                    {
                        skill: this.abState.tentarahu,
                        level: 0
                    },
                    {
                        skill: this.curse.mudoon,
                        level: 0
                    },
                    {
                        skill: this.auto.ukanaisora,
                        level: 45
                    },
                    {
                        skill: this.abState.devil_smile,
                        level: 46
                    },
                    {
                        skill: this.physical.bad_beat,
                        level: 47
                    },
                    {
                        skill: this.curse.eigaon,
                        level: 48
                    },
                ],
                status: {
                    ti: 29,
                    ma: 30,
                    ta: 27,
                    so: 26,
                    un: 24
                }
        
        },
        {
            level: 58,
            name: 'バフォメット',
            arcana: arcana.akuma,
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
                        skill: this.fire.agidain,
                        level: 0
                    },
                    {
                        skill: this.auto.kyoku_kaen_mikiri,
                        level: 0
                    },
                    {
                        skill: this.auto.enjou_up,
                        level: 0
                    },
                    {
                        skill: this.ice.bufudain,
                        level: 59
                    },
                    {
                        skill: this.electric.jiodain,
                        level: 61
                    },
                    {
                        skill: this.auto.kanden_up,
                        level: 62
                    },
                    {
                        skill: this.auto.touketu_up,
                        level: 63
                    },
                ],
                status: {
                    ti: 34,
                    ma: 42,
                    ta: 36,
                    so: 38,
                    un: 31
                }
        
        },
        {
            level: 62,
            name: 'ネビロス',
            arcana: arcana.akuma,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.normal,
                    electric: regist.normal,
                    wind: regist.normal,
                    psy: regist.regist,
                    nuclear: regist.normal,
                    bless: regist.weak,
                    curse: regist.reflect,
                },
                skill: [
                    {
                        skill: this.abState.marinkarin,
                        level: 0
                    },
                    {
                        skill: this.curse.eigaon,
                        level: 0
                    },
                    {
                        skill: this.curse.mahamudoon,
                        level: 0
                    },
                    {
                        skill: this.curse.mahaeigaon,
                        level: 64
                    },
                    {
                        skill: this.auto.juon_highbooster,
                        level: 65
                    },
                    {
                        skill: this.auto.kyoku_syukuhuku_mikiri,
                        level: 66
                    },
                    {
                        skill: this.almight.megidoraon,
                        level: 68
                    },
                ],
                status: {
                    ti: 39,
                    ma: 40,
                    ta: 42,
                    so: 36,
                    un: 36
                }
        
        },
        {
            level: 68,
            name: 'ベリアル',
            arcana: arcana.akuma,
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
                    curse: regist.none,
                },
                skill: [
                    {
                        skill: this.fire.agidain,
                        level: 0
                    },
                    {
                        skill: this.curse.mahamudoon,
                        level: 0
                    },
                    {
                        skill: this.support.mahatarunda,
                        level: 0
                    },
                    {
                        skill: this.auto.seikan_tric,
                        level: 70
                    },
                    {
                        skill: this.fire.maharagidain,
                        level: 71
                    },
                    {
                        skill: this.auto.heatup,
                        level: 72
                    },
                    {
                        skill: this.physical.setuna_samidare_giri,
                        level: 74
                    },
                ],
                status: {
                    ti: 45,
                    ma: 41,
                    ta: 46,
                    so: 43,
                    un: 36
                }
        
        },
        {
            level: 84,
            name: 'ベルゼブブ',
            arcana: arcana.akuma,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.drain,
                    ice: regist.normal,
                    electric: regist.normal,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.weak,
                    curse: regist.reflect,
                },
                skill: [
                    {
                        skill: this.curse.mahaeigaon,
                        level: 0
                    },
                    {
                        skill: this.curse.mahamudoon,
                        level: 0
                    },
                    {
                        skill: this.abState.devil_smile,
                        level: 0
                    },
                    {
                        skill: this.auto.juon_highbooster,
                        level: 85
                    },
                    {
                        skill: this.support.consentraito,
                        level: 86
                    },
                    {
                        skill: this.curse.akumanoshinpan,
                        level: 87
                    },
                    {
                        skill: this.auto.hyouketu_hansha,
                        level: 88
                    },
                    {
                        skill: this.almight.megidoraon,
                        level: 89
                    },
                ],
                status: {
                    ti: 55,
                    ma: 60,
                    ta: 54,
                    so: 56,
                    un: 34
                }
        
        },
        {
            level: 32,
            name: 'ジュターユ',
            arcana: arcana.tou,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
                    ice: regist.normal,
                    electric: regist.normal,
                    wind: regist.drain,
                    psy: regist.weak,
                    nuclear: regist.normal,
                    bless: regist.normal,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.wind.garura,
                        level: 0
                    },
                    {
                        skill: this.support.mahasukukaja,
                        level: 0
                    },
                    {
                        skill: this.physical.flash_bom,
                        level: 0
                    },
                    {
                        skill: this.auto.nenndou_mikiri,
                        level: 33
                    },
                    {
                        skill: this.auto.seimitu_syageki,
                        level: 35
                    },
                    {
                        skill: this.auto.ameniutaeba,
                        level: 36
                    },
                    {
                        skill: this.auto.subayasa,
                        level: 38
                    },
                ],
                status: {
                    ti: 18,
                    ma: 21,
                    ta: 20,
                    so: 27,
                    un: 17
                }
        
        },
        {
            level: 37,
            name: 'ベルフェゴール',
            arcana: arcana.tou,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.weak,
                    ice: regist.regist,
                    electric: regist.regist,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.regist,
                    bless: regist.normal,
                    curse: regist.reflect,
                },
                skill: [
                    {
                        skill: this.ice.bufura,
                        level: 0
                    },
                    {
                        skill: this.auto.kaen_mikiri,
                        level: 0
                    },
                    {
                        skill: this.auto.gekido_mukou,
                        level: 38
                    },
                    {
                        skill: this.support.hyouketu_gardkill,
                        level: 39
                    },
                    {
                        skill: this.ice.mahabufura,
                        level: 41
                    },
                    {
                        skill: this.support.consentraito,
                        level: 44
                    },
                ],
                status: {
                    ti: 25,
                    ma: 27,
                    ta: 24,
                    so: 23,
                    un: 19
                }
        
        },
        {
            level: 41,
            name: 'レッドライダー',
            arcana: arcana.tou,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.normal,
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
                        skill: this.physical.raise_slash,
                        level: 0
                    },
                    {
                        skill: this.support.nenndou_gardkill,
                        level: 0
                    },
                    {
                        skill: this.psy.mahapsyo,
                        level: 0
                    },
                    {
                        skill: this.physical.negative_pile,
                        level: 42
                    },
                    {
                        skill: this.auto.konran_taisei,
                        level: 44
                    },
                    {
                        skill: this.auto.haisuinojin,
                        level: 45
                    },
                    {
                        skill: this.auto.gekido_up,
                        level: 46
                    },
                ],
                status: {
                    ti: 26,
                    ma: 27,
                    ta: 25,
                    so: 29,
                    un: 23
                }
        
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
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.reflect,
                    ice: regist.normal,
                    electric: regist.normal,
                    wind: regist.none,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.weak,
                    curse: regist.regist,
                },
                skill: [
                    {
                        skill: this.gun.one_shot_kill,
                        level: 0
                    },
                    {
                        skill: this.fire.agidain,
                        level: 0
                    },
                    {
                        skill: this.support.mahasukukaja,
                        level: 0
                    },
                    {
                        skill: this.auto.kyusyouti,
                        level: 53
                    },
                    {
                        skill: this.support.kaen_gardkill,
                        level: 54
                    },
                    {
                        skill: this.auto.seishintaisei,
                        level: 56
                    },
                ],
                status: {
                    ti: 32,
                    ma: 35,
                    ta: 30,
                    so: 35,
                    un: 28
                }
        
        },
        {
            level: 59,
            name: 'ブラックライダー',
            arcana: arcana.tou,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.weak,
                    ice: regist.drain,
                    electric: regist.normal,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.regist,
                    curse: regist.regist,
                },
                skill: [
                    {
                        skill: this.curse.mahamudoon,
                        level: 0
                    },
                    {
                        skill: this.physical.flash_bom,
                        level: 0
                    },
                    {
                        skill: this.curse.mahaeigaon,
                        level: 0
                    },
                    {
                        skill: this.auto.ukanaisora,
                        level: 60
                    },
                    {
                        skill: this.physical.chimaturi,
                        level: 61
                    },
                    {
                        skill: this.almight.moujanonageki,
                        level: 63
                    },
                    {
                        skill: this.almight.megidora,
                        level: 64
                    },
                ],
                status: {
                    ti: 36,
                    ma: 42,
                    ta: 34,
                    so: 42,
                    un: 30
                }
        
        },
        {
            level: 73,
            name: 'マーラ',
            arcana: arcana.tou,
            element: {
                    physical: regist.normal,
                    gun: regist.none,
                    fire: regist.drain,
                    ice: regist.weak,
                    electric: regist.normal,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.regist,
                    curse: regist.reflect,
                },
                skill: [
                    {
                        skill: this.fire.maharagidain,
                        level: 0
                    },
                    {
                        skill: this.gun.one_shot_kill,
                        level: 0
                    },
                    {
                        skill: this.support.tetra_break,
                        level: 0
                    },
                    {
                        skill: this.support.charge,
                        level: 74
                    },
                    {
                        skill: this.curse.mahaeigaon,
                        level: 76
                    },
                    {
                        skill: this.auto.heatup,
                        level: 77
                    },
                    {
                        skill: this.auto.nioudati,
                        level: 78
                    },
                ],
                status: {
                    ti: 47,
                    ma: 46,
                    ta: 49,
                    so: 45,
                    un: 39
                }
        
        },
        {
            level: 79,
            name: 'ヨシツネ',
            arcana: arcana.tou,
            element: {
                    physical: regist.none,
                    gun: regist.normal,
                    fire: regist.regist,
                    ice: regist.normal,
                    electric: regist.reflect,
                    wind: regist.normal,
                    psy: regist.normal,
                    nuclear: regist.normal,
                    bless: regist.reflect,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.physical.blave_zapper,
                        level: 0
                    },
                    {
                        skill: this.support.charge,
                        level: 0
                    },
                    {
                        skill: this.electric.jiodain,
                        level: 0
                    },
                    {
                        skill: this.auto.haisuinojin,
                        level: 81
                    },
                    {
                        skill: this.auto.kyusokukaihuku,
                        level: 82
                    },
                    {
                        skill: this.auto.dengeki_highbooster,
                        level: 84
                    },
                    {
                        skill: this.physical.hassou_tobi,
                        level: 86
                    },
                ],
                status: {
                    ti: 58,
                    ma: 47,
                    ta: 45,
                    so: 53,
                    un: 41
                }
        
        },
        {
            level: 85,
            name: 'マダ',
            arcana: arcana.tou,
            element: {
                    physical: regist.normal,
                    gun: regist.normal,
                    fire: regist.drain,
                    ice: regist.weak,
                    electric: regist.normal,
                    wind: regist.normal,
                    psy: regist.regist,
                    nuclear: regist.none,
                    bless: regist.normal,
                    curse: regist.normal,
                },
                skill: [
                    {
                        skill: this.fire.agidain,
                        level: 0
                    },
                    {
                        skill: this.auto.kaen_highbooster,
                        level: 0
                    },
                    {
                        skill: this.auto.enjou_up,
                        level: 0
                    },
                    {
                        skill: this.auto.hudoushin,
                        level: 86
                    },
                    {
                        skill: this.fire.daienjo,
                        level: 87
                    },
                    {
                        skill: this.recovery.amurita_syawa,
                        level: 88
                    },
                    {
                        skill: this.auto.hukutunotoushi,
                        level: 90
                    },
                    {
                        skill: this.auto.majutunosoyou,
                        level: 91
                    },
                ],
                status: {
                    ti: 51,
                    ma: 52,
                    ta: 58,
                    so: 56,
                    un: 45
                }
        
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
