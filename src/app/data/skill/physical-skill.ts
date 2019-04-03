import { Skill, element } from '../persona_enum';

export enum physicalSkillName {
    slash = 'スラッシュ',
    totugeki = '突撃',
    daisetudan = '大切断',
    asult_dive = 'アサルトダイブ',
    megaton_raid = 'メガトンレイド',
    turuginomai = '剣の舞',
    blave_zapper = 'ブレイブザッパー',
    god_hand = 'ゴッドハンド',
    raise_slash = 'レイズスラッシュ',
    shibou_yugi = '死亡遊戯',
    kyusonokiba = '窮鼠の牙',
    lucky_punch = 'ラッキーパンチ',
    miracle_punch = 'ミラクルパンチ',
    nirenga = '二連牙',
    samidare_giri = '五月雨斬り',
    setuna_samidare_giri = '刹那五月雨斬り',
    my_room = 'マイルーム',
    // jumonji_giri = '十文字斬り',
    // string_arts_mouju = 'ストリングアーツ猛獣',

    kongou_happa = '金剛発破',
    reppuha = '烈風波',
    heat_wave = 'ヒートウェイブ',
    kukan_sappou = '空間殺法',
    gigant_makia = 'ギガントマキア',
    abaremakuri = '暴れまくり',
    denkousekka = '電光石火',
    deth_bound = 'デスバウンド',
    aguneyastra = 'アグネヤストラ',
    hassou_tobi = '八艘跳び',

    sledge_hummer = 'スレッジハンマー',
    flash_bom = 'フラッシュボム',
    headbutt = 'ヘッドバッド',
    bousatu_rash = '忘殺ラッシュ',
    yumemihari = '夢見針',
    dorumin_rash = 'ドルミンラッシュ',
    nouten_otoshi = '脳天落とし',
    mind_slice = 'マインドスライス',
    teller_craw = 'テラークロウ',
    chimaturi = '血祭り',
    negative_pile = 'ネガティブパイル',
    bad_beat = 'バッドビート',
    brain_shake = 'ブレインシェイク',
    brain_buster = 'ブレインバスター',
    histery_binta = 'ヒステリービンタ',
    onikagura = '鬼神楽'
}
export class PhysicalSkill {



    slash : Skill = {
        element: element.physical,
        name: physicalSkillName.slash,
        hp: '6%',
        cp: undefined,
        info: '敵１体に物理属性で小ダメージを与える',
        info_short: '小（単）',
        relative: undefined,
    };
    totugeki : Skill = {
        element: element.physical,
        name: physicalSkillName.totugeki,
        hp: '5%',
        cp: undefined,
        info: '敵１体に物理属性で小ダメージを与える',
        info_short: '小（単）',
        relative: undefined,
    }
    daisetudan : Skill = {
        element: element.physical,
        name: physicalSkillName.daisetudan,
        hp: '9%',
        cp: undefined,
        info: '	敵１体に物理属性で中ダメージを与える',
        info_short: '中（単）',
        relative: undefined,
    }
    asult_dive : Skill = {
        element: element.physical,
        name: physicalSkillName.asult_dive,
        hp: '13%',
        cp: undefined,
        info: '敵１体に物理属性で大ダメージを与える',
        info_short: '大（単）',
        relative: undefined,
    }
    megaton_raid : Skill = {
        element: element.physical,
        name: physicalSkillName.megaton_raid,
        hp: '16%',
        cp: undefined,
        info: '敵１体に物理属性で特大ダメージを与える',
        info_short: '特大（単）',
        relative: undefined,
    }
    turuginomai : Skill = {
        element: element.physical,
        name: physicalSkillName.turuginomai,
        hp: '21%',
        cp: undefined,
        info: '敵１体に物理属性で超特大ダメージを与える',
        info_short: '超特大（単）',
        relative: undefined,
    }
    blave_zapper : Skill = {
        element: element.physical,
        name: physicalSkillName.blave_zapper,
        hp: '24%',
        cp: undefined,
        info: '敵１体に物理属性で超特大ダメージを与える',
        info_short: '超特大（単）',
        relative: undefined,
    }
    god_hand : Skill = {
        element: element.physical,
        name: physicalSkillName.god_hand,
        hp: '25%',
        cp: undefined,
        info: '敵１体に物理属性で超特大ダメージを与える',
        info_short: '超特大（単）',
        relative: undefined,
    }
    raise_slash : Skill = {
        element: element.physical,
        name: physicalSkillName.raise_slash,
        hp: '14%',
        cp: undefined,
        info: '敵１体に物理属性で大ダメージを与える。バトンタッチ時に威力上昇',
        info_short: '大（単）バトンタッチUP',
        relative: undefined,
    }
    shibou_yugi : Skill = {
        element: element.physical,
        name: physicalSkillName.shibou_yugi,
        hp: '18%',
        cp: undefined,
        info: '敵１体に物理属性で特大ダメージを与える。バトンタッチ時に威力上昇',
        info_short: '特大（単）バトンタッチUP',
        relative: undefined,
    }
    kyusonokiba : Skill = {
        element: element.physical,
        name: physicalSkillName.kyusonokiba,
        hp: '10%',
        cp: undefined,
        info: '敵１体に物理属性で中ダメージを与える。包囲された時に威力上昇',
        info_short: '中（単）包囲UP',
        relative: undefined,
    }
    lucky_punch : Skill = {
        element: element.physical,
        name: physicalSkillName.lucky_punch,
        hp: '3%',
        cp: undefined,
        info: '敵１体に物理属性でクリティカル率の高い極小ダメージを与える',
        info_short: '極小（単）高クリティカル',
        relative: undefined,
    }
    miracle_punch : Skill = {
        element: element.physical,
        name: physicalSkillName.miracle_punch,
        hp: '8%',
        cp: undefined,
        info: '敵１体に物理属性でクリティカル率の高い中ダメージを与える',
        info_short: '中（単）高クリティカル',
        relative: undefined,
    }
    nirenga : Skill = {
        element: element.physical,
        name: physicalSkillName.nirenga,
        hp: '10%',
        cp: undefined,
        info: '敵１体に物理属性で小ダメージを２回与える',
        info_short: '小×2（単）',
        relative: undefined,
    }
    samidare_giri : Skill = {
        element: element.physical,
        name: physicalSkillName.samidare_giri,
        hp: '17%',
        cp: undefined,
        info: '敵１体に物理属性で極小ダメージを３～５回与える',
        info_short: '極小×3〜5（単）',
        relative: undefined,
    }
    setuna_samidare_giri : Skill = {
        element: element.physical,
        name: physicalSkillName.setuna_samidare_giri,
        hp: '20%',
        cp: undefined,
        info: '敵１体に物理属性で中ダメージを２～３回与える',
        info_short: '中×2〜3（単）',
        relative: undefined,
    }
    my_room : Skill = {
        element: element.physical,
        name: physicalSkillName.my_room,
        hp: '25%',
        cp: undefined,
        info: '敵１体に物理属性で中ダメージを３回与える。命中率が高い',
        info_short: '中×3（単）高命中',
        relative: undefined,
    }


    kongou_happa : Skill = {
        element: element.physical,
        name: physicalSkillName.kongou_happa,
        hp: '13%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを与える',
        info_short: '中（全）',
        relative: undefined,
    }
    reppuha : Skill = {
        element: element.physical,
        name: physicalSkillName.reppuha,
        hp: '18%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを与える',
        info_short: '中（全）',
        relative: undefined,
    }
    heat_wave : Skill = {
        element: element.physical,
        name: physicalSkillName.heat_wave,
        hp: '20%',
        cp: undefined,
        info: '敵全体に物理属性で大ダメージを与える',
        info_short: '大（全）',
        relative: undefined,
    }
    kukan_sappou : Skill = {
        element: element.physical,
        name: physicalSkillName.kukan_sappou,
        hp: '23%',
        cp: undefined,
        info: '敵全体に物理属性で特大ダメージを与える',
        info_short: '特大（全）',
        relative: undefined,
    }
    gigant_makia : Skill = {
        element: element.physical,
        name: physicalSkillName.gigant_makia,
        hp: '25%',
        cp: undefined,
        info: '敵全体に物理属性で超特大ダメージを与える',
        info_short: '超特大（全）',
        relative: undefined,
    }
    abaremakuri : Skill = {
        element: element.physical,
        name: physicalSkillName.abaremakuri,
        hp: '13%',
        cp: undefined,
        info: '敵全体に物理属性で小ダメージを１～３回与える',
        info_short: '小×1〜3（全）',
        relative: undefined,
    }
    denkousekka : Skill = {
        element: element.physical,
        name: physicalSkillName.denkousekka,
        hp: '17%',
        cp: undefined,
        info: '敵全体に物理属性で小ダメージを３～４回与える',
        info_short: '小×3〜4（全）',
        relative: undefined,
    }
    deth_bound : Skill = {
        element: element.physical,
        name: physicalSkillName.deth_bound,
        hp: '22%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを１～２回与える',
        info_short: '中×1〜2（全）',
        relative: undefined,
    }
    aguneyastra : Skill = {
        element: element.physical,
        name: physicalSkillName.aguneyastra,
        hp: '24%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを１～３回与える',
        info_short: '小×1〜3（全）',
        relative: undefined,
    }
    hassou_tobi : Skill = {
        element: element.physical,
        name: physicalSkillName.hassou_tobi,
        hp: '25%',
        cp: undefined,
        info: '敵全体に物理属性で小ダメージを８回与える',
        info_short: '小×8（全）',
        relative: undefined,
    }

    sledge_hummer : Skill = {
        element: element.physical,
        name: physicalSkillName.sledge_hummer,
        hp: '10%',
        cp: undefined,
        info: '敵１体に物理属性で中ダメージを与え、中確率で目眩状態にする',
        info_short: '中（単）中盲目',
        relative: undefined,
    }
    flash_bom : Skill = {
        element: element.physical,
        name: physicalSkillName.flash_bom,
        hp: '19%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを与え、低確率で目眩状態にする',
        info_short: '中（全）低盲目',
        relative: undefined,
    }
    headbutt : Skill = {
        element: element.physical,
        name: physicalSkillName.headbutt,
        hp: '9%',
        cp: undefined,
        info: '敵１体に物理属性で中ダメージを与え、中確率で忘却状態にする',
        info_short: '中（単）中忘却',
        relative: undefined,
    }
    bousatu_rash : Skill = {
        element: element.physical,
        name: physicalSkillName.bousatu_rash,
        hp: '15%',
        cp: undefined,
        info: '敵全体に物理属性で小ダメージを与え、低確率で忘却状態にする',
        info_short: '小（全）低忘却',
        relative: undefined,
    }
    yumemihari : Skill = {
        element: element.physical,
        name: physicalSkillName.yumemihari,
        hp: '8%',
        cp: undefined,
        info: '敵１体に物理属性で小ダメージを与え、中確率で睡眠状態にする',
        info_short: '小（単）中睡眠',
        relative: undefined,
    }
    dorumin_rash : Skill = {
        element: element.physical,
        name: physicalSkillName.dorumin_rash,
        hp: '16%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを与え、低確率で睡眠状態にする',
        info_short: '中（全）低睡眠',
        relative: undefined,
    }
    nouten_otoshi : Skill = {
        element: element.physical,
        name: physicalSkillName.nouten_otoshi,
        hp: '10%',
        cp: undefined,
        info: '敵１体に物理属性で中ダメージを与え、中確率で混乱状態にする',
        info_short: '中（単）中混乱',
        relative: undefined,
    }
    mind_slice : Skill = {
        element: element.physical,
        name: physicalSkillName.mind_slice,
        hp: '19%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを与え、低確率で混乱状態にする',
        info_short: '中（全）低混乱',
        relative: undefined,
    }
    teller_craw : Skill = {
        element: element.physical,
        name: physicalSkillName.teller_craw,
        hp: '8%',
        cp: undefined,
        info: '敵１体に物理属性で小ダメージを与え、中確率で恐怖状態にする',
        info_short: '小（単）低恐怖',
        relative: undefined,
    }
    chimaturi : Skill = {
        element: element.physical,
        name: physicalSkillName.chimaturi,
        hp: '22%',
        cp: undefined,
        info: '敵全体に物理属性で大ダメージを与え、低確率で恐怖状態にする',
        info_short: '大（全）低恐怖',
        relative: undefined,
    }
    negative_pile : Skill = {
        element: element.physical,
        name: physicalSkillName.negative_pile,
        hp: '12%',
        cp: undefined,
        info: '敵１体に物理属性で大ダメージを与え、中確率で絶望状態にする',
        info_short: '大（単）中絶望',
        relative: undefined,
    }
    bad_beat : Skill = {
        element: element.physical,
        name: physicalSkillName.bad_beat,
        hp: '21%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを与え、低確率で絶望状態にする',
        info_short: '中（全）低絶望',
        relative: undefined,
    }
    brain_shake : Skill = {
        element: element.physical,
        name: physicalSkillName.brain_shake,
        hp: '9%',
        cp: undefined,
        info: '敵１体に物理属性で中ダメージを与え、中確率で洗脳状態にする',
        info_short: '中（単）中洗脳',
        relative: undefined,
    }
    brain_buster : Skill = {
        element: element.physical,
        name: physicalSkillName.brain_buster,
        hp: '22%',
        cp: undefined,
        info: '敵全体に物理属性で大ダメージを与え、低確率で洗脳状態にする',
        info_short: '大（全）低洗脳',
        relative: undefined,
    }
    histery_binta : Skill = {
        element: element.physical,
        name: physicalSkillName.histery_binta,
        hp: '9%',
        cp: undefined,
        info: '敵１体に物理属性で中ダメージを与え、中確率で激怒状態にする',
        info_short: '中（単）中激怒',
        relative: undefined,
    }
    onikagura : Skill = {
        element: element.physical,
        name: physicalSkillName.onikagura,
        hp: '16%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを与え、低確率で激怒状態にする',
        info_short: '中（全）低激怒',
        relative: undefined,
    }

    skillPhysicalList: Array<Skill> = [
        this.slash,
        this.totugeki,
        this.daisetudan ,
        this.asult_dive ,
        this.megaton_raid ,
        this.turuginomai ,
        this.blave_zapper,
        this.god_hand ,
        this.raise_slash ,
        this.shibou_yugi ,
        this.kyusonokiba ,
        this.lucky_punch ,
        this.miracle_punch,
        this.nirenga,
        this.samidare_giri,
        this.setuna_samidare_giri,
        this.my_room,

        this.kongou_happa,
        this.reppuha ,
        this.heat_wave ,
        this.kukan_sappou,
        this.gigant_makia ,
        this.abaremakuri ,
        this.denkousekka,
        this.deth_bound,
        this.aguneyastra ,
        this.hassou_tobi,

        this.sledge_hummer,
        this.flash_bom ,
        this.headbutt ,
        this.bousatu_rash ,
        this.yumemihari,
        this.dorumin_rash ,
        this.nouten_otoshi ,
        this.mind_slice ,
        this.teller_craw ,
        this.chimaturi ,
        this.negative_pile ,
        this.bad_beat ,
        this.brain_shake ,
        this.brain_buster ,
        this.histery_binta ,
        this.onikagura
    ];

}
