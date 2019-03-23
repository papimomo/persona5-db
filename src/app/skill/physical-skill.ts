import { Skill, element } from '../persona_enum';

enum physicalSkill {
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



    slash = {
        element: element.physical,
        name: physicalSkill.slash,
        hp: '6%',
        cp: undefined,
        info: '敵１体に物理属性で小ダメージを与える',
        relative: undefined,
    };
    totugeki = {
        element: element.physical,
        name: physicalSkill.totugeki,
        hp: '5%',
        cp: undefined,
        info: '敵１体に物理属性で小ダメージを与える',
        relative: undefined,
    }
    daisetudan = {
        element: element.physical,
        name: physicalSkill.daisetudan,
        hp: '9%',
        cp: undefined,
        info: '	敵１体に物理属性で中ダメージを与える',
        relative: undefined,
    }
    asult_dive = {
        element: element.physical,
        name: physicalSkill.asult_dive,
        hp: '13%',
        cp: undefined,
        info: '敵１体に物理属性で大ダメージを与える',
        relative: undefined,
    }
    megaton_raid = {
        element: element.physical,
        name: physicalSkill.megaton_raid,
        hp: '16%',
        cp: undefined,
        info: '敵１体に物理属性で特大ダメージを与える',
        relative: undefined,
    }
    turuginomai = {
        element: element.physical,
        name: physicalSkill.turuginomai,
        hp: '21%',
        cp: undefined,
        info: '敵１体に物理属性で超特大ダメージを与える',
        relative: undefined,
    }
    blave_zapper = {
        element: element.physical,
        name: physicalSkill.blave_zapper,
        hp: '24%',
        cp: undefined,
        info: '敵１体に物理属性で超特大ダメージを与える',
        relative: undefined,
    }
    god_hand = {
        element: element.physical,
        name: physicalSkill.god_hand,
        hp: '25%',
        cp: undefined,
        info: '敵１体に物理属性で超特大ダメージを与える',
        relative: undefined,
    }
    raise_slash = {
        element: element.physical,
        name: physicalSkill.raise_slash,
        hp: '14%',
        cp: undefined,
        info: '敵１体に物理属性で大ダメージを与える。バトンタッチ時に威力上昇',
        relative: undefined,
    }
    shibou_yugi = {
        element: element.physical,
        name: physicalSkill.shibou_yugi,
        hp: '18%',
        cp: undefined,
        info: '敵１体に物理属性で特大ダメージを与える。バトンタッチ時に威力上昇',
        relative: undefined,
    }
    kyusonokiba = {
        element: element.physical,
        name: physicalSkill.kyusonokiba,
        hp: '10%',
        cp: undefined,
        info: '敵１体に物理属性で中ダメージを与える。包囲された時に威力上昇',
        relative: undefined,
    }
    lucky_punch = {
        element: element.physical,
        name: physicalSkill.lucky_punch,
        hp: '3%',
        cp: undefined,
        info: '敵１体に物理属性でクリティカル率の高い極小ダメージを与える',
        relative: undefined,
    }
    miracle_punch = {
        element: element.physical,
        name: physicalSkill.miracle_punch,
        hp: '8%',
        cp: undefined,
        info: '敵１体に物理属性でクリティカル率の高い中ダメージを与える',
        relative: undefined,
    }
    nirenga = {
        element: element.physical,
        name: physicalSkill.nirenga,
        hp: '10%',
        cp: undefined,
        info: '敵１体に物理属性で小ダメージを２回与える',
        relative: undefined,
    }
    samidare_giri = {
        element: element.physical,
        name: physicalSkill.samidare_giri,
        hp: '17%',
        cp: undefined,
        info: '敵１体に物理属性で極小ダメージを３～５回与える',
        relative: undefined,
    }
    setuna_samidare_giri = {
        element: element.physical,
        name: physicalSkill.setuna_samidare_giri,
        hp: '20%',
        cp: undefined,
        info: '敵１体に物理属性で中ダメージを２～３回与える',
        relative: undefined,
    }
    my_room = {
        element: element.physical,
        name: physicalSkill.my_room,
        hp: '25%',
        cp: undefined,
        info: '敵１体に物理属性で中ダメージを３回与える。命中率が高い',
        relative: undefined,
    }


    kongou_happa = {
        element: element.physical,
        name: physicalSkill.kongou_happa,
        hp: '13%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを与える',
        relative: undefined,
    }
    reppuha = {
        element: element.physical,
        name: physicalSkill.reppuha,
        hp: '18%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを与える',
        relative: undefined,
    }
    heat_wave = {
        element: element.physical,
        name: physicalSkill.heat_wave,
        hp: '20%',
        cp: undefined,
        info: '敵全体に物理属性で大ダメージを与える',
        relative: undefined,
    }
    kukan_sappou = {
        element: element.physical,
        name: physicalSkill.kukan_sappou,
        hp: '23%',
        cp: undefined,
        info: '敵全体に物理属性で特大ダメージを与える',
        relative: undefined,
    }
    gigant_makia = {
        element: element.physical,
        name: physicalSkill.gigant_makia,
        hp: '25%',
        cp: undefined,
        info: '敵全体に物理属性で超特大ダメージを与える',
        relative: undefined,
    }
    abaremakuri = {
        element: element.physical,
        name: physicalSkill.abaremakuri,
        hp: '13%',
        cp: undefined,
        info: '敵全体に物理属性で小ダメージを１～３回与える',
        relative: undefined,
    }
    denkousekka = {
        element: element.physical,
        name: physicalSkill.denkousekka,
        hp: '17%',
        cp: undefined,
        info: '敵全体に物理属性で小ダメージを３～４回与える',
        relative: undefined,
    }
    deth_bound = {
        element: element.physical,
        name: physicalSkill.deth_bound,
        hp: '22%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを１～２回与える',
        relative: undefined,
    }
    aguneyastra = {
        element: element.physical,
        name: physicalSkill.aguneyastra,
        hp: '24%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを１～３回与える',
        relative: undefined,
    }
    hassou_tobi = {
        element: element.physical,
        name: physicalSkill.hassou_tobi,
        hp: '25%',
        cp: undefined,
        info: '敵全体に物理属性で小ダメージを８回与える',
        relative: undefined,
    }

    sledge_hummer = {
        element: element.physical,
        name: physicalSkill.sledge_hummer,
        hp: '10%',
        cp: undefined,
        info: '敵１体に物理属性で中ダメージを与え、中確率で目眩状態にする',
        relative: undefined,
    }
    flash_bom = {
        element: element.physical,
        name: physicalSkill.flash_bom,
        hp: '19%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを与え、低確率で目眩状態にする',
        relative: undefined,
    }
    headbutt = {
        element: element.physical,
        name: physicalSkill.headbutt,
        hp: '9%',
        cp: undefined,
        info: '敵１体に物理属性で中ダメージを与え、中確率で忘却状態にする',
        relative: undefined,
    }
    bousatu_rash = {
        element: element.physical,
        name: physicalSkill.bousatu_rash,
        hp: '15%',
        cp: undefined,
        info: '敵全体に物理属性で小ダメージを与え、低確率で忘却状態にする',
        relative: undefined,
    }
    yumemihari = {
        element: element.physical,
        name: physicalSkill.yumemihari,
        hp: '8%',
        cp: undefined,
        info: '敵１体に物理属性で小ダメージを与え、中確率で睡眠状態にする',
        relative: undefined,
    }
    dorumin_rash = {
        element: element.physical,
        name: physicalSkill.dorumin_rash,
        hp: '16%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを与え、低確率で睡眠状態にする',
        relative: undefined,
    }
    nouten_otoshi = {
        element: element.physical,
        name: physicalSkill.nouten_otoshi,
        hp: '10%',
        cp: undefined,
        info: '敵１体に物理属性で中ダメージを与え、中確率で混乱状態にする',
        relative: undefined,
    }
    mind_slice = {
        element: element.physical,
        name: physicalSkill.mind_slice,
        hp: '19%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを与え、低確率で混乱状態にする',
        relative: undefined,
    }
    teller_craw = {
        element: element.physical,
        name: physicalSkill.teller_craw,
        hp: '8%',
        cp: undefined,
        info: '敵１体に物理属性で小ダメージを与え、中確率で恐怖状態にする',
        relative: undefined,
    }
    chimaturi = {
        element: element.physical,
        name: physicalSkill.chimaturi,
        hp: '22%',
        cp: undefined,
        info: '敵全体に物理属性で大ダメージを与え、低確率で恐怖状態にする',
        relative: undefined,
    }
    negative_pile = {
        element: element.physical,
        name: physicalSkill.negative_pile,
        hp: '12%',
        cp: undefined,
        info: '敵１体に物理属性で大ダメージを与え、中確率で絶望状態にする',
        relative: undefined,
    }
    bad_beat = {
        element: element.physical,
        name: physicalSkill.bad_beat,
        hp: '21%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを与え、低確率で絶望状態にする',
        relative: undefined,
    }
    brain_shake = {
        element: element.physical,
        name: physicalSkill.brain_shake,
        hp: '9%',
        cp: undefined,
        info: '敵１体に物理属性で中ダメージを与え、中確率で洗脳状態にする',
        relative: undefined,
    }
    brain_buster = {
        element: element.physical,
        name: physicalSkill.brain_buster,
        hp: '22%',
        cp: undefined,
        info: '敵全体に物理属性で大ダメージを与え、低確率で洗脳状態にする',
        relative: undefined,
    }
    histery_binta = {
        element: element.physical,
        name: physicalSkill.histery_binta,
        hp: '9%',
        cp: undefined,
        info: '敵１体に物理属性で中ダメージを与え、中確率で激怒状態にする',
        relative: undefined,
    }
    onikagura = {
        element: element.physical,
        name: physicalSkill.onikagura,
        hp: '16%',
        cp: undefined,
        info: '敵全体に物理属性で中ダメージを与え、低確率で激怒状態にする',
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
