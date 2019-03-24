import { Skill, element } from '../persona_enum';

enum autoSkill {
    seimitu_syageki = '精密射撃',
    kyusyouti = '急所撃ち',
    kaen_booster = '火炎ブースター',
    kaen_highbooster = '火炎ハイブースター',
    hyouketu_booster = '氷結ブースター',
    hyouketu_highbooster = '氷結ハイブースター',
    dengeki_booster = '電撃ブースター',
    dengeki_highbooster = '電撃ハイブースター',
    shippu_booster = '疾風ブースター',
    shippu_highbooster = '疾風ハイブースター',
    nenndou_booster = '念動ブースター',
    nenndou_highbooster = '念動ハイブースター',
    kakunetu_booster = '核熱ブースター',
    kakunetu_highbooster = '核熱ハイブースター',
    syukuhuku_booster = '祝福ブースター',
    syukuhuku_highbooster = '祝福ハイブースター',
    juon_booster = '呪怨ブースター',
    juon_highbooster = '呪怨ハイブースター',
    banno_booster = '万能ブースター',
    banno_highbooster = '万能ハイブースター',
    madounosainou = '魔道の才能',

    kamigaminokago = '神々の加護',
    hama_up = 'ハマ成功率UP',
    mudo_up = 'ムド成功率UP',
    enjou_up = '炎上率UP',
    touketu_up = '凍結率UP',
    kanden_up = '感電率UP',
    memai_up = '目眩率UP',
    boukyaku_up = '忘却率UP',
    suimin_up = '睡眠率UP',
    konran_up = '混乱率UP',
    kyohu_up = '恐怖率UP',
    zetubou_up = '絶望率UP',
    gekido_up = '激怒率UP',
    sennou_up = '洗脳率UP',
    ab_state_up = '状態異常率UP',

    kougeki = '攻撃の心得',
    bougyo = '防御の心得',
    subayasa = '素早さの心得',
    mahatarukaauto = 'マハタルカオート',
    maharakukaauto = 'マハラクカオート',
    mahasukukaauto = 'マハスクカオート',
    heatup = 'ヒートアップ',
    high_voltage = 'ハイボルテージ',
    gyakkyounokakugo = '逆境の覚悟',
    haisuinojin = '背水の陣',
    ameniutaeba = '雨に唄えば',
    ukanaisora = '浮かない空',

    syoutiyusokushin = '小治癒促進',
    tyutiyusokushin = '中治癒促進',
    daitiyusokushin = '大治癒促進',
    syoukikou = '小気功',
    tyukikou = '中気功',
    daikikou = '大気功',
    budounokokoroe = '武道の心得',
    majutunosoyou = '魔術の素養',
    counter = 'カウンタ',
    heavy_counter = 'ヘビーカウンタ',
    highper_counter = 'ハイパーカウンタ',

    couching = 'コーチング',
    advice = 'アドバイス',
    triger_happy = 'トリガーハッピー',
    touch_and_go = 'タッチアンドゴー',
    soul_chain = 'ソウルチェイン',
    nioudati = '仁王立ち',
    kyusokukaihuku = '急速回復',
    syunkankaihuku = '瞬間回復',
    kuishibari = '食い縛り',
    hukutunotoushi = '不屈の闘志',
    seikan_tric = '生還トリック',
    syourinoibuki = '勝利の息吹き',
    syourinootakebi = '勝利の雄叫び',
    low_grow = 'ロウグロウ',
    middle_grow = 'ミドルグロウ',
    high_grow = 'ハイグロウ',

    buturi_mikiri = '物理見切り',
    kyoku_buturi_mikiri = '極・物理見切り',
    buturi_taisei = '物理耐性',
    buturi_mukou = '物理無効',
    buturi_hansya = '物理反射',
    buturi_kyusyu = '物理吸収',
    kaen_mikiri = '火炎見切り',
    kyoku_kaen_mikiri = '極・火炎見切り',
    kaen_taisei = '火炎耐性',
    kaen_mukou = '火炎無効',
    kaen_hansha = '火炎反射',
    kaen_kyusyu = '火炎吸収',
    hyouketu_mikiri = '氷結見切り',
    kyoku_hyouketu_mikiri = '極・氷結見切り',
    hyouketu_taisei = '氷結耐性',
    hyouketu_mukou = '氷結無効',
    hyouketu_hansha = '氷結反射',
    hyouketu_kyusyu = '氷結吸収',
    dengeki_mikiri = '電撃見切り',
    kyoku_dengeki_mikiri = '極・電撃見切り',
    dengeki_taisei = '電撃耐性',
    dengeki_mukou = '電撃無効',
    dengeki_hansya = '電撃反射',
    // dengeki_kyusyu = '電撃吸収',
    sippu_mikiri = '疾風見切り',
    kyoku_sippu_mikiri = '極・疾風見切り',
    sippu_taisei = '疾風耐性',
    sippu_mukou = '疾風無効',
    // sippu_hansya = '疾風反射',
    sippu_kyusyu = '疾風吸収',
    nenndou_mikiri = '念動見切り',
    kyoku_nenndou_mikiri = '極・念動見切り',
    nenndou_taisei = '念動耐性',
    nenndou_mukou = '念動無効',
    // nenndou_hansya = '念動反射',
    nenndou_kyusyu = '念動吸収',
    kakunetu_mikiri = '核熱見切り',
    kyoku_kakunetu_mikiri = '極・核熱見切り',
    kakunetu_taisei = '核熱耐性',
    kakunetu_mukou = '核熱無効',
    kakunetu_hansya = '核熱反射',
    kakunetu_kyusyu = '核熱吸収',
    syukuhuku_mikiri = '祝福見切り',
    kyoku_syukuhuku_mikiri = '極・祝福見切り',
    syukuhuku_taisei = '祝福耐性',
    syukuhuku_mukou = '祝福無効',
    // syukuhuku_hansya = '祝福反射',
    syukuhuku_kyusyu = '祝福吸収',
    juon_mikiri = '呪怨見切り',
    kyoku_juon_mikiri = '極・呪怨見切り',
    juon_taisei = '呪怨耐性',
    juon_mukou = '呪怨無効',
    juon_hansya = '呪怨反射',
    juon_kyusyu = '呪怨吸収',
    ari_dance = 'アリ・ダンス',
    daitenshinokago = '大天使の加護',

    memai_taisei = '目眩耐性',
    memai_mukou = '目眩無効',
    boukyaku_taisei = '忘却耐性',
    boukyaku_mukou = '忘却無効',
    konran_taisei = '混乱耐性',
    konran_mukou = '混乱無効',
    suimin_taisei = '睡眠耐性',
    suimin_mukou = '睡眠無効',
    kyohu_taisei = '恐怖耐性',
    kyohu_mukou = '恐怖無効',
    zetubou_taisei = '絶望耐性',
    zetubou_mukou = '絶望無効',
    gekido_taisei = '激怒耐性',
    gekido_mukou = '激怒無効',
    sennou_taisei = '洗脳耐性',
    sennou_mukou = '洗脳無効',
    hudoushin = '不動心',
    seishintaisei = '精神耐性',


}


export class AutoSkill {
    seimitu_syageki = {
        element: element.auto,
        name: autoSkill.seimitu_syageki,
        hp: undefined,
        cp: undefined,
        info: '銃撃属性の攻撃力が自動的に２５％上昇する',
        relative: undefined,
    };
    kyusyouti = {
        element: element.auto,
        name: autoSkill.kyusyouti,
        hp: undefined,
        cp: undefined,
        info: '銃撃属性の攻撃力が自動的に５０％上昇する。精密射撃の効果に累積する',
        relative: undefined,
    };
    kaen_booster = {
        element: element.auto,
        name: autoSkill.kaen_booster,
        hp: undefined,
        cp: undefined,
        info: '火炎属性の攻撃力が自動的に２５％上昇する',
        relative: undefined,
    };
    kaen_highbooster = {
        element: element.auto,
        name: autoSkill.kaen_highbooster,
        hp: undefined,
        cp: undefined,
        info: '火炎属性の攻撃力が自動的に５０％上昇する。ブースタの効果に累積する',
        relative: undefined,
    };
    hyouketu_booster = {
        element: element.auto,
        name: autoSkill.hyouketu_booster,
        hp: undefined,
        cp: undefined,
        info: '氷結属性の攻撃力が自動的に２５％上昇する',
        relative: undefined,
    };
    hyouketu_highbooster = {
        element: element.auto,
        name: autoSkill.hyouketu_highbooster,
        hp: undefined,
        cp: undefined,
        info: '氷結属性の攻撃力が自動的に５０％上昇する。ブースタの効果に累積する',
        relative: undefined,
    };
    dengeki_booster = {
        element: element.auto,
        name: autoSkill.dengeki_booster,
        hp: undefined,
        cp: undefined,
        info: '電撃属性の攻撃力が自動的に２５％上昇する',
        relative: undefined,
    };
    dengeki_highbooster = {
        element: element.auto,
        name: autoSkill.dengeki_highbooster,
        hp: undefined,
        cp: undefined,
        info: '電撃属性の攻撃力が自動的に５０％上昇する。ブースタの効果に累積する',
        relative: undefined,
    };
    shippu_booster = {
        element: element.auto,
        name: autoSkill.shippu_booster,
        hp: undefined,
        cp: undefined,
        info: '疾風属性の攻撃力が自動的に２５％上昇する',
        relative: undefined,
    };
    shippu_highbooster = {
        element: element.auto,
        name: autoSkill.shippu_highbooster,
        hp: undefined,
        cp: undefined,
        info: '疾風属性の攻撃力が自動的に５０％上昇する。ブースタの効果に累積する',
        relative: undefined,
    };
    nenndou_booster = {
        element: element.auto,
        name: autoSkill.nenndou_booster,
        hp: undefined,
        cp: undefined,
        info: '念動属性の攻撃力が自動的に２５％上昇する',
        relative: undefined,
    };
    nenndou_highbooster = {
        element: element.auto,
        name: autoSkill.nenndou_highbooster,
        hp: undefined,
        cp: undefined,
        info: '念動ハイブースタ	念動属性の攻撃力が自動的に５０％上昇する。ブースタの効果に累積する',
        relative: undefined,
    };
    kakunetu_booster = {
        element: element.auto,
        name: autoSkill.kakunetu_booster,
        hp: undefined,
        cp: undefined,
        info: '核熱属性の攻撃力が自動的に２５％上昇する',
        relative: undefined,
    };
    kakunetu_highbooster = {
        element: element.auto,
        name: autoSkill.kakunetu_highbooster,
        hp: undefined,
        cp: undefined,
        info: '核熱属性の攻撃力が自動的に５０％上昇する。ブースタの効果に累積する',
        relative: undefined,
    };
    syukuhuku_booster = {
        element: element.auto,
        name: autoSkill.syukuhuku_booster,
        hp: undefined,
        cp: undefined,
        info: '祝福属性の攻撃力が自動的に２５％上昇する',
        relative: undefined,
    };
    syukuhuku_highbooster = {
        element: element.auto,
        name: autoSkill.syukuhuku_booster,
        hp: undefined,
        cp: undefined,
        info: '祝福属性の攻撃力が自動的に５０％上昇する。ブースタの効果に累積する',
        relative: undefined,
    };
    juon_booster = {
        element: element.auto,
        name: autoSkill.juon_booster,
        hp: undefined,
        cp: undefined,
        info: '呪怨属性の攻撃力が自動的に２５％上昇する',
        relative: undefined,
    };
    juon_highbooster = {
        element: element.auto,
        name: autoSkill.juon_highbooster,
        hp: undefined,
        cp: undefined,
        info: '呪怨属性の攻撃力が自動的に５０％上昇する。ブースタの効果に累積する',
        relative: undefined,
    };
    banno_booster = {
        element: element.auto,
        name: autoSkill.banno_booster,
        hp: undefined,
        cp: undefined,
        info: '万能属性の攻撃力が自動的に２５％上昇する',
        relative: undefined,
    };
    banno_highbooster = {
        element: element.auto,
        name: autoSkill.banno_highbooster,
        hp: undefined,
        cp: undefined,
        info: '万能属性の攻撃力が自動的に２５％上昇する',
        relative: undefined,
    };
    madounosainou = {
        element: element.auto,
        name: autoSkill.madounosainou,
        hp: undefined,
        cp: undefined,
        info: '全属性の魔法攻撃力が自動的に２５％上昇する',
        relative: undefined,
    };

    kamigaminokago = {
        element: element.auto,
        name: autoSkill.kamigaminokago,
        hp: undefined,
        cp: undefined,
        info: '使用する回復魔法の効果が自動的に１．５倍になる',
        relative: undefined,
    };
    hama_up = {
        element: element.auto,
        name: autoSkill.hama_up,
        hp: undefined,
        cp: undefined,
        info: 'ハマ系スキルの成功率が自動的に上昇する',
        relative: undefined,
    };
    mudo_up = {
        element: element.auto,
        name: autoSkill.mudo_up,
        hp: undefined,
        cp: undefined,
        info: 'ムド系スキルの成功率が自動的に上昇する',
        relative: undefined,
    };
    enjou_up = {
        element: element.auto,
        name: autoSkill.enjou_up,
        hp: undefined,
        cp: undefined,
        info: '炎上の付着率が自動的に上昇する',
        relative: undefined,
    };
    touketu_up = {
        element: element.auto,
        name: autoSkill.touketu_up,
        hp: undefined,
        cp: undefined,
        info: '凍結の付着率が自動的に上昇する',
        relative: undefined,
    };
    kanden_up = {
        element: element.auto,
        name: autoSkill.kanden_up,
        hp: undefined,
        cp: undefined,
        info: '感電の付着率が自動的に上昇する',
        relative: undefined,
    };
    memai_up = {
        element: element.auto,
        name: autoSkill.memai_up,
        hp: undefined,
        cp: undefined,
        info: '目眩付着の成功率が自動的に上昇する',
        relative: undefined,
    };
    boukyaku_up = {
        element: element.auto,
        name: autoSkill.boukyaku_up,
        hp: undefined,
        cp: undefined,
        info: '忘却付着の成功率が自動的に上昇する',
        relative: undefined,
    };
    suimin_up = {
        element: element.auto,
        name: autoSkill.suimin_up,
        hp: undefined,
        cp: undefined,
        info: '睡眠付着の成功率が自動的に上昇する',
        relative: undefined,
    };
    konran_up = {
        element: element.auto,
        name: autoSkill.konran_up,
        hp: undefined,
        cp: undefined,
        info: '混乱付着の成功率が自動的に上昇する',
        relative: undefined,
    };
    kyohu_up = {
        element: element.auto,
        name: autoSkill.kyohu_up,
        hp: undefined,
        cp: undefined,
        info: '恐怖付着の成功率が自動的に上昇する',
        relative: undefined,
    };
    zetubou_up = {
        element: element.auto,
        name: autoSkill.zetubou_up,
        hp: undefined,
        cp: undefined,
        info: '絶望付着の成功率が自動的に上昇する',
        relative: undefined,
    };
    gekido_up = {
        element: element.auto,
        name: autoSkill.gekido_up,
        hp: undefined,
        cp: undefined,
        info: '激怒付着の成功率が自動的に上昇する',
        relative: undefined,
    };
    sennou_up = {
        element: element.auto,
        name: autoSkill.sennou_up,
        hp: undefined,
        cp: undefined,
        info: '洗脳付着の成功率が自動的に上昇する',
        relative: undefined,
    };
    ab_state_up = {
        element: element.auto,
        name: autoSkill.ab_state_up,
        hp: undefined,
        cp: undefined,
        info: '状態異常付着の成功率が自動的に上昇する',
        relative: undefined,
    };

    kougeki = {
        element: element.auto,
        name: autoSkill.kougeki,
        hp: undefined,
        cp: undefined,
        info: '戦闘開始時に自動でタルカジャが発動する',
        relative: undefined,
    };
    bougyo = {
        element: element.auto,
        name: autoSkill.bougyo,
        hp: undefined,
        cp: undefined,
        info: '戦闘開始時に自動でラクカジャが発動する',
        relative: undefined,
    };
    subayasa = {
        element: element.auto,
        name: autoSkill.subayasa,
        hp: undefined,
        cp: undefined,
        info: '戦闘開始時に自動でスクカジャが発動する',
        relative: undefined,
    };
    mahatarukaauto = {
        element: element.auto,
        name: autoSkill.mahatarukaauto,
        hp: undefined,
        cp: undefined,
        info: '戦闘開始時に自動でマハタルカジャが発動する',
        relative: undefined,
    };
    maharakukaauto = {
        element: element.auto,
        name: autoSkill.maharakukaauto,
        hp: undefined,
        cp: undefined,
        info: '戦闘開始時に自動でマハラクカジャが発動する',
        relative: undefined,
    };
    mahasukukaauto = {
        element: element.auto,
        name: autoSkill.mahasukukaauto,
        hp: undefined,
        cp: undefined,
        info: '戦闘開始時に自動でマハスクカジャが発動する',
        relative: undefined,
    };
    heatup = {
        element: element.auto,
        name: autoSkill.heatup,
        hp: undefined,
        cp: undefined,
        info: 'チャンスエンカウント時、行動順になった際、HPが５％・SPが１０回復する',
        relative: undefined,
    };
    high_voltage = {
        element: element.auto,
        name: autoSkill.high_voltage,
        hp: undefined,
        cp: undefined,
        info: 'チャンスエンカウント時に、クリティカル攻撃を与える確率が自動的に上昇する',
        relative: undefined,
    };
    gyakkyounokakugo = {
        element: element.auto,
        name: autoSkill.gyakkyounokakugo,
        hp: undefined,
        cp: undefined,
        info: '包囲された時にクリティカル攻撃を与える確率が自動的に上昇する',
        relative: undefined,
    };
    haisuinojin = {
        element: element.auto,
        name: autoSkill.haisuinojin,
        hp: undefined,
        cp: undefined,
        info: '包囲された時に万能属性を除き、受ける攻撃の命中率が１／３になる',
        relative: undefined,
    };
    ameniutaeba = {
        element: element.auto,
        name: autoSkill.ameniutaeba,
        hp: undefined,
        cp: undefined,
        info: '雨や注意報が出ている時、全相性の回避率が自動的に２倍になる',
        relative: undefined,
    };
    ukanaisora = {
        element: element.auto,
        name: autoSkill.ukanaisora,
        hp: undefined,
        cp: undefined,
        info: '雨や注意報が出ている時、状態異常攻撃の付着率が自動的に大幅に上昇する',
        relative: undefined,
    };

    syoutiyusokushin = {
        element: element.auto,
        name: autoSkill.syoutiyusokushin,
        hp: undefined,
        cp: undefined,
        info: '戦闘中、行動順になった際、HPの２％を自動的に回復する',
        relative: undefined,
    };
    tyutiyusokushin = {
        element: element.auto,
        name: autoSkill.tyutiyusokushin,
        hp: undefined,
        cp: undefined,
        info: '戦闘中、行動順になった際、HPの４％を自動的に回復する',
        relative: undefined,
    };
    daitiyusokushin = {
        element: element.auto,
        name: autoSkill.daitiyusokushin,
        hp: undefined,
        cp: undefined,
        info: '戦闘中、行動順になった際、HPの６％を自動的に回復する',
        relative: undefined,
    };
    syoukikou = {
        element: element.auto,
        name: autoSkill.syoukikou,
        hp: undefined,
        cp: undefined,
        info: '戦闘中、行動順になった際、自動的にSPが３回復する',
        relative: undefined,
    };
    tyukikou = {
        element: element.auto,
        name: autoSkill.tyukikou,
        hp: undefined,
        cp: undefined,
        info: '戦闘中、行動順になった際、自動的にSPが５回復する',
        relative: undefined,
    };
    daikikou = {
        element: element.auto,
        name: autoSkill.daikikou,
        hp: undefined,
        cp: undefined,
        info: '戦闘中、行動順になった際、自動的にSPが７回復する',
        relative: undefined,
    };
    budounokokoroe = {
        element: element.auto,
        name: autoSkill.budounokokoroe,
        hp: undefined,
        cp: undefined,
        info: '自動的にスキル使用時のHP消費量が半分になる',
        relative: undefined,
    };
    majutunosoyou = {
        element: element.auto,
        name: autoSkill.majutunosoyou,
        hp: undefined,
        cp: undefined,
        info: '自動的にスキル使用時のSP消費量が半分になる',
        relative: undefined,
    };
    counter = {
        element: element.auto,
        name: autoSkill.counter,
        hp: undefined,
        cp: undefined,
        info: '物理攻撃を１０％の確率で自動的に反射する',
        relative: undefined,
    };
    heavy_counter = {
        element: element.auto,
        name: autoSkill.heavy_counter,
        hp: undefined,
        cp: undefined,
        info: '物理攻撃を１５％の確率で自動的に反射する。他カウンタと効果累積なし',
        relative: undefined,
    };
    highper_counter = {
        element: element.auto,
        name: autoSkill.highper_counter,
        hp: undefined,
        cp: undefined,
        info: '物理攻撃を２０％の確率で自動的に反射する。他カウンタと効果累積なし',
        relative: undefined,
    };

    couching = {
        element: element.auto,
        name: autoSkill.couching,
        hp: undefined,
        cp: undefined,
        info: 'クリティカル攻撃を受ける確率が自動的に低下する',
        relative: undefined,
    };
    advice = {
        element: element.auto,
        name: autoSkill.advice,
        hp: undefined,
        cp: undefined,
        info: 'クリティカル攻撃を与える確率が自動的に上昇する',
        relative: undefined,
    };
    triger_happy = {
        element: element.auto,
        name: autoSkill.triger_happy,
        hp: undefined,
        cp: undefined,
        info: 'クリティカル攻撃を与える確率が自動的に上昇する',
        relative: undefined,
    };
    touch_and_go = {
        element: element.auto,
        name: autoSkill.touch_and_go,
        hp: undefined,
        cp: undefined,
        info: 'バトンタッチで行動を得た際に、スクカジャが発動する',
        relative: undefined,
    };
    soul_chain = {
        element: element.auto,
        name: autoSkill.soul_chain,
        hp: undefined,
        cp: undefined,
        info: 'バトンタッチで行動を得た際に、SPが２０回復する',
        relative: undefined,
    };
    nioudati = {
        element: element.auto,
        name: autoSkill.nioudati,
        hp: undefined,
        cp: undefined,
        info: '自動的に敵からの攻撃を必ず受けるがダメージは半分になる',
        relative: undefined,
    };
    kyusokukaihuku = {
        element: element.auto,
        name: autoSkill.kyusokukaihuku,
        hp: undefined,
        cp: undefined,
        info: '自動的に状態異常回復の必要ターンが半減する',
        relative: undefined,
    };
    syunkankaihuku = {
        element: element.auto,
        name: autoSkill.syunkankaihuku,
        hp: undefined,
        cp: undefined,
        info: '自動的に状態異常回復の必要ターンが１ターンになる',
        relative: undefined,
    };
    kuishibari = {
        element: element.auto,
        name: autoSkill.kuishibari,
        hp: undefined,
        cp: undefined,
        info: 'HPが０になった際、自動的に１度だけHP１で復帰する',
        relative: undefined,
    };
    hukutunotoushi = {
        element: element.auto,
        name: autoSkill.hukutunotoushi,
        hp: undefined,
        cp: undefined,
        info: 'HPが０になった際、自動的に１度だけHP全快で復帰する',
        relative: undefined,
    };
    seikan_tric = {
        element: element.auto,
        name: autoSkill.seikan_tric,
        hp: undefined,
        cp: undefined,
        info: '即死効果攻撃を受けた際に自動的に必ずＨＰ１で生き残る',
        relative: undefined,
    };
    syourinoibuki = {
        element: element.auto,
        name: autoSkill.syourinoibuki,
        hp: undefined,
        cp: undefined,
        info: '戦闘勝利後に自身のＨＰ・ＳＰが８％回復する',
        relative: undefined,
    };
    syourinootakebi = {
        element: element.auto,
        name: autoSkill.syourinootakebi,
        hp: undefined,
        cp: undefined,
        info: '戦闘勝利後に自身のＨＰ・ＳＰが全回復する',
        relative: undefined,
    };
    low_grow = {
        element: element.auto,
        name: autoSkill.low_grow,
        hp: undefined,
        cp: undefined,
        info: '戦闘に参加していなくても経験値を１／４入手する',
        relative: undefined,
    };
    middle_grow = {
        element: element.auto,
        name: autoSkill.middle_grow,
        hp: undefined,
        cp: undefined,
        info: '戦闘に参加していなくても、経験値を１／２入手する',
        relative: undefined,
    };
    high_grow = {
        element: element.auto,
        name: autoSkill.high_grow,
        hp: undefined,
        cp: undefined,
        info: '戦闘に参加していなくても同じ経験値を入手する',
        relative: undefined,
    };

    buturi_mikiri = {
        element: element.auto,
        name: autoSkill.buturi_mikiri,
        hp: undefined,
        cp: undefined,
        info: '物理属性の攻撃に対する回避率が２倍になる',
        relative: undefined,
    };
    kyoku_buturi_mikiri = {
        element: element.auto,
        name: autoSkill.kyoku_buturi_mikiri,
        hp: undefined,
        cp: undefined,
        info: '物理属性の攻撃に対する回避率が３倍になる。見切りとの効果累積なし',
        relative: undefined,
    };
    buturi_taisei = {
        element: element.auto,
        name: autoSkill.buturi_taisei,
        hp: undefined,
        cp: undefined,
        info: '物理属性の攻撃に強くなる。弱点だった場合は弱点を消す',
        relative: undefined,
    };
    buturi_mukou = {
        element: element.auto,
        name: autoSkill.buturi_mukou,
        hp: undefined,
        cp: undefined,
        info: '物理属性の攻撃を無効にする',
        relative: undefined,
    };
    buturi_hansya = {
        element: element.auto,
        name: autoSkill.buturi_hansya,
        hp: undefined,
        cp: undefined,
        info: '物理属性の攻撃を反射する',
        relative: undefined,
    };
    buturi_kyusyu = {
        element: element.auto,
        name: autoSkill.buturi_kyusyu,
        hp: undefined,
        cp: undefined,
        info: '物理属性の攻撃を吸収する',
        relative: undefined,
    };
    kaen_mikiri = {
        element: element.auto,
        name: autoSkill.kaen_mikiri,
        hp: undefined,
        cp: undefined,
        info: '火炎属性の攻撃に対する回避率が２倍になる',
        relative: undefined,
    };
    kyoku_kaen_mikiri = {
        element: element.auto,
        name: autoSkill.kyoku_kaen_mikiri,
        hp: undefined,
        cp: undefined,
        info: '火炎属性の攻撃に対する回避率が３倍になる。見切りとの効果累積なし',
        relative: undefined,
    };
    kaen_taisei = {
        element: element.auto,
        name: autoSkill.kaen_taisei,
        hp: undefined,
        cp: undefined,
        info: '火炎属性の攻撃に強くなる。弱点だった場合は弱点を消す',
        relative: undefined,
    };
    kaen_mukou = {
        element: element.auto,
        name: autoSkill.kaen_mukou,
        hp: undefined,
        cp: undefined,
        info: '火炎属性の攻撃を無効にする',
        relative: undefined,
    };
    kaen_hansha = {
        element: element.auto,
        name: autoSkill.kaen_hansha,
        hp: undefined,
        cp: undefined,
        info: '火炎属性の攻撃を反射する',
        relative: undefined,
    };
    kaen_kyusyu ={
        element: element.auto,
        name: autoSkill.kaen_kyusyu,
        hp: undefined,
        cp: undefined,
        info: '火炎属性の攻撃を吸収する',
        relative: undefined,
    };
    hyouketu_mikiri = {
        element: element.auto,
        name: autoSkill.hyouketu_mikiri,
        hp: undefined,
        cp: undefined,
        info: '氷結属性の攻撃に対する回避率が２倍になる',
        relative: undefined,
    };
    kyoku_hyouketu_mikiri = {
        element: element.auto,
        name: autoSkill.kyoku_hyouketu_mikiri,
        hp: undefined,
        cp: undefined,
        info: '氷結属性の攻撃に対する回避率が３倍になる。見切りとの効果累積なし',
        relative: undefined,
    };
    hyouketu_taisei = {
        element: element.auto,
        name: autoSkill.hyouketu_taisei,
        hp: undefined,
        cp: undefined,
        info: '氷結属性の攻撃に強くなる。弱点だった場合は弱点を消す',
        relative: undefined,
    };
    hyouketu_mukou ={
        element: element.auto,
        name: autoSkill.hyouketu_mukou,
        hp: undefined,
        cp: undefined,
        info: '氷結属性の攻撃を無効にする',
        relative: undefined,
    };
    hyouketu_hansha = {
        element: element.auto,
        name: autoSkill.hyouketu_hansha,
        hp: undefined,
        cp: undefined,
        info: '氷結属性の攻撃を反射する',
        relative: undefined,
    };
    hyouketu_kyusyu = {
        element: element.auto,
        name: autoSkill.hyouketu_kyusyu,
        hp: undefined,
        cp: undefined,
        info: '氷結属性の攻撃を吸収する',
        relative: undefined,
    };
    dengeki_mikiri = {
        element: element.auto,
        name: autoSkill.dengeki_mikiri,
        hp: undefined,
        cp: undefined,
        info: '電撃属性の攻撃に対する回避率が２倍になる',
        relative: undefined,
    };
    kyoku_dengeki_mikiri = {
        element: element.auto,
        name: autoSkill.kyoku_dengeki_mikiri,
        hp: undefined,
        cp: undefined,
        info: '電撃属性の攻撃に対する回避率が３倍になる。見切りとの効果累積なし',
        relative: undefined,
    };
    dengeki_taisei = {
        element: element.auto,
        name: autoSkill.dengeki_taisei,
        hp: undefined,
        cp: undefined,
        info: '電撃属性の攻撃に強くなる。弱点だった場合は弱点を消す',
        relative: undefined,
    };
    dengeki_mukou = {
        element: element.auto,
        name: autoSkill.dengeki_mukou,
        hp: undefined,
        cp: undefined,
        info: '電撃属性の攻撃を無効にする',
        relative: undefined,
    };
    dengeki_hansya = {
        element: element.auto,
        name: autoSkill.dengeki_hansya,
        hp: undefined,
        cp: undefined,
        info: '電撃属性の攻撃を反射する',
        relative: undefined,
    };
    // dengeki_kyusyu ={
    //     element: element.auto,
    //     name: autoSkill.high_grow,
    //     hp: undefined,
    //     cp: undefined,
    //     info: '戦闘に参加していなくても同じ経験値を入手する',
    //     relative: undefined,
    // };
    sippu_mikiri = {
        element: element.auto,
        name: autoSkill.sippu_mikiri,
        hp: undefined,
        cp: undefined,
        info: '疾風属性の攻撃を無効にする',
        relative: undefined,
    };
    kyoku_sippu_mikiri = {
        element: element.auto,
        name: autoSkill.kyoku_sippu_mikiri,
        hp: undefined,
        cp: undefined,
        info: '戦闘に参加していなくても同じ経験値を入手する',
        relative: undefined,
    };
    sippu_taisei = {
        element: element.auto,
        name: autoSkill.sippu_taisei,
        hp: undefined,
        cp: undefined,
        info: '疾風属性の攻撃に強くなる。弱点だった場合は弱点を消す',
        relative: undefined,
    };
    sippu_mukou = {
        element: element.auto,
        name: autoSkill.sippu_mukou,
        hp: undefined,
        cp: undefined,
        info: '疾風属性の攻撃を無効にする',
        relative: undefined,
    };
    // sippu_hansya = {
    //     element: element.auto,
    //     name: autoSkill.high_grow,
    //     hp: undefined,
    //     cp: undefined,
    //     info: '戦闘に参加していなくても同じ経験値を入手する',
    //     relative: undefined,
    // };
    sippu_kyusyu = {
        element: element.auto,
        name: autoSkill.sippu_kyusyu,
        hp: undefined,
        cp: undefined,
        info: '疾風属性の攻撃を吸収する',
        relative: undefined,
    };
    nenndou_mikiri = {
        element: element.auto,
        name: autoSkill.nenndou_mikiri,
        hp: undefined,
        cp: undefined,
        info: '念動属性の攻撃に対する回避率が２倍になる',
        relative: undefined,
    };
    kyoku_nenndou_mikiri = {
        element: element.auto,
        name: autoSkill.kyoku_nenndou_mikiri,
        hp: undefined,
        cp: undefined,
        info: '念動属性の攻撃に対する回避率が３倍になる。見切りとの効果累積なし',
        relative: undefined,
    };
    nenndou_taisei = {
        element: element.auto,
        name: autoSkill.nenndou_taisei,
        hp: undefined,
        cp: undefined,
        info: '念動属性の攻撃に強くなる。弱点だった場合は弱点を消す',
        relative: undefined,
    };
    nenndou_mukou = {
        element: element.auto,
        name: autoSkill.nenndou_mukou,
        hp: undefined,
        cp: undefined,
        info: '戦闘に参加していなくても同じ経験値を入手する',
        relative: undefined,
    };
    // nenndou_hansya = {
    //     element: element.auto,
    //     name: autoSkill.high_grow,
    //     hp: undefined,
    //     cp: undefined,
    //     info: '戦闘に参加していなくても同じ経験値を入手する',
    //     relative: undefined,
    // };
    nenndou_kyusyu = {
        element: element.auto,
        name: autoSkill.nenndou_kyusyu,
        hp: undefined,
        cp: undefined,
        info: '念動属性の攻撃を吸収する',
        relative: undefined,
    };
    kakunetu_mikiri = {
        element: element.auto,
        name: autoSkill.kakunetu_mikiri,
        hp: undefined,
        cp: undefined,
        info: '核熱属性の攻撃に対する回避率が２倍になる',
        relative: undefined,
    };
    kyoku_kakunetu_mikiri = {
        element: element.auto,
        name: autoSkill.kyoku_kakunetu_mikiri,
        hp: undefined,
        cp: undefined,
        info: '核熱属性の攻撃に対する回避率が３倍になる。見切りとの効果累積なし',
        relative: undefined,
    };
    kakunetu_taisei = {
        element: element.auto,
        name: autoSkill.kakunetu_taisei,
        hp: undefined,
        cp: undefined,
        info: '核熱属性の攻撃に強くなる。弱点だった場合は弱点を消す',
        relative: undefined,
    };
    kakunetu_mukou = {
        element: element.auto,
        name: autoSkill.kakunetu_mukou,
        hp: undefined,
        cp: undefined,
        info: '核熱属性の攻撃を無効にする',
        relative: undefined,
    };
    kakunetu_hansya = {
        element: element.auto,
        name: autoSkill.kakunetu_hansya,
        hp: undefined,
        cp: undefined,
        info: '核熱属性の攻撃を反射する',
        relative: undefined,
    };
    kakunetu_kyusyu = {
        element: element.auto,
        name: autoSkill.kakunetu_kyusyu,
        hp: undefined,
        cp: undefined,
        info: '核熱属性の攻撃を吸収する',
        relative: undefined,
    };
    syukuhuku_mikiri ={
        element: element.auto,
        name: autoSkill.syukuhuku_mikiri,
        hp: undefined,
        cp: undefined,
        info: '即死を除く祝福属性の攻撃に対する回避率が２倍になる',
        relative: undefined,
    };
    kyoku_syukuhuku_mikiri = {
        element: element.auto,
        name: autoSkill.kyoku_syukuhuku_mikiri,
        hp: undefined,
        cp: undefined,
        info: '即死を除く祝福属性に対する回避率が３倍になる。見切りとの効果累積なし',
        relative: undefined,
    };
    syukuhuku_taisei = {
        element: element.auto,
        name: autoSkill.syukuhuku_taisei,
        hp: undefined,
        cp: undefined,
        info: '祝福属性の攻撃に強くなる。弱点だった場合は弱点を消す',
        relative: undefined,
    };
    syukuhuku_mukou = {
        element: element.auto,
        name: autoSkill.syukuhuku_mukou,
        hp: undefined,
        cp: undefined,
        info: '祝福属性の攻撃を無効にする',
        relative: undefined,
    };
    // syukuhuku_hansya = {
    //     element: element.auto,
    //     name: autoSkill.high_grow,
    //     hp: undefined,
    //     cp: undefined,
    //     info: '戦闘に参加していなくても同じ経験値を入手する',
    //     relative: undefined,
    // };
    syukuhuku_kyusyu = {
        element: element.auto,
        name: autoSkill.syukuhuku_kyusyu,
        hp: undefined,
        cp: undefined,
        info: '祝福属性の攻撃を吸収する',
        relative: undefined,
    };
    juon_mikiri = {
        element: element.auto,
        name: autoSkill.juon_mikiri,
        hp: undefined,
        cp: undefined,
        info: '即死を除く呪怨属性の攻撃に対する回避率が２倍になる',
        relative: undefined,
    };
    kyoku_juon_mikiri = {
        element: element.auto,
        name: autoSkill.kyoku_juon_mikiri,
        hp: undefined,
        cp: undefined,
        info: '即死を除く祝福属性に対する回避率が３倍になる。見切りとの効果累積なし',
        relative: undefined,
    };
    juon_taisei = {
        element: element.auto,
        name: autoSkill.juon_taisei,
        hp: undefined,
        cp: undefined,
        info: '呪怨属性の攻撃に強くなる。弱点だった場合は弱点を消す',
        relative: undefined,
    };
    juon_mukou = {
        element: element.auto,
        name: autoSkill.juon_mukou,
        hp: undefined,
        cp: undefined,
        info: '呪怨属性の攻撃を無効にする',
        relative: undefined,
    };
    juon_hansya = {
        element: element.auto,
        name: autoSkill.juon_hansya,
        hp: undefined,
        cp: undefined,
        info: '呪怨属性の攻撃を反射する',
        relative: undefined,
    };
    juon_kyusyu = {
        element: element.auto,
        name: autoSkill.juon_kyusyu,
        hp: undefined,
        cp: undefined,
        info: '呪怨属性の攻撃を吸収する',
        relative: undefined,
    };
    ari_dance = {
        element: element.auto,
        name: autoSkill.ari_dance,
        hp: undefined,
        cp: undefined,
        info: '攻撃してくる敵の命中率が自動的に半分になる',
        relative: undefined,
    };
    daitenshinokago = {
        element: element.auto,
        name: autoSkill.daitenshinokago,
        hp: undefined,
        cp: undefined,
        info: '火炎・氷結・疾風・電撃・祝福・呪怨・核熱・念動の回避率が自動で２倍になる',
        relative: undefined,
    };

    memai_taisei = {
        element: element.auto,
        name: autoSkill.memai_taisei,
        hp: undefined,
        cp: undefined,
        info: '目眩にかかりにくくなる',
        relative: undefined,
    };
    memai_mukou = {
        element: element.auto,
        name: autoSkill.memai_mukou,
        hp: undefined,
        cp: undefined,
        info: '目眩にかからなくなる',
        relative: undefined,
    };
    boukyaku_taisei = {
        element: element.auto,
        name: autoSkill.boukyaku_taisei,
        hp: undefined,
        cp: undefined,
        info: '忘却にかかりにくくなる',
        relative: undefined,
    };
    boukyaku_mukou = {
        element: element.auto,
        name: autoSkill.boukyaku_mukou,
        hp: undefined,
        cp: undefined,
        info: '忘却にかからなくなる',
        relative: undefined,
    };
    konran_taisei = {
        element: element.auto,
        name: autoSkill.konran_taisei,
        hp: undefined,
        cp: undefined,
        info: '混乱にかかりにくくなる',
        relative: undefined,
    };
    konran_mukou = {
        element: element.auto,
        name: autoSkill.konran_mukou,
        hp: undefined,
        cp: undefined,
        info: '混乱にかからなくなる',
        relative: undefined,
    };
    suimin_taisei = {
        element: element.auto,
        name: autoSkill.suimin_taisei,
        hp: undefined,
        cp: undefined,
        info: '睡眠にかかりにくくなる',
        relative: undefined,
    };
    suimin_mukou = {
        element: element.auto,
        name: autoSkill.suimin_mukou,
        hp: undefined,
        cp: undefined,
        info: '睡眠にかからなくなる',
        relative: undefined,
    };
    kyohu_taisei = {
        element: element.auto,
        name: autoSkill.kyohu_taisei,
        hp: undefined,
        cp: undefined,
        info: '恐怖にかかりにくくなる',
        relative: undefined,
    };
    kyohu_mukou = {
        element: element.auto,
        name: autoSkill.kyohu_mukou,
        hp: undefined,
        cp: undefined,
        info: '恐怖にかからなくなる',
        relative: undefined,
    };
    zetubou_taisei = {
        element: element.auto,
        name: autoSkill.zetubou_taisei,
        hp: undefined,
        cp: undefined,
        info: '絶望にかかりにくくなる',
        relative: undefined,
    };
    zetubou_mukou = {
        element: element.auto,
        name: autoSkill.zetubou_mukou,
        hp: undefined,
        cp: undefined,
        info: '絶望にかからなくなる',
        relative: undefined,
    };
    gekido_taisei = {
        element: element.auto,
        name: autoSkill.gekido_taisei,
        hp: undefined,
        cp: undefined,
        info: '激怒にかかりにくくなる',
        relative: undefined,
    };
    gekido_mukou = {
        element: element.auto,
        name: autoSkill.gekido_mukou,
        hp: undefined,
        cp: undefined,
        info: '激怒にかからなくなる',
        relative: undefined,
    };
    sennou_taisei = {
        element: element.auto,
        name: autoSkill.sennou_taisei,
        hp: undefined,
        cp: undefined,
        info: '洗脳にかかりにくくなる',
        relative: undefined,
    };
    sennou_mukou = {
        element: element.auto,
        name: autoSkill.sennou_mukou,
        hp: undefined,
        cp: undefined,
        info: '洗脳にかからなくなる',
        relative: undefined,
    };
    hudoushin = {
        element: element.auto,
        name: autoSkill.hudoushin,
        hp: undefined,
        cp: undefined,
        info: '混乱・恐怖・激怒・絶望にかからなくなる',
        relative: undefined,
    };
    seishintaisei = {
        element: element.auto,
        name: autoSkill.seishintaisei,
        hp: undefined,
        cp: undefined,
        info: 'すべての状態異常にかかりにくくなる',
        relative: undefined,
    };

    autoSkillList: Array<Skill> = [
        this.seimitu_syageki,
        this.kyusyouti,
        this.kaen_booster,
        this.kaen_highbooster,
        this.hyouketu_booster,
        this.hyouketu_highbooster,
        this.dengeki_booster,
        this.dengeki_highbooster,
        this.shippu_booster,
        this.shippu_highbooster,
        this.nenndou_booster,
        this.nenndou_highbooster,
        this.kakunetu_booster,
        this.kakunetu_highbooster,
        this.syukuhuku_booster,
        this.syukuhuku_highbooster,
        this.juon_booster,
        this.juon_highbooster,
        this.banno_booster,
        this.banno_highbooster,
        this.madounosainou,

        this.kamigaminokago,
        this.hama_up,
        this.mudo_up,
        this.enjou_up,
        this.touketu_up,
        this.kanden_up,
        this.memai_up,
        this.boukyaku_up,
        this.suimin_up,
        this.konran_up,
        this.kyohu_up,
        this.zetubou_up,
        this.gekido_up,
        this.sennou_up,
        this.ab_state_up,

        this.kougeki,
        this.bougyo,
        this.subayasa,
        this.mahatarukaauto,
        this.maharakukaauto,
        this.mahasukukaauto,
        this.heatup,
        this.high_voltage,
        this.gyakkyounokakugo,
        this.haisuinojin,
        this.ameniutaeba,
        this.ukanaisora,

        this.syoutiyusokushin,
        this.tyutiyusokushin,
        this.daitiyusokushin,
        this.syoukikou,
        this.tyukikou,
        this.daikikou,
        this.budounokokoroe,
        this.majutunosoyou,
        this.counter,
        this.heavy_counter,
        this.highper_counter,

        this.couching,
        this.advice,
        this.triger_happy,
        this.touch_and_go,
        this.soul_chain,
        this.nioudati,
        this.kyusokukaihuku,
        this.syunkankaihuku,
        this.kuishibari,
        this.hukutunotoushi,
        this.seikan_tric,
        this.syourinoibuki,
        this.syourinootakebi,
        this.low_grow,
        this.middle_grow,
        this.high_grow,

        this.buturi_mikiri,
        this.kyoku_buturi_mikiri ,
        this.buturi_taisei ,
        this.buturi_mukou ,
        this.buturi_hansya ,
        this.buturi_kyusyu ,
        this.kaen_mikiri ,
        this.kyoku_kaen_mikiri ,
        this.kaen_taisei ,
        this.kaen_mukou ,
        this.kaen_hansha ,
        this.kaen_kyusyu ,
        this.hyouketu_mikiri ,
        this.kyoku_hyouketu_mikiri ,
        this.hyouketu_taisei ,
        this.hyouketu_mukou ,
        this.hyouketu_hansha ,
        this.hyouketu_kyusyu ,
        this.dengeki_mikiri ,
        this.kyoku_dengeki_mikiri ,
        this.dengeki_taisei ,
        this.dengeki_mukou ,
        this.dengeki_hansya ,
        // dengeki_kyusyu = '電撃吸収',
        this.sippu_mikiri ,
        this.kyoku_sippu_mikiri ,
        this.sippu_taisei ,
        this.sippu_mukou ,
        // sippu_hansya = '疾風反射',
        this.sippu_kyusyu ,
        this.nenndou_mikiri ,
        this.kyoku_nenndou_mikiri ,
        this.nenndou_taisei ,
        this.nenndou_mukou ,
        // nenndou_hansya = '念動反射',
        this.nenndou_kyusyu,
        this.kakunetu_mikiri ,
        this.kyoku_kakunetu_mikiri ,
        this.kakunetu_taisei ,
        this.kakunetu_mukou ,
        this.kakunetu_hansya ,
        this.kakunetu_kyusyu ,
        this.syukuhuku_mikiri ,
        this.kyoku_syukuhuku_mikiri ,
        this.syukuhuku_taisei ,
        this.syukuhuku_mukou ,
        // syukuhuku_hansya = '祝福反射',
        this.syukuhuku_kyusyu ,
        this.juon_mikiri ,
        this.kyoku_juon_mikiri ,
        this.juon_taisei ,
        this.juon_mukou ,
        this.juon_hansya ,
        this.juon_kyusyu ,
        this.ari_dance ,
        this.daitenshinokago ,
    
        this.memai_taisei ,
        this.memai_mukou ,
        this.boukyaku_taisei ,
        this.boukyaku_mukou ,
        this.konran_taisei ,
        this.konran_mukou ,
        this.suimin_taisei ,
        this.suimin_mukou ,
        this.kyohu_taisei ,
        this.kyohu_mukou,
        this.zetubou_taisei ,
        this.zetubou_mukou ,
        this.gekido_taisei ,
        this.gekido_mukou ,
        this.sennou_taisei ,
        this.sennou_mukou ,
        this.hudoushin ,
        this.seishintaisei ,
    ]
}
