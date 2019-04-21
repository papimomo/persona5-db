import { arcana } from './personaDb';

export class HoumaFusion {

    static getValue(houma, arcana) {
        let value;
        switch (houma.name) {
            case 'リージェント':
                value = this.regent(arcana);
                break;
            case '女王の首飾り':
                value = this.joounokubikazari(arcana);
                break;
            case 'スクーンの石':
                value = this.sukun(arcana);
                break;
            case 'コ・イ・ヌール':
                value = this.koinuru(arcana);
                break;
            case 'オルロフ':
                value = this.orurohu(arcana);
                break;
            case '大帝の護符':
                value = this.taiteinogohu(arcana);
                break;
            case 'ホープダイヤ':
                value = this.hopedaiya(arcana);
                break;
            case '水晶髑髏':
                value = this.suisyoudokuro(arcana);
                break;

        }
        return value;
    }

    private static regent(tgrArcana: arcana) {
        let value: number;
        switch (tgrArcana) {
            case arcana.gusya:
                value = -1;
                break;
            case arcana.majutushi:
                value = 1;
                break;
            case arcana.kyoukou:
                value = -1;
                break;
            case arcana.jotei:
                value = -1;
                break;
            case arcana.koutei:
                value = 2;
                break;
            case arcana.houou:
                value = 2;
                break;
            case arcana.rennai:
                value = -1;
                break;
            case arcana.sensya:
                value = 1;
                break;
            case arcana.seigi:
                value = 1;
                break;
            case arcana.inja:
                value = 2;
                break;
            case arcana.unmei:
                value = 1;
                break;
            case arcana.gouki:
                value = -1;
                break;
            case arcana.keishisya:
                value = 1;
                break;
            case arcana.shinigami:
                value = 1;
                break;
            case arcana.sessei:
                value = -1;
                break;
            case arcana.akuma:
                value = -2;
                break;
            case arcana.tou:
                value = -1;
                break;
            case arcana.hoshi:
                value = 1;
                break;
            case arcana.tuki:
                value = -1;
                break;
            case arcana.taiyou:
                value = 1;
                break;
            case arcana.shinpan:
                value = -1;
                break;

        }
        return value;
    }


    private static joounokubikazari(tgrArcana: arcana) {
        let value: number;
        switch (tgrArcana) {
            case arcana.gusya:
                value = 1;
                break;
            case arcana.majutushi:
                value = -1;
                break;
            case arcana.kyoukou:
                value = 1;
                break;
            case arcana.jotei:
                value = 2;
                break;
            case arcana.koutei:
                value = -1;
                break;
            case arcana.houou:
                value = 1;
                break;
            case arcana.rennai:
                value = 1;
                break;
            case arcana.sensya:
                value = -1;
                break;
            case arcana.seigi:
                value = -1;
                break;
            case arcana.inja:
                value = -1;
                break;
            case arcana.unmei:
                value = -1;
                break;
            case arcana.gouki:
                value = 1;
                break;
            case arcana.keishisya:
                value = 1;
                break;
            case arcana.shinigami:
                value = -1;
                break;
            case arcana.sessei:
                value = 1;
                break;
            case arcana.akuma:
                value = 1;
                break;
            case arcana.tou:
                value = -2;
                break;
            case arcana.hoshi:
                value = -1;
                break;
            case arcana.tuki:
                value = 2;
                break;
            case arcana.taiyou:
                value = -1;
                break;
            case arcana.shinpan:
                value = -1;
                break;

        }
        return value;
    }

    private static sukun(tgrArcana: arcana) {
        let value: number;
        switch (tgrArcana) {
            case arcana.gusya:
                value = -1;
                break;
            case arcana.majutushi:
                value = 2;
                break;
            case arcana.kyoukou:
                value = -1;
                break;
            case arcana.jotei:
                value = -1;
                break;
            case arcana.koutei:
                value = 1;
                break;
            case arcana.houou:
                value = 2;
                break;
            case arcana.rennai:
                value = -1;
                break;
            case arcana.sensya:
                value = 1;
                break;
            case arcana.seigi:
                value = -1;
                break;
            case arcana.inja:
                value = -1;
                break;
            case arcana.unmei:
                value = 2;
                break;
            case arcana.gouki:
                value = -2;
                break;
            case arcana.keishisya:
                value = -1;
                break;
            case arcana.shinigami:
                value = 1;
                break;
            case arcana.sessei:
                value = -1;
                break;
            case arcana.akuma:
                value = -1;
                break;
            case arcana.tou:
                value = 1;
                break;
            case arcana.hoshi:
                value = 1;
                break;
            case arcana.tuki:
                value = 1;
                break;
            case arcana.taiyou:
                value = -1;
                break;
            case arcana.shinpan:
                value = -1;
                break;

        }
        return value;
    }

    private static koinuru(tgrArcana: arcana) {
        let value: number;
        switch (tgrArcana) {
            case arcana.gusya:
                value = 1;
                break;
            case arcana.majutushi:
                value = -1;
                break;
            case arcana.kyoukou:
                value = 2;
                break;
            case arcana.jotei:
                value = 1;
                break;
            case arcana.koutei:
                value = -1;
                break;
            case arcana.houou:
                value = -1;
                break;
            case arcana.rennai:
                value = 1;
                break;
            case arcana.sensya:
                value = -1;
                break;
            case arcana.seigi:
                value = 2;
                break;
            case arcana.inja:
                value = 1;
                break;
            case arcana.unmei:
                value = -1;
                break;
            case arcana.gouki:
                value = 1;
                break;
            case arcana.keishisya:
                value = -1;
                break;
            case arcana.shinigami:
                value = 1;
                break;
            case arcana.sessei:
                value = -1;
                break;
            case arcana.akuma:
                value = 1;
                break;
            case arcana.tou:
                value = 1;
                break;
            case arcana.hoshi:
                value = -1;
                break;
            case arcana.tuki:
                value = -1;
                break;
            case arcana.taiyou:
                value = 1;
                break;
            case arcana.shinpan:
                value = -1;
                break;

        }
        return value;
    }


    private static orurohu(tgrArcana: arcana) {
        let value: number;
        switch (tgrArcana) {
            case arcana.gusya:
                value = -1;
                break;
            case arcana.majutushi:
                value = 1;
                break;
            case arcana.kyoukou:
                value = 1;
                break;
            case arcana.jotei:
                value = 1;
                break;
            case arcana.koutei:
                value = -1;
                break;
            case arcana.houou:
                value = 2;
                break;
            case arcana.rennai:
                value = -1;
                break;
            case arcana.sensya:
                value = 1;
                break;
            case arcana.seigi:
                value = 1;
                break;
            case arcana.inja:
                value = 1;
                break;
            case arcana.unmei:
                value = -2;
                break;
            case arcana.gouki:
                value = 1;
                break;
            case arcana.keishisya:
                value = 1;
                break;
            case arcana.shinigami:
                value = -1;
                break;
            case arcana.sessei:
                value = 1;
                break;
            case arcana.akuma:
                value = 1;
                break;
            case arcana.tou:
                value = 1;
                break;
            case arcana.hoshi:
                value = 1;
                break;
            case arcana.tuki:
                value = 1;
                break;
            case arcana.taiyou:
                value = 1;
                break;
            case arcana.shinpan:
                value = 1;
                break;

        }
        return value;
    }


    private static taiteinogohu(tgrArcana: arcana) {
        let value: number;
        switch (tgrArcana) {
            case arcana.gusya:
                value = 1;
                break;
            case arcana.majutushi:
                value = 1;
                break;
            case arcana.kyoukou:
                value = -1;
                break;
            case arcana.jotei:
                value = 1;
                break;
            case arcana.koutei:
                value = 1;
                break;
            case arcana.houou:
                value = 1;
                break;
            case arcana.rennai:
                value = -1;
                break;
            case arcana.sensya:
                value = -2;
                break;
            case arcana.seigi:
                value = 1;
                break;
            case arcana.inja:
                value = 1;
                break;
            case arcana.unmei:
                value = -1;
                break;
            case arcana.gouki:
                value = 1;
                break;
            case arcana.keishisya:
                value = 2;
                break;
            case arcana.shinigami:
                value = -1;
                break;
            case arcana.sessei:
                value = 1;
                break;
            case arcana.akuma:
                value = 2;
                break;
            case arcana.tou:
                value = 1;
                break;
            case arcana.hoshi:
                value = -1;
                break;
            case arcana.tuki:
                value = -1;
                break;
            case arcana.taiyou:
                value = -1;
                break;
            case arcana.shinpan:
                value = 1;
                break;

        }
        return value;
    }


    private static hopedaiya(tgrArcana: arcana) {
        let value: number;
        switch (tgrArcana) {
            case arcana.gusya:
                value = 1;
                break;
            case arcana.majutushi:
                value = 1;
                break;
            case arcana.kyoukou:
                value = 1;
                break;
            case arcana.jotei:
                value = -1;
                break;
            case arcana.koutei:
                value = 1;
                break;
            case arcana.houou:
                value = 1;
                break;
            case arcana.rennai:
                value = -2;
                break;
            case arcana.sensya:
                value = -1;
                break;
            case arcana.seigi:
                value = -1;
                break;
            case arcana.inja:
                value = 1;
                break;
            case arcana.unmei:
                value = 1;
                break;
            case arcana.gouki:
                value = -1;
                break;
            case arcana.keishisya:
                value = -1;
                break;
            case arcana.shinigami:
                value = 2;
                break;
            case arcana.sessei:
                value = -1;
                break;
            case arcana.akuma:
                value = -1;
                break;
            case arcana.tou:
                value = -1;
                break;
            case arcana.hoshi:
                value = 1;
                break;
            case arcana.tuki:
                value = -1;
                break;
            case arcana.taiyou:
                value = 2;
                break;
            case arcana.shinpan:
                value = -1;
                break;

        }
        return value;
    }


    private static suisyoudokuro(tgrArcana: arcana) {
        let value: number;
        switch (tgrArcana) {
            case arcana.gusya:
                value = 2;
                break;
            case arcana.majutushi:
                value = 1;
                break;
            case arcana.kyoukou:
                value = 1;
                break;
            case arcana.jotei:
                value = 1;
                break;
            case arcana.koutei:
                value = -1;
                break;
            case arcana.houou:
                value = 1;
                break;
            case arcana.rennai:
                value = 1;
                break;
            case arcana.sensya:
                value = -1;
                break;
            case arcana.seigi:
                value = 1;
                break;
            case arcana.inja:
                value = -2;
                break;
            case arcana.unmei:
                value = -1;
                break;
            case arcana.gouki:
                value = -1;
                break;
            case arcana.keishisya:
                value = -1;
                break;
            case arcana.shinigami:
                value = 1;
                break;
            case arcana.sessei:
                value = 2;
                break;
            case arcana.akuma:
                value = -1;
                break;
            case arcana.tou:
                value = -1;
                break;
            case arcana.hoshi:
                value = 1;
                break;
            case arcana.tuki:
                value = -1;
                break;
            case arcana.taiyou:
                value = 1;
                break;
            case arcana.shinpan:
                value = -1;
                break;

        }
        return value;
    }
}